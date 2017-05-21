/**
 * Common payload types for user realtime actions
 * Suffix request indicates what actions is coming from frontend
 * Suffix response indicates what action is being sent by backend to frontend
 * Suffix realtime indicates what action is being sent by backend to frontend for some realtime updates, not triggered by user request
 */

import { ActionDescriptor, ServerRealtimeAction } from "../../../common/realtimeAction";
import {
    REALTIME_USER_WAS_UPDATED,
    REGISTER_FOR_PUSH_NOTIFICATIONS,
    USER_PASSWORD_UPDATE,
    USER_UPDATE
} from "./constants";
import { BasicUserInformation, FullUserInformation } from "./interfaces";

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
    /**
     * User settings
     */
    settings?: { [key: string]: string | number | boolean };
}

/**
 * Change user action response. Only requested values will be returned in reponse
 */
export interface UpdateUserResponsePayload extends Partial<FullUserInformation> {}

/**
 * User updated his info. Only changed values will be sent
 */
export interface UpdateUserRealtimePayload extends BasicUserInformation {}

export type UpdateUserAction = ActionDescriptor<typeof USER_UPDATE, UpdateUserRequestPayload, UpdateUserResponsePayload>;
export type UpdateUserServerAction = ServerRealtimeAction<typeof REALTIME_USER_WAS_UPDATED, UpdateUserRealtimePayload>;

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

export type UpdateUserPasswordAction = ActionDescriptor<typeof USER_PASSWORD_UPDATE, UpdateUserPasswordRequestPayload, UpdateUserPasswordResponsePayload>;

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

export type RegisterForPushNotificationsAction = ActionDescriptor<typeof REGISTER_FOR_PUSH_NOTIFICATIONS, RegisterForPushNotificationsRequestPayload, RegisterForPushNotificationsResponsePayload>;
    

export type UserActions =
    UpdateUserAction |
    UpdateUserPasswordAction |
    RegisterForPushNotificationsAction;

export type UserServerActions =
    UpdateUserServerAction;