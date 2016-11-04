import { RealtimeAction, RealtimeErrorResponse, RealtimeResponse, ServerRealtimeAction } from "../realtimeAction";
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
export type DeleteWebsiteResponse = RealtimeResponse<DeleteWebsiteResponsePayload> | RealtimeErrorResponse;
export type DeleteWebsiteServerAction = ServerRealtimeAction<typeof REALTIME_WEBSITE_WAS_DELETED, DeleteWebsiteRealtimePayload>;

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
export type CreateWebsiteResponse = RealtimeResponse<CreateWebsiteResponsePayload> | RealtimeErrorResponse;

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
export type ChangeWebsiteNameResponse = RealtimeResponse<ChangeWebsiteNameResponsePayload> | RealtimeErrorResponse;
export type ChangeWebsiteNameServerAction = ServerRealtimeAction<typeof REALTIME_WEBSITE_NAME_CHANGED, ChangeWebsiteNameRealtimePayload>;



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
export type LeaveWebsiteResponse = RealtimeResponse<LeaveWebsiteResponsePayload> | RealtimeErrorResponse;
export type LeaveWebsiteServerAction = ServerRealtimeAction<typeof REALTIME_WEBSITE_MEMBER_LEAVE, WebsiteMemberLeaveRealtimePayload>;