/**
 * Create chat request
 * @type {string}
 */
export const CREATE_CHAT = "communication/CREATE_CHAT";

/**
 * Cancel chat (visitor side action)
 * @type {string}
 */
export const CANCEL_CHAT = "communication/CANCEL_CHAT";

/**
 * Chat was ended by visitor or agent
 * @type {string}
 */
export const END_CHAT = "communication/END_CHAT";

/**
 * Accept chat (agent side action)
 * @type {string}
 */
export const ANSWER_CHAT = "communication/ACCEPT_CHAT";

/**
 * Update chat (new chat message or typing indicator) - both agent & visitor action
 * @type {string}
 */
export const UPDATE_CHAT = "communication/UPDATE_CHAT";

/**
 * Create chat realtime action (for website agents)
 * @type {string}
 */
export const REALTIME_CREATE_CHAT = "communication/NEW_CHAT";

/**
 * Chat has been canceled (either by visitor request/visitor leaving page or by timeout)
 * @type {string}
 */
export const REALTIME_CHAT_CANCELED = "communication/CHAT_CANCELED";

/**
 * Chat has been ended. This differ from cancel by previous chat status - it's ended when it previously was active
 * @type {string}
 */
export const REALTIME_CHAT_ENDED = "communication/CHAT_ENDED";

/**
 * Chat was answered
 * @type {string}
 */
export const REALTIME_CHAT_ANSWERED = "communication/CHAT_ANSWERED";

/**
 * Chat was updated by either typing indicator or chat message
 * @type {string}
 */
export const REALTIME_CHAT_UPDATED = "communication/CHAT_UPDATED";