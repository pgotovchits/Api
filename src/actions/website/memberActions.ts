import {
    CHANGE_WEBSITE_MEMBER_ROLE,
    DELETE_WEBSITE_MEMBER,
    REALTIME_WEBSITE_MEMBER_ROLE_WAS_CHANGED,
    REALTIME_WEBSITE_MEMBER_WAS_DELETED
} from "./constants";
import { RealtimeAction, RealtimeErrorResponse, RealtimeResponse, ServerRealtimeAction } from "../realtimeAction";
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

export type DeleteWebsiteMemberAction = RealtimeAction<typeof DELETE_WEBSITE_MEMBER, DeleteWebsiteMemberRequestPayload>;
export type DeleteWebsiteMemberResponse = RealtimeResponse<DeleteWebsiteMemberResponsePayload> | RealtimeErrorResponse;
export type DeleteWebsiteMemberServerAction = ServerRealtimeAction<typeof REALTIME_WEBSITE_MEMBER_WAS_DELETED, DeleteWebsiteMemberRealtimePayload>;

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

export type ChangeWebsiteMemberRoleAction = RealtimeAction<typeof CHANGE_WEBSITE_MEMBER_ROLE, ChangeWebsiteMemberRoleRequestPayload>;
export type ChangeWebsiteMemberRoleResponse = RealtimeResponse<ChangeWebsiteMemberRoleResponsePayload> | RealtimeErrorResponse;
export type ChangeWebsiteMemberRoleServerAction = ServerRealtimeAction<typeof REALTIME_WEBSITE_MEMBER_ROLE_WAS_CHANGED, ChangeWebsiteMemberRoleRealtimePayload>;