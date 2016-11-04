import { RealtimeAction, RealtimeErrorResponse, RealtimeResponse, ServerRealtimeAction } from "../realtimeAction";
// TODO asvetliakov: Having two invite interfaces is not good
import { UserWebsiteInfo, WebsiteMemberInfo } from "../website";
import { BasicUserInformation } from "../user";
import { UserInviteInfo, WebsiteInviteInfo } from "./interfaces";
import {
    ACCEPT_INVITE,
    DECLINE_INVITE,
    GET_INVITE_INFO,
    REALTIME_INCOMING_INVITE,
    REALTIME_INVITE_CANCLED
} from "./constants";

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
     * Website name which invite belongs to
     */
    name: string;
}

export type GetInviteInfoAction = RealtimeAction<typeof GET_INVITE_INFO, GetInviteInfoRequestPayload>;
export type GetInviteInfoResponse = RealtimeResponse<GetInviteInfoResponsePayload> | RealtimeErrorResponse;

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
     * New website information
     */
    website: UserWebsiteInfo;
    /**
     * Website member -> role mapping for new website
     */
    websiteMembers: WebsiteMemberInfo[];
    /**
     * Website invites
     */
    websiteInvites: WebsiteInviteInfo[];
    /**
     * Other users (website members, invite members, etc...)
     */
    members: BasicUserInformation[];
}

export type AcceptInviteAction = RealtimeAction<typeof ACCEPT_INVITE, AcceptInviteRequestPayload>;
export type AcceptInviteResponse = RealtimeResponse<AcceptInviteResponsePayload> | RealtimeErrorResponse;

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

export type DeclineInviteAction = RealtimeAction<typeof DECLINE_INVITE, DeclineInviteRequestPayload>;
export type DeclineInviteResponse = RealtimeResponse<DeclineInviteResponsePayload> | RealtimeErrorResponse;


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
     * Website id
     */
    websiteId: number;
}

export type InviteCanceledServerAction = ServerRealtimeAction<typeof REALTIME_INVITE_CANCLED, InviteWasCancledRealtimePayload>;