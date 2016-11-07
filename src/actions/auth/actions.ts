import { ApiErrorInterface, RealtimeErrorInterface } from "../../utils/Errors";
import { RealtimeAction, RealtimeErrorResponseAction, RealtimeSuccessResponseAction, ServerRealtimeAction } from "../realtimeAction";
import { BasicUserInformation } from "../user";
import { UserWebsiteInfo, WebsiteMemberInfo } from "../website";
import { WebsiteInviteInfo, UserInviteInfo } from "../invite";
import { IncomingChatCommunicationInfo, ActiveChatCommunicationInfo } from "../communication";
import {
    LOGIN,
    LOGOUT,
    REALTIME_LOGOUT,
    REALTIME_TOKEN_UPDATE,
    REALTIME_TOKEN_UPDATE_FAILED,
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
export type SignupPending<T> = RealtimeAction<T, SignupRequestPayload>;
export type SignupSuccess<T> = RealtimeSuccessResponseAction<T, SignupResponsePayload>;
export type SignupFailed<T> = RealtimeErrorResponseAction<T>;

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
export type LoginPending<T> = RealtimeAction<T, LoginByTokenRequestPayload | LoginByCredentialsRequestPayload>;
export type LoginSuccess<T> = RealtimeSuccessResponseAction<T, LoginResponsePayload>;
export type LoginFailed<T> = RealtimeErrorResponseAction<T>;

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
export type TokenUpdateFailedServerAction = ServerRealtimeAction<typeof REALTIME_TOKEN_UPDATE_FAILED, ApiErrorInterface | RealtimeErrorInterface>;

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
export type ValidateEmailPending<T> = RealtimeAction<T, ValidateEmailRequestPayload>;
export type ValidateEmailSuccess<T> = RealtimeSuccessResponseAction<T, ValidateEmailResponsePayload>;
export type ValidateEmailFailed<T> = RealtimeErrorResponseAction<T>;

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
export type LogoutServerAction = ServerRealtimeAction<typeof REALTIME_LOGOUT, LogoutRealtimePayload>;
export type LogoutPending<T> = RealtimeAction<T, LogoutRequestPayload>;
export type LogoutSuccess<T> = RealtimeSuccessResponseAction<T, LogoutResponsePayload>;
export type LogoutFailed<T> = RealtimeErrorResponseAction<T>;


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
export type SendEmailForPasswordResetPending<T> = RealtimeAction<T, ResetPasswordEmailSendRequestPayload>;
export type SendEmailForPasswordResetSuccess<T> = RealtimeSuccessResponseAction<T, void>;
export type SendEmailForPasswordResetFailed<T> = RealtimeErrorResponseAction<T>;

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
export type ResetPasswordPending<T> = RealtimeAction<T, ResetPasswordRequestPayload>;
export type ResetPasswordSuccess<T> = RealtimeSuccessResponseAction<T, void>;
export type ResetPasswordFailed<T> = RealtimeErrorResponseAction<T>;