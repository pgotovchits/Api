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
 * History communication was claimed (assigned ownership)
 */
export const REALTIME_WAS_CLAIMED = "communication/WAS_CLAIMED";