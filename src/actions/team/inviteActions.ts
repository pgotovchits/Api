import { TeamInviteInfo } from "../invite";
import { RealtimeErrorResponseAction, RealtimeRequestAction, RealtimeSuccessResponseAction, ServerRealtimeAction } from "../realtimeAction";
import { BasicUserInformation } from "../user";
import {
    CREATE_TEAM_INVITES,
    DELETE_TEAM_INVITE,
    REALTIME_TEAM_INVITE_WAS_ACCEPTED,
    REALTIME_TEAM_INVITE_WAS_CANCELED_BY_MEMBER,
    REALTIME_TEAM_INVITE_WAS_DECLINED,
    REALTIME_TEAM_INVITES_CREATED_BY_MEMBER
} from "./constants";
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

export type DeleteTeamInviteRequestAction = RealtimeRequestAction<typeof DELETE_TEAM_INVITE, DeleteTeamInviteRequestPayload>;
export type DeleteTeamInviteSuccessAction = RealtimeSuccessResponseAction<typeof DELETE_TEAM_INVITE, DeleteTeamInviteResponsePayload, DeleteTeamInviteRequestPayload>;
export type DeleteTeamInviteFailedAction = RealtimeErrorResponseAction<typeof DELETE_TEAM_INVITE, DeleteTeamInviteRequestPayload>;
export type DeleteTeamInviteServerAction = ServerRealtimeAction<typeof REALTIME_TEAM_INVITE_WAS_CANCELED_BY_MEMBER, TeamInviteWasCancledByMemberRealtimePayload>;
export type DeleteTeamInviteActions =
    DeleteTeamInviteRequestAction |
    DeleteTeamInviteSuccessAction |
    DeleteTeamInviteFailedAction;

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

export type CreateTeamInvitesRequestAction = RealtimeRequestAction<typeof CREATE_TEAM_INVITES, CreateTeamInvitesRequestPayload>;
export type CreateTeamInvitesSuccessAction = RealtimeSuccessResponseAction<typeof CREATE_TEAM_INVITES, CreateTeamInvitesResponsePayload, CreateTeamInvitesRequestPayload>;
export type CreateTeamInvitesFailedAction = RealtimeErrorResponseAction<typeof CREATE_TEAM_INVITES, CreateTeamInvitesRequestPayload>;
export type CreateTeamInvitesServerAction = ServerRealtimeAction<typeof REALTIME_TEAM_INVITES_CREATED_BY_MEMBER, TeamInvitesCreatedByMemberRealtimePayload>;
export type CreateTeamInvitesActions =
    CreateTeamInvitesRequestAction |
    CreateTeamInvitesSuccessAction |
    CreateTeamInvitesFailedAction;


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
    DeleteTeamInviteActions |
    DeleteTeamInviteServerAction |
    CreateTeamInvitesActions |
    CreateTeamInvitesServerAction |
    TeamInviteAcceptedServerAction |
    TeamInviteDeclinedServerAction;