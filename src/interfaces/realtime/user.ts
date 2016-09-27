/**
 * Common payload types for user realtime actions
 * Suffix request indicates what actions is coming from frontend
 * Suffix response indicates what action is being sent by backend to frontend
 * Suffix realtime indicates what action is being sent by backend to frontend for some realtime updates, not triggered by user request
 */


/**
 * Basic user information interface
 */
export interface BasicUserInformation {
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
}

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
 * Change user action response
 */
export interface UpdateUserResponsePayload extends BasicUserInformation {}

/**
 * User updated his info
 */
export interface UpdateUserRealtimePayload extends BasicUserInformation {}

/**
 * Update user password response
 */
export interface UpdateUserPasswordResponsePayload {}

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