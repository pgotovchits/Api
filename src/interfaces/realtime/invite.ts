/**
 * Common payload types for invite realtime actions
 * These may be differ than API backend responses payloads, since API backend could contain additional information for
 * realtime update other website members
 *
 * Suffix request indicates what actions is coming from frontend
 * Suffix response indicates what action is being sent by backend to frontend
 * Suffix realtime indicates what action is being sent by backend to frontend for some realtime updates, not triggered by user request
 */

// TODO asvetliakov: Having two invite interfaces is not good
import { UserWebsiteInfo, WebsiteMemberInfo } from "./website";
import { BasicUserInformation } from "./user";
/**
 * User invite information
 */
export interface UserInviteInfo {
    /**
     * Invite code
     */
    code: string;
    /**
     * Linked website to this invite
     */
    websiteId: number;
    /**
     * Website name
     */
    websiteName: string;
}

/**
 * Invite information
 */
export interface WebsiteInviteInfo {
    /**
     * Invite code
     */
    code: string;
    /**
     * Invite email
     */
    email: string;
    /**
     * Linked website to this invite
     */
    websiteId: number;
    /**
     * User id if invite was linked with existing user, otherwise undefined
     */
    userId?: number;
}

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

/**
 * New realtime invite
 */
export interface IncomingInviteRealtimePayload extends UserInviteInfo { }

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