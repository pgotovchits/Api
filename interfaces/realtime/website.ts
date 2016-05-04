/**
 * Common payload types for website realtime actions
 * Suffix request indicates what actions is coming from frontend
 * Suffix response indicates what action is being sent by backend to frontend
 * Suffix realtime indicates what action is being sent by backend to frontend for some realtime updates, not triggered by user request
 */

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
    role: string;
}

/**
 * Change member role response
 */
export interface ChangeWebsiteMemberRoleResponsePayload {
    
}
