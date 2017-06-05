/**
 * Token update
 */
export const REALTIME_TOKEN_UPDATE = "auth/REALTIME_TOKEN_UPDATE";

/**
 * Token update failed (mostly due to problems in API backend)
 */
export const REALTIME_TOKEN_UPDATE_FAILED = "auth/REALTIME_TOKEN_UPDATE_FAILED";

/**
 * User sign up action
 */
export const SIGNUP_OLD = "auth/SIGNUP";

/**
 * TODO: Versioning
 */
export const SIGNUP = "auth/SIGNUP_V2";

/**
 * User login action
 */
export const LOGIN = "auth/LOGIN";

/**
 * Async validate email action
 */
export const VALIDATE_EMAIL = "auth/VALIDATE_EMAIL";

/**
 * User logout action
 */
export const LOGOUT = "auth/LOGOUT";

/**
 * Realtime logout action
 */
export const REALTIME_LOGOUT = "auth/REALTIME_LOGOUT";

/**
 * Request to send the email to reset the password
 */
export const RESET_PASSWORD_EMAIL_SEND = "auth/RESET_PASSWORD_EMAIL_SEND";

/**
 * Reset password with code
 */
export const RESET_PASSWORD = "auth/RESET_PASSWORD";