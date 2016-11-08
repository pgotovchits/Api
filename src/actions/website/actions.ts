import { RealtimeRequestAction, RealtimeErrorResponseAction, RealtimeSuccessResponseAction, ServerRealtimeAction } from "../realtimeAction";
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

export type DeleteWebsiteRequestAction = RealtimeRequestAction<typeof DELETE_WEBSITE, DeleteWebsiteRequestPayload>;
export type DeleteWebsiteSuccessAction = RealtimeSuccessResponseAction<typeof DELETE_WEBSITE, DeleteWebsiteResponsePayload, DeleteWebsiteRequestPayload>;
export type DeleteWebsiteFailedAction = RealtimeErrorResponseAction<typeof DELETE_WEBSITE, DeleteWebsiteRequestPayload>
export type DeleteWebsiteServerAction = ServerRealtimeAction<typeof REALTIME_WEBSITE_WAS_DELETED, DeleteWebsiteRealtimePayload>;
export type DeleteWebsiteActions =
    DeleteWebsiteRequestAction |
    DeleteWebsiteSuccessAction |
    DeleteWebsiteFailedAction;

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

export type CreateWebsiteRequestAction = RealtimeRequestAction<typeof CREATE_WEBSITE, CreateWebsiteRequestPayload>;
export type CreateWebsiteSuccessAction = RealtimeSuccessResponseAction<typeof CREATE_WEBSITE, CreateWebsiteResponsePayload, CreateWebsiteRequestPayload>;
export type CreateWebsiteFailedAction = RealtimeErrorResponseAction<typeof CREATE_WEBSITE, CreateWebsiteRequestPayload>;
export type CreateWebsiteActions =
    CreateWebsiteRequestAction |
    CreateWebsiteSuccessAction |
    CreateWebsiteFailedAction;

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

export type ChangeWebsiteNameRequestAction = RealtimeRequestAction<typeof CHANGE_WEBSITE_NAME, ChangeWebsiteNameRequestPayload>;
export type ChangeWebsiteNameSuccessAction = RealtimeSuccessResponseAction<typeof CHANGE_WEBSITE_NAME, ChangeWebsiteNameResponsePayload, ChangeWebsiteNameRequestPayload>;
export type ChangeWebsiteNameFailedAction = RealtimeErrorResponseAction<typeof CHANGE_WEBSITE_NAME, ChangeWebsiteNameRequestPayload>;
export type ChangeWebsiteNameServerAction = ServerRealtimeAction<typeof REALTIME_WEBSITE_NAME_CHANGED, ChangeWebsiteNameRealtimePayload>;
export type ChangeWebsiteNameActions =
    ChangeWebsiteNameRequestAction |
    ChangeWebsiteNameSuccessAction |
    ChangeWebsiteNameFailedAction;

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

export type LeaveWebsiteRequestAction = RealtimeRequestAction<typeof LEAVE_WEBSITE, LeaveWebsiteRequestPayload>;
export type LeaveWebsiteSuccessAction = RealtimeSuccessResponseAction<typeof LEAVE_WEBSITE, LeaveWebsiteResponsePayload, LeaveWebsiteRequestPayload>;
export type LeaveWebsiteFailedAction = RealtimeErrorResponseAction<typeof LEAVE_WEBSITE, LeaveWebsiteRequestPayload>;
export type LeaveWebsiteServerAction = ServerRealtimeAction<typeof REALTIME_WEBSITE_MEMBER_LEAVE, WebsiteMemberLeaveRealtimePayload>;
export type LeaveWebsiteActions =
    LeaveWebsiteRequestAction |
    LeaveWebsiteSuccessAction |
    LeaveWebsiteFailedAction;