/**
 * Common payload types for auth realtime actions
 * These may be differ than API backend responses payloads, since API backend could contain additional information for
 * realtime update other website members
 * 
 * Suffix request indicates what actions is coming from frontend
 * Suffix response indicates what action is being sent by backend to frontend
 * Suffix realtime indicates what action is being sent by backend to frontend as some realtime updates, not triggered by user request
 */

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
     * Username
     */
    username: string;
    /**
     * Passwrd
     */
    password: string;
}

/**
 * User information in login response
 */
interface UserInformation {
    /**
     * User id
     */
    id: number;
    /**
     * User email
     */
    email: string;
    /**
     * User first name
     */
    firstName: string;
    /**
     * User last name
     */
    lastName: string;
    /**
     * User websites
     */
    websites: Array<{ id: number, name: string }>;
}

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
    user: UserInformation;
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