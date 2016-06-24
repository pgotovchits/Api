/**
 * Common payload types for auth realtime actions
 * These may be differ than API backend responses payloads, since API backend could contain additional information for
 * realtime update other website members
 *
 * Suffix request indicates what actions is coming from frontend
 * Suffix response indicates what action is being sent by backend to frontend
 * Suffix realtime indicates what action is being sent by backend to frontend for some realtime updates, not triggered by user request
 */

import { BasicUserInformation } from "./user";
import { UserWebsiteInfo, WebsiteMemberInfo } from "./website";
import { WebsiteInviteInfo, UserInviteInfo } from "./invite";
/**
 * Signup request
 */
export interface SignupRequestPayload {
    /**
     * User first name
     */
    firstName: string;
    /**
     * User last name
     */
    lastName: string;
    /**
     * User email
     */
    email: string;
    /**
     * User password
     */
    password: string;
    /**
     * Website name
     */
    website?: string;
    /**
     * Invite code
     */
    inviteCode?: string;
}

/**
 * Signup response
 */
export interface SignupResponsePayload {
    /**
     * Generated token for new registered user
     */
    token: string;
}

/**
 * Login by token request
 */
export interface LoginByTokenRequestPayload {
    /**
     * JWT token
     */
    token: string;
}

/**
 * Login by credentials (username/password) request
 */
export interface LoginByCredentialsRequestPayload {
    /**
     * Email
     */
    email: string;
    /**
     * Password
     */
    password: string;
}

// NOTE asvetliakov: We're using List/Array structure rather than Map because Immutable.fromJS on frontend will convert mapped keys
// to strings and we want to keep them as numbers instead. So additional processing (iterating over map) will be still needed on frontend 
// in both cases, so let's use simple array form instead
/**
 * Login response payload
 */
export interface LoginResponsePayload {
    /**
     * New user token
     */
    token: string;
    /**
     * User information
     */
    user: BasicUserInformation;
    /**
     * User websites
     */
    websites: UserWebsiteInfo[];
    /**
     * Website member -> role mapping
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
    /**
     * User invites
     */
    invites: UserInviteInfo[];
}

/**
 * Used by REALTIME_TOKEN_UPDATE notification
 */
export interface TokenUpdateRealtimePayload {
    /**
     * New token
     */
    token: string;
}

/**
 * Async validate email request payload
 */
export interface ValidateEmailRequestPayload {
    /**
     * Email to validate
     */
    email: string;
}

/**
 * Async validate email response payload
 */
export interface ValidateEmailResponsePayload { }