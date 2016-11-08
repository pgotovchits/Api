import { RealtimeRequestAction, RealtimeErrorResponseAction, RealtimeSuccessResponseAction, ServerRealtimeAction } from "../realtimeAction";
import { BasicUserInformation } from "../user";
import { WebsiteInviteInfo } from "../invite";
import { WebsiteRole } from "./interfaces";
import {
    CREATE_WEBSITE_INVITES,
    DELETE_WEBSITE_INVITE,
    REALTIME_WEBSITE_INVITE_WAS_ACCEPTED,
    REALTIME_WEBSITE_INVITE_WAS_CANCELED_BY_MEMBER,
    REALTIME_WEBSITE_INVITE_WAS_DECLINED,
    REALTIME_WEBSITE_INVITES_CREATED_BY_MEMBER
} from "./constants";

/**
 * Delete website invite request
 */
export interface DeleteWebsiteInviteRequestPayload {
    /**
     * Invite code
     */
    code: string;
    /**
     * Website id
     */
    websiteId: number;
    /**
     * User id which this invite belongs to, may be omitted
     */
    userId?: number;
}

/**
 * Delete website invite response
 */
export interface DeleteWebsiteInviteResponsePayload {}

/**
 * Invite was canceled/deleted by someone in website
 */
export interface WebsiteInviteWasCancledByMemberRealtimePayload {
    /**
     * Invite code
     */
    code: string;
    /**
     * Website id
     */
    websiteId: number;
    /**
     * User id which deleted the invite
     */
    deletedByUserId: number;
}

export type DeleteWebsiteInviteRequestAction = RealtimeRequestAction<typeof DELETE_WEBSITE_INVITE, DeleteWebsiteInviteRequestPayload>;
export type DeleteWebsiteInviteSuccessAction = RealtimeSuccessResponseAction<typeof DELETE_WEBSITE_INVITE, DeleteWebsiteInviteResponsePayload, DeleteWebsiteInviteRequestPayload>;
export type DeleteWebsiteInviteFailedAction = RealtimeErrorResponseAction<typeof DELETE_WEBSITE_INVITE, DeleteWebsiteInviteRequestPayload>;
export type DeleteWebsiteInviteServerAction = ServerRealtimeAction<typeof REALTIME_WEBSITE_INVITE_WAS_CANCELED_BY_MEMBER, WebsiteInviteWasCancledByMemberRealtimePayload>;

/**
 * Create website invites request
 */
export interface CreateWebsiteInvitesRequestPayload {
    /**
     * Website id
     */
    id: number;
    /**
     * Invites array
     */
    invites: string[];
}

/**
 * Create website invites response
 */
export interface CreateWebsiteInvitesResponsePayload {
    /**
     * Website id
     */
    id: number;
    /**
     * Array of created invites
     */
    invites: WebsiteInviteInfo[];
    /**
     * New members linked to invites
     */
    members: BasicUserInformation[];
}

/**
 * one or more invites was created by someone in website
 */
export interface WebsiteInvitesCreatedByMemberRealtimePayload extends CreateWebsiteInvitesResponsePayload {
    /**
     * User id which was created invites
     */
    createdByUserId: number;
}

export type CreateWebsiteInvitesRequestAction = RealtimeRequestAction<typeof CREATE_WEBSITE_INVITES, CreateWebsiteInvitesRequestPayload>;
export type CreateWebsiteInvitesSuccessAction = RealtimeSuccessResponseAction<typeof CREATE_WEBSITE_INVITES, CreateWebsiteInvitesResponsePayload, CreateWebsiteInvitesRequestPayload>;
export type CreateWebsiteInvitesFailedAction = RealtimeErrorResponseAction<typeof CREATE_WEBSITE_INVITES, CreateWebsiteInvitesRequestPayload>;
export type CreateWebsiteInvitesServerAction = ServerRealtimeAction<typeof REALTIME_WEBSITE_INVITES_CREATED_BY_MEMBER, WebsiteInvitesCreatedByMemberRealtimePayload>;


/**
 * Invite was accepted by user
 */
export interface WebsiteInviteWasAcceptedRealtimePayload {
    /**
     * Website id
     */
    websiteId: number;
    /**
     * Invite code
     */
    code: string;
    /**
     * User information
     */
    userInfo: BasicUserInformation;
    /**
     * Website role
     */
    role: WebsiteRole;
}

export type WebsiteInviteAcceptedServerAction = ServerRealtimeAction<typeof REALTIME_WEBSITE_INVITE_WAS_ACCEPTED, WebsiteInviteWasAcceptedRealtimePayload>;

/**
 * Invite was declined by user
 */
export interface WebsiteInviteWasDeclinedRealtimePayload {
    /**
     * Website id
     */
    websiteId: number;
    /**
     * Invite code
     */
    code: string;
    /**
     * User id assigned to invite
     */
    userId: number;
}

export type WebsiteInviteDeclinedServerAction = ServerRealtimeAction<typeof REALTIME_WEBSITE_INVITE_WAS_DECLINED, WebsiteInviteWasDeclinedRealtimePayload>;