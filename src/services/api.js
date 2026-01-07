import axios from 'axios';
import { API_CONFIG } from '../constants/config';

// --------------------
// Axios Instance
// --------------------
const apiClient = axios.create({
    baseURL: API_CONFIG.baseURL,
    timeout: API_CONFIG.timeout,
    headers: API_CONFIG.headers
});

// Request interceptor: Add auth token
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor: Handle errors globally
apiClient.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (error.response) {
            const { status, data } = error.response;
            if (status === 401) {
                localStorage.removeItem('authToken');
                window.location.href = '/login';
            }
            return Promise.reject(data || error.message);
        } else if (error.request) {
            return Promise.reject('Network error. Please check your connection.');
        } else {
            return Promise.reject(error.message);
        }
    }
);

// --------------------
// Helper: Mock Response
// --------------------
const mockResponse = (data, delay = 1000) =>
    new Promise((resolve) => setTimeout(() => resolve(data), delay));

// --------------------
// AUTH SERVICES
// --------------------
export const authService = {
    login: async (credentials) => {
        return mockResponse({
            success: true,
            data: {
                user: { id: '1', email: credentials.email, name: 'John Doe', role: credentials.role || 'client' },
                token: 'mock-jwt-token-' + Date.now()
            }
        });
        // For real API:
        // return apiClient.post('/auth/login', credentials);
    },

    register: async (userData) => {
        return mockResponse({
            success: true,
            data: {
                user: { id: '1', ...userData },
                token: 'mock-jwt-token-' + Date.now()
            }
        });
        // For real API:
        // return apiClient.post('/auth/register', userData);
    },

    logout: async () => {
        localStorage.removeItem('authToken');
        return mockResponse({ success: true }, 500);
        // For real API:
        // return apiClient.post('/auth/logout');
    },

    getProfile: async () => {
        return mockResponse({
            success: true,
            data: {
                id: '1',
                name: 'John Doe',
                email: 'john@example.com',
                role: 'client',
                phone: '+1234567890',
                avatar: null
            }
        }, 500);
        // For real API:
        // return apiClient.get('/auth/profile');
    }
};

// --------------------
// PROJECT SERVICES
// --------------------
export const projectService = {
    getProjects: async (params = {}) => {
        return mockResponse({
            success: true,
            data: {
                projects: [
                    {
                        id: '1',
                        title: 'Residential House Construction',
                        description: 'Need experienced contractor for building a 3-bedroom house',
                        category: 'Residential Construction',
                        budget: '$50,000 - $75,000',
                        location: { lat: 40.7128, lng: -74.0060, address: 'New York, NY' },
                        status: 'open',
                        postedDate: '2025-01-01',
                        client: { name: 'John Smith', rating: 4.8 }
                    },
                    {
                        id: '2',
                        title: 'Office Renovation Project',
                        description: 'Complete renovation of 2000 sq ft office space',
                        category: 'Commercial Construction',
                        budget: '$30,000 - $45,000',
                        location: { lat: 40.7589, lng: -73.9851, address: 'Manhattan, NY' },
                        status: 'open',
                        postedDate: '2025-01-02',
                        client: { name: 'Tech Corp', rating: 4.9 }
                    },
                    {
                        id: '3',
                        title: 'Plumbing Repair Needed',
                        description: 'Fix leaking pipes and install new fixtures',
                        category: 'Plumbing',
                        budget: '$2,000 - $3,500',
                        location: { lat: 40.7489, lng: -73.9080, address: 'Queens, NY' },
                        status: 'open',
                        postedDate: '2025-01-03',
                        client: { name: 'Sarah Johnson', rating: 4.7 }
                    }
                ],
                pagination: { page: 1, limit: 10, total: 3, totalPages: 1 }
            }
        });
    },

    getProjectById: async (id) => {
        return mockResponse({
            success: true,
            data: {
                id,
                title: 'Residential House Construction',
                description: 'Need experienced contractor for building a 3-bedroom house with modern amenities',
                category: 'Residential Construction',
                budget: '$50,000 - $75,000',
                location: { lat: 40.7128, lng: -74.0060, address: 'New York, NY' },
                status: 'open',
                postedDate: '2025-01-01',
                deadline: '2025-06-30',
                requirements: ['Licensed contractor', 'Insurance required', '5+ years experience'],
                client: { name: 'John Smith', rating: 4.8, projectsPosted: 12 },
                bids: []
            }
        }, 800);
    },

    createProject: async (projectData) => {
        return mockResponse({
            success: true,
            data: {
                id: Date.now().toString(),
                ...projectData,
                status: 'open',
                postedDate: new Date().toISOString()
            }
        });
    }
};

// --------------------
// LABOR SERVICES
// --------------------
export const laborService = {
    searchLabor: async (params = {}) => {
        return mockResponse({
            success: true,
            data: {
                labor: [
                    {
                        id: '1',
                        name: 'Mike Johnson',
                        skills: ['Plumbing', 'HVAC'], 
                        rating: 4.9,
                        completedJobs: 150,
                        hourlyRate: '$45/hr',
                        location: 'New York, NY',
                        available: true,
                        avatar: null
                    },
                    {
                        id: '2',
                        name: 'Sarah Williams',
                        skills: ['Electrical', 'Carpentry'], 
                        rating: 4.8,
                        completedJobs: 120,
                        hourlyRate: '$50/hr',
                        location: 'Brooklyn, NY',
                        available: true,
                        avatar: null
                    }
                ]
            }
        });
    },

    getLaborById: async (id) => {
        return mockResponse({
            success: true,
            data: {
                id,
                name: 'Mike Johnson',
                skills: ['Plumbing', 'HVAC', 'General Repairs'],
                rating: 4.9,
                completedJobs: 150,
                hourlyRate: '$45/hr',
                location: 'New York, NY',
                available: true,
                bio: 'Experienced plumber with 10+ years in residential and commercial projects',
                certifications: ['Licensed Plumber', 'HVAC Certified'],
                reviews: [
                    {
                        id: '1',
                        client: 'John Doe',
                        rating: 5,
                        comment: 'Excellent work, very professional!',
                        date: '2025-01-01'
                    }
                ]
            }
        });
    }
};


export default apiClient;
