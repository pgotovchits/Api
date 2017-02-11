import { RealtimeErrorResponseAction, RealtimeRequestAction, RealtimeSuccessResponseAction, ServerRealtimeAction } from "../realtimeAction";
// TODO asvetliakov: Having two invite interfaces is not good
import { TeamMemberInfo, UserTeamInfo } from "../team";
import { BasicUserInformation } from "../user";
import {
    ACCEPT_INVITE,
    DECLINE_INVITE,
    GET_INVITE_INFO,
    REALTIME_INCOMING_INVITE,
    REALTIME_INVITE_CANCLED
} from "./constants";
import { TeamInviteInfo, UserInviteInfo } from "./interfaces";

/**
 * Get invite information request
 */
export interface GetInviteInfoRequestPayload {
    /**
     * Invite code
     */
    code: string;
}

/**
 * Get invite information response
 */
export interface GetInviteInfoResponsePayload {
    /**
     * Team name which invite belongs to
     */
    name: string;
}

export type GetInviteInfoRequestAction = RealtimeRequestAction<typeof GET_INVITE_INFO, GetInviteInfoRequestPayload>;
export type GetInviteInfoSuccessAction = RealtimeSuccessResponseAction<typeof GET_INVITE_INFO, GetInviteInfoResponsePayload, GetInviteInfoRequestPayload>;
export type GetInviteInfoFailedAction = RealtimeErrorResponseAction<typeof GET_INVITE_INFO, GetInviteInfoRequestPayload>;
export type GetInviteInfoActions =
    GetInviteInfoRequestAction |
    GetInviteInfoSuccessAction |
    GetInviteInfoFailedAction;

/**
 * Accept invite request
 */
export interface AcceptInviteRequestPayload {
    /**
     * Invite code
     */
    code: string;
}

/**
 * Accept invite response
 */
export interface AcceptInviteResponsePayload {
    /**
     * Original invite code
     */
    code: string;
    /**
     * New Team information
     */
    team: UserTeamInfo;
    /**
     * Team member -> role mapping for new team
     */
    teamMembers: TeamMemberInfo[];
    /**
     * Team invites
     */
    teamInvites: TeamInviteInfo[];
    /**
     * Other users (team members, invite members, etc...)
     */
    members: BasicUserInformation[];
}

export type AcceptInviteRequestAction = RealtimeRequestAction<typeof ACCEPT_INVITE, AcceptInviteRequestPayload>;
export type AcceptInviteSuccessAction = RealtimeSuccessResponseAction<typeof ACCEPT_INVITE, AcceptInviteResponsePayload, AcceptInviteRequestPayload>;
export type AcceptInviteFailedAction = RealtimeErrorResponseAction<typeof ACCEPT_INVITE, AcceptInviteRequestPayload>;
export type AcceptInviteActions =
    AcceptInviteRequestAction |
    AcceptInviteSuccessAction |
    AcceptInviteFailedAction;

/**
 * Decline invite request
 */
export interface DeclineInviteRequestPayload {
    /**
     * Invite code
     */
    code: string;
}

/**
 * Decline invite response
 */
export interface DeclineInviteResponsePayload {
    
}

export type DeclineInviteRequestAction = RealtimeRequestAction<typeof DECLINE_INVITE, DeclineInviteRequestPayload>;
export type DeclineInviteSuccessAction = RealtimeSuccessResponseAction<typeof DECLINE_INVITE, DeclineInviteResponsePayload, DeclineInviteRequestPayload>;
export type DeclineInviteFailedAction = RealtimeErrorResponseAction<typeof DECLINE_INVITE, DeclineInviteRequestPayload>;
export type DeclineInviteActions =
    DeclineInviteRequestAction |
    DeclineInviteSuccessAction |
    DeclineInviteFailedAction;


/**
 * New realtime invite
 */
export interface IncomingInviteRealtimePayload extends UserInviteInfo { }

export type IncomingInviteServerAction = ServerRealtimeAction<typeof REALTIME_INCOMING_INVITE, IncomingInviteRealtimePayload>;

/**
 * User invite was canceled
 */
export interface InviteWasCancledRealtimePayload {
    /**
     * Invite code
     */
    code: string;
    /**
     * Team id
     */
    teamId: number;
}

export type InviteCanceledServerAction = ServerRealtimeAction<typeof REALTIME_INVITE_CANCLED, InviteWasCancledRealtimePayload>;

/**
 * All invite actions
 */
export type InviteActions =
    GetInviteInfoActions |
    AcceptInviteActions |
    DeclineInviteActions |
    IncomingInviteServerAction |
    InviteCanceledServerAction;