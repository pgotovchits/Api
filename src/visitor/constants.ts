
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
 * Get team information with agent availability
 */
export const VISITOR_GET_TEAM_INFO = "visitor/GET_TEAM_INFO";

/**
 * Track visitor visit
 */
export const VISITOR_TRACK_VISIT = "visitor/TRACK_LINK_CLICK";


/********************* Server side actions ****************************/

/**
 * Visitor connection established
 * 
 */
export const REALTIME_VISITOR_CONNECTION = "visitor/CONNECTION";

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