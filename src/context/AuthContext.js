import React, { createContext, useState, useContext, useEffect } from 'react';
import { authService } from './services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Auto-login
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) return setLoading(false);

            try {
                const response = await authService.getProfile();
                if (response.success) setUser(response.data);
                else localStorage.removeItem('authToken');
            } catch (err) {
                console.error("Auth check failed:", err);
                localStorage.removeItem('authToken');
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    const handleAuthResponse = (response) => {
        if (response.success) {
            const { user: userData, token } = response.data;
            localStorage.setItem('authToken', token);
            setUser(userData);
            return { success: true };
        }
        throw new Error('Authentication failed');
    };

    const login = async (credentials) => {
        try {
            setError(null); setLoading(true);
            const response = await authService.login(credentials);
            return handleAuthResponse(response);
        } catch (err) {
            const msg = err.message || 'Login failed. Please try again.';
            setError(msg);
            return { success: false, error: msg };
        } finally { setLoading(false); }
    };

    const register = async (userData) => {
        try {
            setError(null); setLoading(true);
            const response = await authService.register(userData);
            return handleAuthResponse(response);
        } catch (err) {
            const msg = err.message || 'Registration failed. Please try again.';
            setError(msg);
            return { success: false, error: msg };
        } finally { setLoading(false); }
    };

    const logout = async () => {
        try {
            await authService.logout();
        } catch (err) {
            console.error('Logout API error:', err);
        } finally {
            localStorage.removeItem('authToken');
            setUser(null);
        }
        return { success: true };
    };

    const updateProfile = (updates) => {
        setUser(prev => ({ ...prev, ...updates }));
    };

    return (
        <AuthContext.Provider value={{ user, loading, error, login, register, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};
