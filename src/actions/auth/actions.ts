import { RealtimeAction, RealtimeErrorResponse, RealtimeResponse, ServerRealtimeAction } from "../realtimeAction";
import { BasicUserInformation } from "../user";
import { UserWebsiteInfo, WebsiteMemberInfo } from "../website";
import { WebsiteInviteInfo, UserInviteInfo } from "../invite";
import { IncomingChatCommunicationInfo, ActiveChatCommunicationInfo } from "../communication";
import {
    LOGIN,
    LOGOUT,
    REALTIME_LOGOUT,
    REALTIME_TOKEN_UPDATE,
    RESET_PASSWORD,
    RESET_PASSWORD_EMAIL_SEND,
    SIGNUP,
    VALIDATE_EMAIL
} from "./constants";

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

export type SignupAction = RealtimeAction<typeof SIGNUP, SignupRequestPayload>;
export type SignupResponse = RealtimeResponse<SignupResponsePayload> | RealtimeErrorResponse;

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
    /**
     * Total unread messages for all user websites
     */
    totalUnreadMessages: number;
    /**
     * Incoming chats
     */
    incomingChats: IncomingChatCommunicationInfo[];
    /**
     * Active chats
     */
    activeChats: ActiveChatCommunicationInfo[];
}

export type LoginAction = RealtimeAction<typeof LOGIN, LoginByTokenRequestPayload | LoginByCredentialsRequestPayload>
export type LoginResponse = RealtimeResponse<LoginResponsePayload> | RealtimeErrorResponse;

/**
 * Used by REALTIME_TOKEN_UPDATE notification
 */
export interface TokenUpdateRealtimePayload {
    /**
     * New token
     */
    token: string;
}

export type TokenUpdateServerAction = ServerRealtimeAction<typeof REALTIME_TOKEN_UPDATE, TokenUpdateRealtimePayload>;

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

export type ValidateEmailAction = RealtimeAction<typeof VALIDATE_EMAIL, ValidateEmailRequestPayload>;
export type ValidateEmailResponse = RealtimeResponse<ValidateEmailResponsePayload> | RealtimeErrorResponse;

/**
 * Logout request
 */
export interface LogoutRequestPayload {}

/**
 * Logout response
 */
export interface LogoutResponsePayload {}

/**
 * Logout realtime. Sent to all same connected device identifiers (usually same tabs in the browser)
 */
export interface LogoutRealtimePayload {}

export type LogoutAction = RealtimeAction<typeof LOGOUT, LogoutRequestPayload>;
export type LogoutResponse = RealtimeResponse<LogoutResponsePayload> | RealtimeErrorResponse;
export type LogoutServerAction = ServerRealtimeAction<typeof REALTIME_LOGOUT, LogoutRealtimePayload>;


/**
 * Send the email to reset the password
 */
export interface ResetPasswordEmailSendRequestPayload {
    /**
     * Email to send the password reset
     */
    email: string;
}

export type SendEmailForPasswordResetAction = RealtimeAction<typeof RESET_PASSWORD_EMAIL_SEND, ResetPasswordEmailSendRequestPayload>;
export type SendEmailForPasswordResetResponse = RealtimeResponse<void> | RealtimeErrorResponse;

/**
 * Reset password payload
 */
export interface ResetPasswordRequestPayload {
    /**
     * User email
     */
    email: string;
    /**
     * Reset code
     */
    code: string;
    /**
     * New password
     */
    password: string;
}

export type ResetPasswordAction = RealtimeAction<typeof RESET_PASSWORD, ResetPasswordRequestPayload>;
export type ResetPasswordResponse = RealtimeResponse<void> | RealtimeErrorResponse;