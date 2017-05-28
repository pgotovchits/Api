import { ApiErrorInterface, RealtimeErrorInterface } from "../../../common/Errors";
import { ActionDescriptor, ServerRealtimeAction } from "../../../common/realtimeAction";
import { ACTIVATE_USER, RESEND_ACTIVATION } from "../../constants/auth";
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
} from "../../constants/auth";
import { ActiveChatCommunicationInfo, IncomingChatCommunicationInfo } from "../communication";
import { TeamInviteInfo, UserInviteInfo } from "../invite";
import { TeamMemberInfo, UserTeamInfo } from "../team";
import { BasicUserInformation } from "../user";
import { FullUserInformation } from "../user/interfaces";

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
     * Team name
     */
    team?: string;
    /**
     * Custom team code
     */
    teamCode?: string;
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

export type SignupAction = ActionDescriptor<typeof SIGNUP, SignupRequestPayload, SignupResponsePayload>;


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
     * User information with settings
     */
    user: FullUserInformation;
    /**
     * User teams
     */
    teams: UserTeamInfo[];
    /**
     * Team member -> role mapping
     */
    teamMembers: TeamMemberInfo[];
    /**
     * Team invites
     */
    teamInvites: TeamInviteInfo[];
    /**
     * Other users (team members, invite members, etc...)
     */
    members: BasicUserInformation[];
    /**
     * User invites
     */
    invites: UserInviteInfo[];
    /**
     * Total unread messages for all user teams
     */
    totalNonNotifiedMissedChats: number;
    /**
     * Incoming chats
     */
    incomingChats: IncomingChatCommunicationInfo[];
    /**
     * Active chats
     */
    activeChats: ActiveChatCommunicationInfo[];
}


export type LoginAction = ActionDescriptor<typeof LOGIN, LoginByTokenRequestPayload | LoginByCredentialsRequestPayload, LoginResponsePayload>;


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

export type ValidateEmailAction = ActionDescriptor<typeof VALIDATE_EMAIL, ValidateEmailRequestPayload, ValidateEmailResponsePayload>;



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


export type LogoutAction = ActionDescriptor<typeof LOGOUT, LogoutRequestPayload, LogoutResponsePayload>;

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

export type SendEmailForPasswordResetAction = ActionDescriptor<typeof RESET_PASSWORD_EMAIL_SEND, ResetPasswordEmailSendRequestPayload, void>;


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

export type ResetPasswordAction = ActionDescriptor<typeof RESET_PASSWORD, ResetPasswordRequestPayload, void>;
    
export interface ActivateUserRequestPayload {
    /**
     * Activation token
     */
    token: string;
}

export interface ActivateUserResponsePayload {
    /**
     * Authentication token
     * 
     */
    token: string;
}

export type ActivateUserAction = ActionDescriptor<typeof ACTIVATE_USER, ActivateUserRequestPayload, ActivateUserResponsePayload>;


export interface ResendActivationRequestPayload {
    /**
     * Email to resend activation token
     */
    email: string;
}


export type ResendActivationAction = ActionDescriptor<typeof RESEND_ACTIVATION, ResendActivationRequestPayload, void>;

export type AuthActions =
    SignupAction |
    LoginAction |
    ValidateEmailAction |
    LogoutAction |
    SendEmailForPasswordResetAction |
    ResetPasswordAction |
    ActivateUserAction |
    ResendActivationAction;

export type AuthServerActions =
    TokenUpdateServerAction |
    TokenUpdateFailedServerAction |
    LogoutServerAction;