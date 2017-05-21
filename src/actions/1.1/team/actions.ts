import { ActionDescriptor, ServerRealtimeAction } from "../../../common/realtimeAction";
import { TeamInviteInfo } from "../invite";
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
import { ADD_TEAM_CODE, CHECK_TEAM_CODE, REALTIME_CODE_ADDED } from "./constants";
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

export type DeleteTeamAction = ActionDescriptor<typeof DELETE_TEAM, DeleteTeamRequestPayload, DeleteTeamResponsePayload>;
export type DeleteTeamServerAction = ServerRealtimeAction<typeof REALTIME_TEAM_WAS_DELETED, DeleteTeamRealtimePayload>;

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

export type CreateTeamAction = ActionDescriptor<typeof CREATE_TEAM, CreateTeamRequestPayload, CreateTeamResponsePayload>;

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

export type ChangeTeamNameAction = ActionDescriptor<typeof CHANGE_TEAM_NAME, ChangeTeamNameRequestPayload, ChangeTeamNameResponsePayload>;
export type ChangeTeamNameServerAction = ServerRealtimeAction<typeof REALTIME_TEAM_NAME_CHANGED, ChangeTeamNameRealtimePayload>;

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

export type LeaveTeamAction = ActionDescriptor<typeof LEAVE_TEAM, LeaveTeamRequestPayload, LeaveTeamResponsePayload>;
export type LeaveTeamServerAction = ServerRealtimeAction<typeof REALTIME_TEAM_MEMBER_LEAVE, TeamMemberLeaveRealtimePayload>;
    
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

export type AddTeamCodeAction = ActionDescriptor<typeof ADD_TEAM_CODE, AddTeamCodeRequestPayload, AddTeamCodeResponsePayload>;
export type AddTeamCodeServerAction = ServerRealtimeAction<typeof REALTIME_CODE_ADDED, AddTeamCodeRealtimePayload>;


export interface CheckTeamCodeRequestPayload {
    /**
     * Team code
     */
    code: string;
}

export interface CheckTeamCodeResponsePayload { }

export type CheckTeamCodeAction = ActionDescriptor<typeof CHECK_TEAM_CODE, CheckTeamCodeRequestPayload, CheckTeamCodeResponsePayload>;

export type TeamActions =
    DeleteTeamAction |
    CreateTeamAction |
    ChangeTeamNameAction |
    LeaveTeamAction |
    AddTeamCodeAction |
    CheckTeamCodeAction;

export type TeamServerActions =
    DeleteTeamServerAction |
    ChangeTeamNameServerAction |
    LeaveTeamServerAction |
    AddTeamCodeServerAction;