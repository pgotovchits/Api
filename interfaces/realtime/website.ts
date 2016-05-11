/**
 * Common payload types for website realtime actions
 * Suffix request indicates what actions is coming from frontend
 * Suffix response indicates what action is being sent by backend to frontend
 * Suffix realtime indicates what action is being sent by backend to frontend for some realtime updates, not triggered by user request
 */

import { WebsiteInviteInfo } from "./invite";
import { BasicUserInformation } from "./user";
export type WebsiteRole = "owner" | "admin" | "agent";

/**
 * Website role -> member mapping
 */
export interface WebsiteMemberInfo {
    /**
     * Website id
     */
    websiteId: number;
    /**
     * Member id
     */
    memberId: number;
    /**
     * Website role
     */
    role: WebsiteRole;
}

/**
 * Basic website information
 */
export interface UserWebsiteInfo {
    /**
     * Website id
     */
    id: number;
    /**
     * Website name
     */
    name: string;
    /**
     * Website role
     */
    role: WebsiteRole;
}

export interface DeleteWebsiteRequestPayload {
    /**
     * Website id
     */
    id: number;
}

export interface DeleteWebsiteResponsePayload {
    // TODO: complete
}

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
}

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