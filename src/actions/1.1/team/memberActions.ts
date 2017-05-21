import { ActionDescriptor, ServerRealtimeAction } from "../../../common/realtimeAction";
import {
    CHANGE_TEAM_MEMBER_ROLE,
    DELETE_TEAM_MEMBER,
    REALTIME_TEAM_MEMBER_ROLE_WAS_CHANGED,
    REALTIME_TEAM_MEMBER_WAS_DELETED,
    REALTIME_YOU_HAS_BEEN_DELETED_FROM_TEAM,
    REALTIME_YOUR_TEAM_ROLE_WAS_CHANGED
} from "./constants";
import { TeamRole } from "./interfaces";

/**
 * Delete team member request
 */
export interface DeleteTeamMemberRequestPayload {
    /**
     * Team id
     */
    teamId: number;
    /**
     * User id
     */
    userId: number;
}

/**
 * Delete team member response
 */
export interface DeleteTeamMemberResponsePayload {
    
}

export interface DeleteTeamMemberRealtimePayload {
    /**
     * Team id
     */
    teamId: number;
    /**
     * User id which has been deleted
     */
    userId: number;
    /**
     * User id which deleted member
     */
    deletedByUserId: number;
}

export type DeleteTeamMemberAction = ActionDescriptor<typeof DELETE_TEAM_MEMBER, DeleteTeamMemberRequestPayload, DeleteTeamMemberResponsePayload>;
export type DeleteTeamMemberServerAction = ServerRealtimeAction<typeof REALTIME_TEAM_MEMBER_WAS_DELETED, DeleteTeamMemberRealtimePayload>;
export type YouHasBeenDeletedFromTeamServerAction = ServerRealtimeAction<typeof REALTIME_YOU_HAS_BEEN_DELETED_FROM_TEAM, DeleteTeamMemberRealtimePayload>;

/**
 * Change member role request
 */
export interface ChangeTeamMemberRoleRequestPayload {
    /**
     * Team id
     */
    teamId: number;
    /**
     * User id
     */
    userId: number;
    /**
     * New user role
     */
    role: TeamRole;
}

/**
 * Change member role response
 */
export interface ChangeTeamMemberRoleResponsePayload {
    
}

/**
 * Member role was changed
 */
export interface ChangeTeamMemberRoleRealtimePayload {
    /**
     * team id
     */
    teamId: number;
    /**
     * User id
     */
    userId: number;
    /**
     * New user role
     */
    role: TeamRole;
    /**
     * User id which changed role
     */
    changedByUserId: number;
}

export type ChangeTeamMemberRoleAction = ActionDescriptor<typeof CHANGE_TEAM_MEMBER_ROLE, ChangeTeamMemberRoleRequestPayload, ChangeTeamMemberRoleResponsePayload>;
export type ChangeTeamMemberRoleServerAction = ServerRealtimeAction<typeof REALTIME_TEAM_MEMBER_ROLE_WAS_CHANGED, ChangeTeamMemberRoleRealtimePayload>;
export type YourTeamRoleChangedServerAction = ServerRealtimeAction<typeof REALTIME_YOUR_TEAM_ROLE_WAS_CHANGED, ChangeTeamMemberRoleRealtimePayload>;
    
export type TeamMemberActions =
    DeleteTeamMemberAction |
    ChangeTeamMemberRoleAction;

export type TeamMembersServerActions =
    DeleteTeamMemberServerAction |
    YouHasBeenDeletedFromTeamServerAction |
    ChangeTeamMemberRoleServerAction |
    YourTeamRoleChangedServerAction;