/**
 * Common payload types for user realtime actions
 * Suffix request indicates what actions is coming from frontend
 * Suffix response indicates what action is being sent by backend to frontend
 * Suffix realtime indicates what action is being sent by backend to frontend for some realtime updates, not triggered by user request
 */

import { BasicUserInformation } from "./interfaces";
import {
    REALTIME_USER_WAS_UPDATED,
    REGISTER_FOR_PUSH_NOTIFICATIONS,
    USER_PASSWORD_UPDATE,
    USER_UPDATE
} from "./constants";
import { RealtimeAction, RealtimeErrorResponseAction, RealtimeSuccessResponseAction, ServerRealtimeAction } from "../realtimeAction";

/**
 * Change user action request
 * Same as BasicUserInformation but fields may be optional
 */
export interface UpdateUserRequestPayload {
    /**
     * User email
     */
    email?: string;
    /**
     * User first name
     */
    firstName?: string;
    /**
     * User last name
     */
    lastName?: string;
}

/**
 * Change user action response
 */
export interface UpdateUserResponsePayload extends BasicUserInformation {}

/**
 * User updated his info
 */
export interface UpdateUserRealtimePayload extends BasicUserInformation {}

export type UpdateUserAction = RealtimeAction<typeof USER_UPDATE, UpdateUserRequestPayload>;
export type UpdateUserServerAction = ServerRealtimeAction<typeof REALTIME_USER_WAS_UPDATED, UpdateUserRealtimePayload>;
export type UpdateUserPending<T> = RealtimeAction<T, UpdateUserRequestPayload>;
export type UpdateUserSuccess<T> = RealtimeSuccessResponseAction<T, UpdateUserResponsePayload>;
export type UpdateUserFailed<T> = RealtimeErrorResponseAction<T>;

/**
 * Update user password request
 */
export interface UpdateUserPasswordRequestPayload {
    /**
     * Old password, required if user is updating the password
     */
    oldPassword: string;
    /**
     * User's new password
     */
    password: string;
}

/**
 * Update user password response
 */
export interface UpdateUserPasswordResponsePayload {}

export type UpdateUserPasswordAction = RealtimeAction<typeof USER_PASSWORD_UPDATE, UpdateUserPasswordRequestPayload>;
export type UpdateUserPasswordPending<T> = RealtimeAction<T, UpdateUserPasswordRequestPayload>;
export type UpdateUserPasswordSuccess<T> = RealtimeSuccessResponseAction<T, UpdateUserPasswordResponsePayload>;
export type UpdateUserPasswordFailed<T> = RealtimeErrorResponseAction<T>;

/**
 * Register for push notifications request
 */
export interface RegisterForPushNotificationsRequestPayload {
    /**
     * Push token
     */
    pushToken: string;
}

/**
 * Register for push notifications response
 */
export interface RegisterForPushNotificationsResponsePayload {}

export type RegisterForPushNotificationsAction = RealtimeAction<typeof REGISTER_FOR_PUSH_NOTIFICATIONS, RegisterForPushNotificationsRequestPayload>;
export type RegisterForPushNotificationsPending<T> = RealtimeAction<typeof REGISTER_FOR_PUSH_NOTIFICATIONS, RegisterForPushNotificationsRequestPayload>;
export type RegisterForPushNotificationsSuccess<T> = RealtimeSuccessResponseAction<typeof REGISTER_FOR_PUSH_NOTIFICATIONS, RegisterForPushNotificationsResponsePayload>;
export type RegisterForPushNotificationsFailed<T> = RealtimeErrorResponseAction<T>;