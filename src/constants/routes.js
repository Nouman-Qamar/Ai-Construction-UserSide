export const ROUTES = Object.freeze({
  // Public
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  HOW_IT_WORKS: "/how-it-works",

  // Auth
  LOGIN: "/login",
  SIGNUP: "/signup",
  LOGIN_AS: "/login-as",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",

  // Projects
  PROJECTS: "/projects",                 // list + search
  PROJECT_DETAILS: "/projects/:id",
  POST_PROJECT: "/post-project",
  MY_PROJECTS: "/my-projects",

  // Labor
  LABOR_SEARCH: "/labor-search",
  LABOR_DETAILS: "/labor-details/:id",
  LABOR_PROFILE: "/labor-profile",

  // User
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  SETTINGS: "/settings",
  NOTIFICATIONS: "/notifications",

  // Other
  CONTACT: "/contact",
  HELP: "/help",
  PRIVACY: "/privacy",
  TERMS: "/terms",
});

/* ================= HELPERS ================= */
export const generateRoute = (route, params = {}) => {
  let path = route;
  Object.entries(params).forEach(([key, value]) => {
    path = path.replace(`:${key}`, value);
  });
  return path;
};

export default ROUTES;
