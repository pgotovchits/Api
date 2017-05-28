/**
 * Token update
 * @type {string}
 */
export const REALTIME_TOKEN_UPDATE = "auth/REALTIME_TOKEN_UPDATE";

/**
 * Token update failed (mostly due to problems in API backend)
 * @type {string}
 */
export const REALTIME_TOKEN_UPDATE_FAILED = "auth/REALTIME_TOKEN_UPDATE_FAILED";

/**
 * User sign up action
 * @type {string}
 */
export const SIGNUP_OLD = "auth/SIGNUP";

/**
 * TODO: Versioning
 */
export const SIGNUP = "auth/SIGNUP_V2";

/**
 * User login action
 * @type {string}
 */
export const LOGIN = "auth/LOGIN";

/**
 * Async validate email action
 * @type {string}
 */
export const VALIDATE_EMAIL = "auth/VALIDATE_EMAIL";

/**
 * User logout action
 * @type {string}
 */
export const LOGOUT = "auth/LOGOUT";

/**
 * Realtime logout action
 * @type {string}
 */
export const REALTIME_LOGOUT = "auth/REALTIME_LOGOUT";

/**
 * Request to send the email to reset the password
 * @type {string}
 */
export const RESET_PASSWORD_EMAIL_SEND = "auth/RESET_PASSWORD_EMAIL_SEND";

/**
 * Reset password with code
 * @type {string}
 */
export const RESET_PASSWORD = "auth/RESET_PASSWORD";

/**
 * Activate user with code
 */
export const ACTIVATE_USER = "auth/ACTIVATE_USER";
/**
 * Resend activation code
 */
export const RESEND_ACTIVATION = "auth/RESEND_ACTIVATION";