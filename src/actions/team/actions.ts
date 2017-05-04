import { TeamInviteInfo } from "../invite";
import { RealtimeErrorResponseAction, RealtimeRequestAction, RealtimeSuccessResponseAction, ServerRealtimeAction } from "../realtimeAction";
import { BasicUserInformation } from "../user";
import {
    CHANGE_TEAM_NAME,
    CREATE_TEAM,
    DELETE_TEAM,
    LEAVE_TEAM,
    REALTIME_TEAM_MEMBER_LEAVE,
    REALTIME_TEAM_NAME_CHANGED,
    REALTIME_TEAM_WAS_DELETED
} from "./constants";
import { ADD_TEAM_CODE, REALTIME_CODE_ADDED } from "./constants";
import { UserTeamInfo } from "./interfaces";


export interface DeleteTeamRequestPayload {
    /**
     * Team id
     */
    id: number;
}

export interface DeleteTeamResponsePayload {
    // TODO: complete
}

export interface DeleteTeamRealtimePayload {
    /**
     * Team id
     */
    id: number;
    /**
     * User which deleted team
     */
    deletedByUserId: number;
}

export type DeleteTeamRequestAction = RealtimeRequestAction<typeof DELETE_TEAM, DeleteTeamRequestPayload>;
export type DeleteTeamSuccessAction = RealtimeSuccessResponseAction<typeof DELETE_TEAM, DeleteTeamResponsePayload, DeleteTeamRequestPayload>;
export type DeleteTeamFailedAction = RealtimeErrorResponseAction<typeof DELETE_TEAM, DeleteTeamRequestPayload>;
export type DeleteTeamServerAction = ServerRealtimeAction<typeof REALTIME_TEAM_WAS_DELETED, DeleteTeamRealtimePayload>;
export type DeleteTeamActions =
    DeleteTeamRequestAction |
    DeleteTeamSuccessAction |
    DeleteTeamFailedAction;

/**
 * Create team request
 */
export interface CreateTeamRequestPayload {
    /**
     * Team name
     */
    name: string;
    /**
     * Array of invite emails
     */
    invites?: string[];
}

/**
 * Response
 */
export interface CreateTeamResponsePayload {
    /**
     * Created Team info
     */
    team: UserTeamInfo;
    /**
     * Array of created invites
     */
    invites: TeamInviteInfo[];
    /**
     * New members linked to invites
     */
    members: BasicUserInformation[];
}

export type CreateTeamRequestAction = RealtimeRequestAction<typeof CREATE_TEAM, CreateTeamRequestPayload>;
export type CreateTeamSuccessAction = RealtimeSuccessResponseAction<typeof CREATE_TEAM, CreateTeamResponsePayload, CreateTeamRequestPayload>;
export type CreateTeamFailedAction = RealtimeErrorResponseAction<typeof CREATE_TEAM, CreateTeamRequestPayload>;
export type CreateTeamActions =
    CreateTeamRequestAction |
    CreateTeamSuccessAction |
    CreateTeamFailedAction;

/**
 * Change team name request
 */
export interface ChangeTeamNameRequestPayload {
    /**
     * Team id
     */
    id: number;
    /**
     * Team new name
     */
    name: string;
}

/**
 * Change Team name response
 */
export interface ChangeTeamNameResponsePayload {}

/**
 * Team name was changed by someone in team group
 */
export interface ChangeTeamNameRealtimePayload {
    /**
     * team id
     */
    id: number;
    /**
     * New team name
     */
    name: string;
    /**
     * User id which changed team name
     */
    userId: number;
}

export type ChangeTeamNameRequestAction = RealtimeRequestAction<typeof CHANGE_TEAM_NAME, ChangeTeamNameRequestPayload>;
export type ChangeTeamNameSuccessAction = RealtimeSuccessResponseAction<typeof CHANGE_TEAM_NAME, ChangeTeamNameResponsePayload, ChangeTeamNameRequestPayload>;
export type ChangeTeamNameFailedAction = RealtimeErrorResponseAction<typeof CHANGE_TEAM_NAME, ChangeTeamNameRequestPayload>;
export type ChangeTeamNameServerAction = ServerRealtimeAction<typeof REALTIME_TEAM_NAME_CHANGED, ChangeTeamNameRealtimePayload>;
export type ChangeTeamNameActions =
    ChangeTeamNameRequestAction |
    ChangeTeamNameSuccessAction |
    ChangeTeamNameFailedAction;

/**
 * Leave team request
 */
export interface LeaveTeamRequestPayload {
    id: number;
}

/**
 * Leave team response
 */
export interface LeaveTeamResponsePayload {
    
}

/**
 * Member leave team
 */
export interface TeamMemberLeaveRealtimePayload {
    /**
     * Team id
     */
    teamId: number;
    /**
     * User id
     */
    userId: number;
}

export type LeaveTeamRequestAction = RealtimeRequestAction<typeof LEAVE_TEAM, LeaveTeamRequestPayload>;
export type LeaveTeamSuccessAction = RealtimeSuccessResponseAction<typeof LEAVE_TEAM, LeaveTeamResponsePayload, LeaveTeamRequestPayload>;
export type LeaveTeamFailedAction = RealtimeErrorResponseAction<typeof LEAVE_TEAM, LeaveTeamRequestPayload>;
export type LeaveTeamServerAction = ServerRealtimeAction<typeof REALTIME_TEAM_MEMBER_LEAVE, TeamMemberLeaveRealtimePayload>;
export type LeaveTeamActions =
    LeaveTeamRequestAction |
    LeaveTeamSuccessAction |
    LeaveTeamFailedAction;
    
export interface AddTeamCodeRequestPayload {
    /**
     * Team code
     */
    code: string;
    /**
     * Team id
     */
    teamId: number;
}

export interface AddTeamCodeResponsePayload { }

export interface AddTeamCodeRealtimePayload extends AddTeamCodeRequestPayload {
    /**
     * User id which added the new code
     */
    userId: number;
}

export type AddTeamCodeRequestAction = RealtimeRequestAction<typeof ADD_TEAM_CODE, AddTeamCodeRequestPayload>;
export type AddTeamCodeSuccessAction = RealtimeSuccessResponseAction<typeof ADD_TEAM_CODE, AddTeamCodeResponsePayload, AddTeamCodeRequestPayload>;
export type AddTeamCodeFailedAction = RealtimeErrorResponseAction<typeof ADD_TEAM_CODE, AddTeamCodeRequestAction>;
export type AddTeamCodeServerAction = ServerRealtimeAction<typeof REALTIME_CODE_ADDED, AddTeamCodeRealtimePayload>;

export type AddTeamCodeActions =
    AddTeamCodeRequestAction |
    AddTeamCodeSuccessAction |
    AddTeamCodeFailedAction;

export type TeamActions =
    DeleteTeamActions |
    DeleteTeamServerAction |
    CreateTeamActions |
    ChangeTeamNameActions |
    ChangeTeamNameServerAction |
    LeaveTeamActions |
    LeaveTeamServerAction |
    AddTeamCodeActions |
    AddTeamCodeServerAction;