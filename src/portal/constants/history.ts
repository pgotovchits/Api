/**
 * Get chats history (for history chats page)
 * @type {string}
 */
export const HISTORY_GET_CHATS = "history/GET_CHATS";

/**
 * Get full single chat history information
 * @type {string}
 */
export const HISTORY_GET_CHAT = "history/GET_CHAT";

/**
 * Set communication(s) notified
 */
export const SET_NOTIFIED = "communication/SET_NOTIFIED";

/**
 * Communication(s) was notified
 */
export const REALTIME_WAS_NOTIFIED = "communication/WAS_NOTIFIED";

/**
 * Communication(s) was un-notified
 * For now it's for only one case when visitor add postscriptum message to already notified communication
 */
export const REALTIME_WAS_UNNOTIFIED = "communication/WAS_UNNOTIFIED";

/**
 * Claim communication
 */
export const SET_CLAIMED = "communication/SET_CLAIMED";

/**
 * History communication was claimed (assigned ownership)
 */
export const REALTIME_WAS_CLAIMED = "communication/WAS_CLAIMED";

/**
 * Communication(s) archived
 */
export const SET_ARCHIVED_STATUS = "communication/SET_ARCHIVED_STATUS";

/**
 * Communication(s) was archived
 */
export const REALTIME_ARCHIVED_STATUS_CHANGED = "communication/ARCHIVED_STATUS_CHANGED";