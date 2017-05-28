import { ActionDescriptor, ServerRealtimeAction } from "../../../common/realtimeAction";
import {
    ACCEPT_INVITE,
    DECLINE_INVITE,
    GET_INVITE_INFO,
    REALTIME_INCOMING_INVITE,
    REALTIME_INVITE_CANCLED
} from "../../constants/invite";
// TODO asvetliakov: Having two invite interfaces is not good
import { TeamMemberInfo, UserTeamInfo } from "../team";
import { BasicUserInformation } from "../user";
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

export type GetInviteInfoAction = ActionDescriptor<typeof GET_INVITE_INFO, GetInviteInfoRequestPayload, GetInviteInfoResponsePayload>;

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

export type AcceptInviteAction = ActionDescriptor<typeof ACCEPT_INVITE, AcceptInviteRequestPayload, AcceptInviteResponsePayload>;

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

export type DeclineInviteAction = ActionDescriptor<typeof DECLINE_INVITE, DeclineInviteRequestPayload, DeclineInviteResponsePayload>;


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
    GetInviteInfoAction |
    AcceptInviteAction |
    DeclineInviteAction;

export type InviteServerActionos =
    IncomingInviteServerAction |
    InviteCanceledServerAction;