// ================= APP CONFIG =================
export const APP_CONFIG = Object.freeze({
    name: 'BuilderFlow',
    tagline: 'Connect. Build. Succeed.',
    version: '2.6.0',
    apiTimeout: 30000,
    defaultLanguage: 'en',
    supportEmail: 'support@builderflow.com',
    supportPhone: '(555) 123-4567'
});

// ================= API CONFIG =================
export const API_CONFIG = Object.freeze({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Optional helper for Authorization
export const getApiHeaders = (token) => ({
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
});

// ================= MAP CONFIG =================
export const MAP_CONFIG = Object.freeze({
    defaultCenter: { lat: 40.7128, lng: -74.0060 },
    defaultZoom: 12,
    apiKey: import.meta.env.VITE_MAP_API_KEY || 'demo-key'
});

// ================= PAGINATION =================
export const PAGINATION = Object.freeze({
    defaultPageSize: 10,
    pageSizeOptions: [10, 20, 50, 100]
});

// ================= USER ROLES =================
export const USER_ROLES = Object.freeze({
    CLIENT: 'client',
    CONTRACTOR: 'contractor',
    LABOR: 'labor',
    ADMIN: 'admin'
});

// ================= PROJECT STATUS =================
export const PROJECT_STATUS = Object.freeze({
    DRAFT: 'draft',
    OPEN: 'open',
    IN_PROGRESS: 'in_progress',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled'
});

// ================= PROJECT CATEGORIES =================
export const PROJECT_CATEGORIES = Object.freeze([
    'Residential Construction',
    'Commercial Construction',
    'Renovation',
    'Plumbing',
    'Electrical',
    'HVAC',
    'Painting',
    'Carpentry',
    'Landscaping',
    'Roofing',
    'Flooring',
    'Other'
]);

// ================= PRIORITY LEVELS =================
export const PRIORITY_LEVELS = Object.freeze({
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
    URGENT: 'urgent'
});

export default APP_CONFIG;
