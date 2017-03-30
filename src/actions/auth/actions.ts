import { ApiErrorInterface, RealtimeErrorInterface } from "../../utils/Errors";
import { ActiveChatCommunicationInfo, IncomingChatCommunicationInfo } from "../communication";
import { TeamInviteInfo, UserInviteInfo } from "../invite";
import { RealtimeErrorResponseAction, RealtimeRequestAction, RealtimeSuccessResponseAction, ServerRealtimeAction } from "../realtimeAction";
import { TeamMemberInfo, UserTeamInfo } from "../team";
import { BasicUserInformation } from "../user";
import { FullUserInformation } from "../user/interfaces";
import { ACTIVATE_USER, RESEND_ACTIVATION } from "./constants";
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
     * Team name
     */
    team?: string;
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

export type SignupRequestAction = RealtimeRequestAction<typeof SIGNUP, SignupRequestPayload>;
export type SignupSuccessAction = RealtimeSuccessResponseAction<typeof SIGNUP, SignupResponsePayload, SignupRequestPayload>;
export type SignupFailedAction = RealtimeErrorResponseAction<typeof SIGNUP, SignupRequestPayload>;
export type SignupActions =
    SignupRequestAction |
    SignupSuccessAction |
    SignupFailedAction;


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

export type LoginRequestAction = RealtimeRequestAction<typeof LOGIN, LoginByTokenRequestPayload | LoginByCredentialsRequestPayload>;
export type LoginSuccessAction = RealtimeSuccessResponseAction<typeof LOGIN, LoginResponsePayload, LoginByTokenRequestPayload | LoginByCredentialsRequestPayload>;
export type LoginFailedAction = RealtimeErrorResponseAction<typeof LOGIN, LoginByTokenRequestPayload | LoginByCredentialsRequestPayload>;
export type LoginActions =
    LoginRequestAction |
    LoginSuccessAction |
    LoginFailedAction;



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

export type ValidateEmailRequestAction = RealtimeRequestAction<typeof VALIDATE_EMAIL, ValidateEmailRequestPayload>;
export type ValidateEmailSuccessAction = RealtimeSuccessResponseAction<typeof VALIDATE_EMAIL, ValidateEmailResponsePayload, ValidateEmailRequestPayload>;
export type ValidateEmailFailedAction = RealtimeErrorResponseAction<typeof VALIDATE_EMAIL, ValidateEmailRequestPayload>;
export type ValidateEmailActions =
    ValidateEmailRequestAction |
    ValidateEmailSuccessAction |
    ValidateEmailFailedAction;



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

export type LogoutRequestAction = RealtimeRequestAction<typeof LOGOUT, LogoutRequestPayload>;
export type LogoutSuccessAction = RealtimeSuccessResponseAction<typeof LOGOUT, LogoutResponsePayload, LogoutRequestPayload>;
export type LogoutFailedAction = RealtimeErrorResponseAction<typeof LOGOUT, LogoutRequestPayload>;
export type LogoutServerAction = ServerRealtimeAction<typeof REALTIME_LOGOUT, LogoutRealtimePayload>;
export type LogoutActions =
    LogoutRequestAction |
    LogoutSuccessAction |
    LogoutFailedAction;



/**
 * Send the email to reset the password
 */
export interface ResetPasswordEmailSendRequestPayload {
    /**
     * Email to send the password reset
     */
    email: string;
}

export type SendEmailForPasswordResetRequestAction = RealtimeRequestAction<typeof RESET_PASSWORD_EMAIL_SEND, ResetPasswordEmailSendRequestPayload>;
export type SendEmailForPasswordResetSuccessAction = RealtimeSuccessResponseAction<typeof RESET_PASSWORD_EMAIL_SEND, void, ResetPasswordEmailSendRequestPayload>;
export type SendEmailForPasswordResetFailedAction = RealtimeErrorResponseAction<typeof RESET_PASSWORD_EMAIL_SEND, ResetPasswordEmailSendRequestPayload>;
export type SendEmailForPasswordResetActions =
    SendEmailForPasswordResetRequestAction |
    SendEmailForPasswordResetSuccessAction |
    SendEmailForPasswordResetFailedAction;


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

export type ResetPasswordRequestAction = RealtimeRequestAction<typeof RESET_PASSWORD, ResetPasswordRequestPayload>;
export type ResetPasswordSuccessAction = RealtimeSuccessResponseAction<typeof RESET_PASSWORD, void, ResetPasswordRequestPayload>;
export type ResetPasswordFailedAction = RealtimeErrorResponseAction<typeof RESET_PASSWORD, ResetPasswordRequestPayload>;
export type ResetPasswordActions =
    ResetPasswordRequestAction |
    ResetPasswordSuccessAction |
    ResetPasswordFailedAction;
    
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

export type ActivateUserRequestAction = RealtimeRequestAction<typeof ACTIVATE_USER, ActivateUserRequestPayload>;
export type ActivateUserSuccessAction = RealtimeSuccessResponseAction<typeof ACTIVATE_USER, ActivateUserResponsePayload, ActivateUserRequestAction>;
export type ActivateUserFailedAction = RealtimeErrorResponseAction<typeof ACTIVATE_USER, ActivateUserRequestAction>;

export type ActivateUserActions =
    ActivateUserRequestAction |
    ActivateUserSuccessAction |
    ActivateUserFailedAction;

export interface ResendActivationRequestPayload {
    /**
     * Email to resend activation token
     */
    email: string;
}

export type ResendActivationRequestAction = RealtimeRequestAction<typeof RESEND_ACTIVATION, ResendActivationRequestPayload>;
export type ResendActivationSuccessAction = RealtimeSuccessResponseAction<typeof RESEND_ACTIVATION, void, ResendActivationRequestPayload>;
export type ResendActivationFailedAction = RealtimeErrorResponseAction<typeof RESEND_ACTIVATION, ResendActivationRequestPayload>;

export type ResendActivationActions =
    ResendActivationRequestAction |
    ResendActivationSuccessAction |
    ResendActivationFailedAction;

export type AuthActions =
    SignupActions |
    LoginActions |
    TokenUpdateServerAction |
    TokenUpdateFailedServerAction |
    ValidateEmailActions |
    LogoutActions |
    LogoutServerAction |
    SendEmailForPasswordResetActions |
    ResetPasswordActions |
    ActivateUserActions |
    ResendActivationActions;
