/**
 * Some realtime events used by both frontend and backend
 */

/**
 * Indicates that event is coming from frontend
 */
export const FRONTEND_REALTIME_EVENT = "@@frontend/realtime";
/**
 * Indicates that event is coming from frontend to unauthenticated route (signup/login/etc..)
 */
export const FRONTEND_UNAUTHENTICATED_REALTIME_EVENT = "@@frontend/unauth-realtime";
/**
 * Indicates that event is coming from backend
 */
export const BACKEND_REALTIME_EVENT = "@@backend/realtime";
/**
 * Indicates that event is coming from visitor app
 * @type {string}
 */
export const VISITOR_REALTIME_EVENT = "@@visitor/realtime";