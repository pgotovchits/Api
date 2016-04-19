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
 * Change user action response
 */
export interface UpdateUserResponsePayload extends BasicUserInformation {}
