import { ActionDescriptor, ServerRealtimeAction } from "../../../common/realtimeAction";
import {
    CREATE_TEAM_INVITES,
    DELETE_TEAM_INVITE,
    REALTIME_TEAM_INVITE_WAS_ACCEPTED,
    REALTIME_TEAM_INVITE_WAS_CANCELED_BY_MEMBER,
    REALTIME_TEAM_INVITE_WAS_DECLINED,
    REALTIME_TEAM_INVITES_CREATED_BY_MEMBER
} from "../../constants/team";
import { TeamInviteInfo } from "../invite";
import { BasicUserInformation } from "../user";
import { TeamRole } from "./interfaces";

/**
 * Delete team invite request
 */
export interface DeleteTeamInviteRequestPayload {
    /**
     * Invite code
     */
    code: string;
    /**
     * Team id
     */
    teamId: number;
    /**
     * User id which this invite belongs to, may be omitted
     */
    userId?: number;
}

/**
 * Delete team invite response
 */
export interface DeleteTeamInviteResponsePayload {}

/**
 * Invite was canceled/deleted by someone in team
 */
export interface TeamInviteWasCancledByMemberRealtimePayload {
    /**
     * Invite code
     */
    code: string;
    /**
     * Team id
     */
    teamId: number;
    /**
     * User id which deleted the invite
     */
    deletedByUserId: number;
}

export type DeleteTeamInviteAction = ActionDescriptor<typeof DELETE_TEAM_INVITE, DeleteTeamInviteRequestPayload, DeleteTeamInviteResponsePayload>;
export type DeleteTeamInviteServerAction = ServerRealtimeAction<typeof REALTIME_TEAM_INVITE_WAS_CANCELED_BY_MEMBER, TeamInviteWasCancledByMemberRealtimePayload>;

/**
 * Create team invites request
 */
export interface CreateTeamInvitesRequestPayload {
    /**
     * Team id
     */
    id: number;
    /**
     * Invites array
     */
    invites: string[];
}

/**
 * Create team invites response
 */
export interface CreateTeamInvitesResponsePayload {
    /**
     * Team id
     */
    id: number;
    /**
     * Array of created invites
     */
    invites: TeamInviteInfo[];
    /**
     * New members linked to invites
     */
    members: BasicUserInformation[];
}

/**
 * one or more invites was created by someone in team
 */
export interface TeamInvitesCreatedByMemberRealtimePayload extends CreateTeamInvitesResponsePayload {
    /**
     * User id which was created invites
     */
    createdByUserId: number;
}

export type CreateTeamInvitesAction = ActionDescriptor<typeof CREATE_TEAM_INVITES, CreateTeamInvitesRequestPayload, CreateTeamInvitesResponsePayload>;
export type CreateTeamInvitesServerAction = ServerRealtimeAction<typeof REALTIME_TEAM_INVITES_CREATED_BY_MEMBER, TeamInvitesCreatedByMemberRealtimePayload>;

/**
 * Invite was accepted by user
 */
export interface TeamInviteWasAcceptedRealtimePayload {
    /**
     * Team id
     */
    teamId: number;
    /**
     * Invite code
     */
    code: string;
    /**
     * User information
     */
    userInfo: BasicUserInformation;
    /**
     * Team role
     */
    role: TeamRole;
}

export type TeamInviteAcceptedServerAction = ServerRealtimeAction<typeof REALTIME_TEAM_INVITE_WAS_ACCEPTED, TeamInviteWasAcceptedRealtimePayload>;

/**
 * Invite was declined by user
 */
export interface TeamInviteWasDeclinedRealtimePayload {
    /**
     * Team id
     */
    teamId: number;
    /**
     * Invite code
     */
    code: string;
    /**
     * User id assigned to invite
     */
    userId: number;
}

export type TeamInviteDeclinedServerAction = ServerRealtimeAction<typeof REALTIME_TEAM_INVITE_WAS_DECLINED, TeamInviteWasDeclinedRealtimePayload>;

export type TeamInviteActions =
    DeleteTeamInviteAction |
    CreateTeamInvitesAction;

export type TeamInviteServerActions = 
    DeleteTeamInviteServerAction |
    CreateTeamInvitesServerAction |
    TeamInviteAcceptedServerAction |
    TeamInviteDeclinedServerAction;