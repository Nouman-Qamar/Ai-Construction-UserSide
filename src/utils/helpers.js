/* =========================
   FORMATTERS
========================= */

/**
 * Format currency
 */
export const formatCurrency = (amount, currency = 'USD') => {
    if (typeof amount !== 'number') return '';
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency
    }).format(amount);
};

/**
 * Format date
 */
export const formatDate = (date, format = 'short') => {
    const dateObj = new Date(date);
    if (isNaN(dateObj)) return '';

    if (format === 'relative') {
        return getRelativeTime(dateObj);
    }

    const options =
        format === 'long'
            ? { year: 'numeric', month: 'long', day: 'numeric' }
            : { year: 'numeric', month: 'short', day: 'numeric' };

    return new Intl.DateTimeFormat('en-US', options).format(dateObj);
};

/**
 * Relative time (e.g. "2 hours ago")
 */
export const getRelativeTime = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 0) return 'In the future';

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };

    for (const [unit, seconds] of Object.entries(intervals)) {
        const interval = Math.floor(diffInSeconds / seconds);
        if (interval >= 1) {
            return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
        }
    }

    return 'Just now';
};

/**
 * Truncate text
 */
export const truncateText = (text, maxLength = 100) => {
    if (!text || text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
};

/* =========================
   PERFORMANCE HELPERS
========================= */

export const debounce = (func, wait = 300) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

export const throttle = (func, limit = 300) => {
    let inThrottle = false;
    return (...args) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

/* =========================
   VALIDATION & UTILS
========================= */

export const generateId = () =>
    Date.now().toString(36) + Math.random().toString(36).slice(2);

export const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isValidPhone = (phone) =>
    /^[+()0-9\-\s]{10,15}$/.test(phone);

export const capitalize = (string) =>
    string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : '';

/* =========================
   GEO & MATH
========================= */

export const calculateDistance = (coord1, coord2) => {
    const R = 6371;
    const toRad = (v) => (v * Math.PI) / 180;

    const dLat = toRad(coord2.lat - coord1.lat);
    const dLng = toRad(coord2.lng - coord1.lng);

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(coord1.lat)) *
            Math.cos(toRad(coord2.lat)) *
            Math.sin(dLng / 2) ** 2;

    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

/* =========================
   FILE & OBJECT HELPERS
========================= */

export const formatFileSize = (bytes) => {
    if (!bytes) return '0 Bytes';
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};

export const deepClone = (obj) =>
    obj ? JSON.parse(JSON.stringify(obj)) : obj;

export const groupBy = (array, key) =>
    array.reduce((acc, item) => {
        acc[item[key]] = acc[item[key]] || [];
        acc[item[key]].push(item);
        return acc;
    }, {});

/* =========================
   BROWSER HELPERS
========================= */

export const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        return false;
    }
};

export const isInViewport = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
    );
};

export const getQueryParams = () =>
    Object.fromEntries(new URLSearchParams(window.location.search));

export const randomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

/* =========================
   DEFAULT EXPORT
========================= */

export default {
    formatCurrency,
    formatDate,
    getRelativeTime,
    truncateText,
    debounce,
    throttle,
    generateId,
    isValidEmail,
    isValidPhone,
    capitalize,
    calculateDistance,
    formatFileSize,
    deepClone,
    groupBy,
    sleep,
    copyToClipboard,
    isInViewport,
    getQueryParams,
    randomColor
};
