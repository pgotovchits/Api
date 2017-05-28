/**
 * Chat was ended by agent
 */
export const END_CHAT = "communication/END_CHAT";

/**
 * Accept chat (agent side action)
 */
export const ANSWER_CHAT = "communication/ACCEPT_CHAT";

/**
 * Update chat (new chat message or typing indicator) by agent
 */
export const UPDATE_CHAT = "communication/UPDATE_CHAT";

/**
 * Create chat realtime action (for team agents)
 */
export const REALTIME_CREATE_CHAT = "communication/NEW_CHAT";

/**
 * Chat has been canceled (either by visitor request/visitor leaving page or by timeout)
 */
export const REALTIME_CHAT_CANCELED = "communication/CHAT_CANCELED";

/**
 * Chat has been ended. This differ from cancel by previous chat status - it's ended when it previously was active
 */
export const REALTIME_CHAT_ENDED = "communication/CHAT_ENDED";

/**
 * Chat was answered
 */
export const REALTIME_CHAT_ANSWERED = "communication/CHAT_ANSWERED";

/**
 * Chat was updated by either typing indicator or chat message
 */
export const REALTIME_CHAT_UPDATED = "communication/CHAT_UPDATED";

/**
 * Postscriptum message was added by visitor
 */
export const REALTIME_POSTSCRIPTUM_ADDED = "communication/POSTSCRIPTUM_ADDED";
