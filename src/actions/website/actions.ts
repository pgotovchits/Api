import { RealtimeAction, RealtimeErrorResponseAction, RealtimeSuccessResponseAction, ServerRealtimeAction } from "../realtimeAction";
import { WebsiteInviteInfo } from "../invite";
import { BasicUserInformation } from "../user";
import { UserWebsiteInfo } from "./interfaces";
import {
    CHANGE_WEBSITE_NAME,
    CREATE_WEBSITE,
    DELETE_WEBSITE,
    LEAVE_WEBSITE,
    REALTIME_WEBSITE_MEMBER_LEAVE,
    REALTIME_WEBSITE_NAME_CHANGED,
    REALTIME_WEBSITE_WAS_DELETED
} from "./constants";


export interface DeleteWebsiteRequestPayload {
    /**
     * Website id
     */
    id: number;
}

export interface DeleteWebsiteResponsePayload {
    // TODO: complete
}

export interface DeleteWebsiteRealtimePayload {
    /**
     * Website id
     */
    id: number;
    /**
     * User which deleted website
     */
    deletedByUserId: number;
}

export type DeleteWebsiteAction = RealtimeAction<typeof DELETE_WEBSITE, DeleteWebsiteRequestPayload>;
export type DeleteWebsiteServerAction = ServerRealtimeAction<typeof REALTIME_WEBSITE_WAS_DELETED, DeleteWebsiteRealtimePayload>;
export type DeleteWebsitePending<T> = RealtimeAction<T, DeleteWebsiteRequestPayload>;
export type DeleteWebsiteSuccess<T> = RealtimeSuccessResponseAction<T, DeleteWebsiteResponsePayload>;
export type DeleteWebsiteFailed<T> = RealtimeErrorResponseAction<T>

/**
 * Create website request
 */
export interface CreateWebsiteRequestPayload {
    /**
     * Website name
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
export interface CreateWebsiteResponsePayload {
    /**
     * Created website info
     */
    website: UserWebsiteInfo;
    /**
     * Array of created invites
     */
    invites: WebsiteInviteInfo[];
    /**
     * New members linked to invites
     */
    members: BasicUserInformation[];
}

export type CreateWebsiteAction = RealtimeAction<typeof CREATE_WEBSITE, CreateWebsiteRequestPayload>;
export type CreateWebsitePending<T> = RealtimeSuccessResponseAction<T, CreateWebsiteRequestPayload>;
export type CreateWebsiteSuccess<T> = RealtimeSuccessResponseAction<T, CreateWebsiteResponsePayload>;
export type CreateWebsiteFailed<T> = RealtimeErrorResponseAction<T>;

/**
 * Change website name request
 */
export interface ChangeWebsiteNameRequestPayload {
    /**
     * Website id
     */
    id: number;
    /**
     * Website new name
     */
    name: string;
}

/**
 * Change website name response
 */
export interface ChangeWebsiteNameResponsePayload {}

/**
 * Website name was changed by someone in website group
 */
export interface ChangeWebsiteNameRealtimePayload {
    /**
     * Website id
     */
    id: number;
    /**
     * New website name
     */
    name: string;
    /**
     * User id which changed website name
     */
    userId: number;
}

export type ChangeWebsiteNameAction = RealtimeAction<typeof CHANGE_WEBSITE_NAME, ChangeWebsiteNameRequestPayload>;
export type ChangeWebsiteNameServerAction = ServerRealtimeAction<typeof REALTIME_WEBSITE_NAME_CHANGED, ChangeWebsiteNameRealtimePayload>;
export type ChangeWebsiteNamePending<T> = RealtimeAction<T, ChangeWebsiteNameRequestPayload>;
export type ChangeWebsiteNameSuccess<T> = RealtimeSuccessResponseAction<T, ChangeWebsiteNameResponsePayload>;
export type ChangeWebsiteNameFailed<T> = RealtimeErrorResponseAction<T>;



/**
 * Leave website request
 */
export interface LeaveWebsiteRequestPayload {
    id: number;
}

/**
 * Leave website response
 */
export interface LeaveWebsiteResponsePayload {
    
}

/**
 * Member leave website
 */
export interface WebsiteMemberLeaveRealtimePayload {
    /**
     * Website id
     */
    websiteId: number;
    /**
     * User id
     */
    userId: number;
}

export type LeaveWebsiteAction = RealtimeAction<typeof LEAVE_WEBSITE, LeaveWebsiteRequestPayload>;
export type LeaveWebsiteServerAction = ServerRealtimeAction<typeof REALTIME_WEBSITE_MEMBER_LEAVE, WebsiteMemberLeaveRealtimePayload>;
export type LeaveWebsitePending<T> = RealtimeAction<T, LeaveWebsiteRequestPayload>;
export type LeaveWebsiteSuccess<T> = RealtimeSuccessResponseAction<T, LeaveWebsiteResponsePayload>;
export type LeaveWebsiteFailed<T> = RealtimeErrorResponseAction<T>;