/**
 * Visitor creates chat action
 */
export const VISITOR_CREATE_CHAT = "visitor/CREATE_CHAT";

/**
 * Visitor cancels pending chat action
 */
export const VISITOR_CANCEL_CHAT = "visitor/CANCEL_CHAT";

/**
 * Visitor ends chat action
 */
export const VISITOR_END_CHAT = "visitor/END_CHAT";
/**
 * Visitor updates chat action
 */
export const VISITOR_UPDATE_CHAT = "visitor/UPDATE_CHAT";

/**
 * Visitors leaves postscriptum message action
 */
export const VISITOR_ADD_POSTSCRIPTUM = "visitor/ADD_POSTSCRIPTUM";

/**
 * Chat has been canceled by timeout
 */
export const REALTIME_CHAT_CANCELED = "visitor/CHAT_CANCELED";

/**
 * Chat was answered by agent
 */
export const REALTIME_CHAT_ANSWERED = "visitor/CHAT_ANSWERED";

/**
 * Chat was ended by agent
 */
export const REALTIME_CHAT_ENDED = "visitor/CHAT_ENDED";

/**
 * Chat was updated by agent
 */
export const REALTIME_CHAT_UPDATED = "visitor/CHAT_UPDATED";