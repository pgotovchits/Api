/**
 * User update action (changes email, name, etc...)
 */
export const USER_UPDATE = "user/USER_UPDATE";

/**
 * User password update action
 */
export const USER_PASSWORD_UPDATE = "user/USER_PASSWORD_UPDATE";

/**
 * User updated own information (email/firstName/lastName)
 */
export const REALTIME_USER_WAS_UPDATED = "user/USER_UPDATED";

/**
 * Register current user device for push notifications
 */
export const REGISTER_FOR_PUSH_NOTIFICATIONS = "user/REGISTER_FOR_PUSH_NOTIFICATIONS";

/**
 * Send feedback message
 */
export const SEND_FEEDBACK = "user/SEND_FEEDBACK";
/**
 * Activate user with code
 * Note: Keeping auth/ for compatibility with 1.1
 */
export const ACTIVATE_USER = "auth/ACTIVATE_USER";
/**
 * Resend activation code for user
 * Note: Keeping auth/ for compatibility with 1.1
 */
export const RESEND_ACTIVATION = "auth/RESEND_ACTIVATION";