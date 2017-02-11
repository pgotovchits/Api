/**
 * Shared constant for team actions
 */

/**
 * Delete tean
 * @type {string}
 */
export const DELETE_TEAM = "team/DELETE_TEAM";

/**
 * Team was deleted
 * @type {string}
 */
export const REALTIME_TEAM_WAS_DELETED = "team/WAS_DELETED";

/**
 * Create team
 * @type {string}
 */
export const CREATE_TEAM = "team/CREATE_TEAM";

/**
 * Change team name
 * @type {string}
 */
export const CHANGE_TEAM_NAME = "team/CHANGE_TEAM_NAME";

/**
 * Team name was changed
 * @type {string}
 */
export const REALTIME_TEAM_NAME_CHANGED = "team/NAME_CHANGED";

/**
 * Delete team invite
 * @type {string}
 */
export const DELETE_TEAM_INVITE = "team/DELETE_INVITE";

/**
 * Delete team member
 * @type {string}
 */
export const DELETE_TEAM_MEMBER = "team/DELETE_MEMBER";

/**
 * Change member role
 * @type {string}
 */
export const CHANGE_TEAM_MEMBER_ROLE = "team/CHANGE_MEMBER_ROLE";

/**
 * Role was changed for user
 * @type {string}
 */
export const REALTIME_TEAM_MEMBER_ROLE_WAS_CHANGED = "team/ROLE_WAS_CHANGED";

/**
 * Leave team
 * @type {string}
 */
export const LEAVE_TEAM = "team/LEAVE";

/**
 * Create invites for team
 * @type {string}
 */
export const CREATE_TEAM_INVITES = "team/CREATE_INVITES";

/**
 * Invites was created by other user in team
 * @type {string}
 */
export const REALTIME_TEAM_INVITES_CREATED_BY_MEMBER = "team/INVITES_CREATED_BY_MEMBER";

/**
 * Invite was deleted/canceled by other user in team
 * @type {string}
 */
export const REALTIME_TEAM_INVITE_WAS_CANCELED_BY_MEMBER = "team/INVITE_WAS_CANCELED_BY_MEMBER";

/**
 * User accepts team invite
 * @type {string}
 */
export const REALTIME_TEAM_INVITE_WAS_ACCEPTED = "team/INVITE_WAS_ACCEPTED";

/**
 * User declined team invite
 * @type {string}
 */
export const REALTIME_TEAM_INVITE_WAS_DECLINED = "team/INVITE_WAS_DECLINED";

/**
 * Member leave team
 * @type {string}
 */
export const REALTIME_TEAM_MEMBER_LEAVE = "team/MEMBER_LEAVED";

/**
 * Member was deleted by someone in team
 * @type {string}
 */
export const REALTIME_TEAM_MEMBER_WAS_DELETED = "team/MEMBER_WAS_DELETED";

/**
 * Member role was changed. Being sent only to affected member
 * @type {string}
 */
export const REALTIME_YOUR_TEAM_ROLE_WAS_CHANGED = "team/YOUR_ROLE_WAS_CHANGED";

/**
 * Member was deleted from team. Being sent only to affected member
 * @type {string}
 */
export const REALTIME_YOU_HAS_BEEN_DELETED_FROM_TEAM = "team/YOU_HAS_BEEN_DELETED";