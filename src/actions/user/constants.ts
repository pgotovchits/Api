/**
 * Shared constants for user actions
 */


/**
 * User update action (changes email, name, etc...)
 * @type {string}
 */
export const USER_UPDATE = "user/USER_UPDATE";

/**
 * User password update action
 * @type {string}
 */
export const USER_PASSWORD_UPDATE = "user/USER_PASSWORD_UPDATE";

/**
 * User updated own information (email/firstName/lastName)
 * @type {string}
 */
export const REALTIME_USER_WAS_UPDATED = "user/USER_UPDATED";

/**
 * Register current user device for push notifications
 * @type {string}
 */
export const REGISTER_FOR_PUSH_NOTIFICATIONS = "user/REGISTER_FOR_PUSH_NOTIFICATIONS";