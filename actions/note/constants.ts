/**
 * Create note request
 * @type {string}
 */
export const CREATE_NOTE = "note/CREATE";

/**
 * Delete note request
 * @type {string}
 */
export const DELETE_NOTE = "note/DELETE";

/**
 * Change note request
 * @type {string}
 */
export const CHANGE_NOTE = "note/CHANGE";

/**
 * Note was created by other agent
 * @type {string}
 */
export const REALTIME_NOTE_CREATED = "note/NOTE_WAS_CREATED";

/**
 * Note was deleted by someone
 * @type {string}
 */
export const REALTIME_NOTE_DELETED = "note/NOTE_WAS_DELETED";

/**
 * Note text was changed by someone
 * @type {string}
 */
export const REALTIME_NOTE_CHANGED = "note/NOTE_WAS_CHANGED";