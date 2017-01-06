import { RealtimeErrorResponseAction, RealtimeRequestAction, RealtimeSuccessResponseAction, ServerRealtimeAction } from "../realtimeAction";
import {
    CHANGE_WEBSITE_MEMBER_ROLE,
    DELETE_WEBSITE_MEMBER,
    REALTIME_WEBSITE_MEMBER_ROLE_WAS_CHANGED,
    REALTIME_WEBSITE_MEMBER_WAS_DELETED,
    REALTIME_YOU_HAS_BEEN_DELETED_FROM_WEBSITE,
    REALTIME_YOUR_WEBSITE_ROLE_WAS_CHANGED
} from "./constants";
import { WebsiteRole } from "./interfaces";

/**
 * Delete website member request
 */
export interface DeleteWebsiteMemberRequestPayload {
    /**
     * Website id
     */
    websiteId: number;
    /**
     * User id
     */
    userId: number;
}

/**
 * Delete website member response
 */
export interface DeleteWebsiteMemberResponsePayload {
    
}

export interface DeleteWebsiteMemberRealtimePayload {
    /**
     * Website id
     */
    websiteId: number;
    /**
     * User id which has been deleted
     */
    userId: number;
    /**
     * User id which deleted member
     */
    deletedByUserId: number;
}

export type DeleteWebsiteMemberRequestAction = RealtimeRequestAction<typeof DELETE_WEBSITE_MEMBER, DeleteWebsiteMemberRequestPayload>;
export type DeleteWebsiteMemberSuccessAction = RealtimeSuccessResponseAction<typeof DELETE_WEBSITE_MEMBER, DeleteWebsiteMemberResponsePayload, DeleteWebsiteMemberRequestPayload>;
export type DeleteWebsiteMemberFailedAction = RealtimeErrorResponseAction<typeof DELETE_WEBSITE_MEMBER, DeleteWebsiteMemberRequestPayload>;
export type DeleteWebsiteMemberServerAction = ServerRealtimeAction<typeof REALTIME_WEBSITE_MEMBER_WAS_DELETED, DeleteWebsiteMemberRealtimePayload>;
export type YouHasBeenDeletedFromWebsiteServerAction = ServerRealtimeAction<typeof REALTIME_YOU_HAS_BEEN_DELETED_FROM_WEBSITE, DeleteWebsiteMemberRealtimePayload>;
export type DeleteWebsiteMemberActions =
    DeleteWebsiteMemberRequestAction |
    DeleteWebsiteMemberSuccessAction |
    DeleteWebsiteMemberFailedAction;

/**
 * Change member role request
 */
export interface ChangeWebsiteMemberRoleRequestPayload {
    /**
     * Website id
     */
    websiteId: number;
    /**
     * User id
     */
    userId: number;
    /**
     * New user role
     */
    role: WebsiteRole;
}

/**
 * Change member role response
 */
export interface ChangeWebsiteMemberRoleResponsePayload {
    
}

/**
 * Member role was changed
 */
export interface ChangeWebsiteMemberRoleRealtimePayload {
    /**
     * website id
     */
    websiteId: number;
    /**
     * User id
     */
    userId: number;
    /**
     * New user role
     */
    role: WebsiteRole;
    /**
     * User id which changed role
     */
    changedByUserId: number;
}

export type ChangeWebsiteMemberRoleRequestAction = RealtimeRequestAction<typeof CHANGE_WEBSITE_MEMBER_ROLE, ChangeWebsiteMemberRoleRequestPayload>;
export type ChangeWebsiteMemberRoleSuccessAction = RealtimeSuccessResponseAction<typeof CHANGE_WEBSITE_MEMBER_ROLE, ChangeWebsiteMemberRoleResponsePayload, ChangeWebsiteMemberRoleRequestPayload>;
export type ChangeWebsiteMemberRoleFailedAction = RealtimeErrorResponseAction<typeof CHANGE_WEBSITE_MEMBER_ROLE, ChangeWebsiteMemberRoleRequestPayload>;
export type ChangeWebsiteMemberRoleServerAction = ServerRealtimeAction<typeof REALTIME_WEBSITE_MEMBER_ROLE_WAS_CHANGED, ChangeWebsiteMemberRoleRealtimePayload>;
export type YourWebsiteRoleChangedServerAction = ServerRealtimeAction<typeof REALTIME_YOUR_WEBSITE_ROLE_WAS_CHANGED, ChangeWebsiteMemberRoleRealtimePayload>;
export type ChangeWebsiteMemberRoleActions =
    ChangeWebsiteMemberRoleRequestAction |
    ChangeWebsiteMemberRoleSuccessAction |
    ChangeWebsiteMemberRoleFailedAction;
    
export type WebsiteMemberActions =
    DeleteWebsiteMemberActions |
    DeleteWebsiteMemberServerAction |
    YouHasBeenDeletedFromWebsiteServerAction |
    ChangeWebsiteMemberRoleActions |
    ChangeWebsiteMemberRoleServerAction |
    YourWebsiteRoleChangedServerAction;