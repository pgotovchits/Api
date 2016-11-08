import { ApiErrorInterface, RealtimeErrorInterface } from "../utils/Errors";
import { BaseAction } from "./action";

export const REALTIME_ACTION_REQUEST = "request";
export const REALTIME_ACTION_SUCCESS = "success";
export const REALTIME_ACTION_FAILED = "failed";

/**
 * Realtime base action interface
 */
export interface RealtimeAction<TType, TPayload> {
    /**
     * Action type
     * 
     * @type {TType}
     * @memberOf RealtimeAction
     */
    type: TType;
    /**
     * Action payload
     * 
     * @type {TPayload}
     * @memberOf RealtimeAction
     */
    payload: TPayload;
    /**
     * Error flag
     * 
     * @type {boolean}
     * @memberOf RealtimeAction
     */
    error?: boolean;
    meta: {
        /**
         * If true and was set then use authenticated route
         */
        authenticated?: boolean;
        /**
         * If true sends action to realtime server
         */
        realtime: boolean;
        /**
         * Action flow type
         * 
         * @type {typeof REALTIME_ACTION_PENDING}
         */
        type: typeof REALTIME_ACTION_REQUEST | typeof REALTIME_ACTION_SUCCESS | typeof REALTIME_ACTION_FAILED;
        /**
         * Do not send success/failed response for action
         * 
         * @type {boolean}
         */
        simpleFlow?: boolean;
        /**
         * Do not perform action propagation to other user connections
         */
        noPropagate?: boolean;
    };
}

/**
 * Realtime request action interface
 * 
 * @export
 * @interface RealtimeRequestAction
 * @extends {RealtimeAction<TType, TPayload>}
 * @template TType
 * @template TPayload
 */
export interface RealtimeRequestAction<TType, TPayload> extends RealtimeAction<TType, TPayload> {
    /**
     * Error flag
     * 
     * @type {boolean}
     * @memberOf RealtimeRequestAction
     */
    error: false;
    meta: {
        /**
         * Realtime flag
         * 
         * @type {boolean}
         */
        realtime: true;
        /**
         * Action type
         * 
         * @type {typeof REALTIME_ACTION_REQUEST}
         */
        type: typeof REALTIME_ACTION_REQUEST;
    };
}

/**
 * Realtime success response action
 * 
 * @export
 * @interface RealtimeResponseAction
 * @extends {BaseAction<TType, TPayload>}
 * @template TType
 * @template TPayload
 */
export interface RealtimeSuccessResponseAction<TType, TResponsePayload, TRequestPayload> extends RealtimeAction<TType, TResponsePayload> {
    /**
     * Error flag. For success response it's false
     * 
     * @type {boolean}
     * @memberOf RealtimeSuccessResponseAction
     */
    error: false;
    meta: {
        /**
         * Realtime flag. The response will not be processed on server again, so must be false
         * 
         * @type {boolean}
         */
        realtime: false;
        /**
         * Action flow type
         * 
         * @type {typeof REALTIME_ACTION_SUCCESS}
         */
        type: typeof REALTIME_ACTION_SUCCESS;
    };
    /**
     * Original request payload
     * 
     * @type {TRequestPayload}
     * @memberOf RealtimeSuccessResponseAction
     */
    requestPayload: TRequestPayload;
}

/**
 * Realtime error response action. Using serialized error here since we class information will be lost when transferring over webosckets
 * 
 * @export
 * @interface RealtimeErrorResponse
 */
export interface RealtimeErrorResponseAction<TType, TRequestPayload> extends RealtimeAction<TType, ApiErrorInterface | RealtimeErrorInterface> {
    /**
     * Error flag
     * 
     * @type {boolean}
     * @memberOf RealtimeErrorResponseAction
     */
    error: true;
    meta: {
        /**
         * Realtime flag. Te response will not be processed on server again, so must be false
         * 
         * @type {boolean}
         */
        realtime: false;
        /**
         * Action flow type
         * 
         * @type {typeof REALTIME_ACTION_FAILED}
         */
        type: typeof REALTIME_ACTION_FAILED;
    };
    /**
     * Original request payload
     * 
     * @type {TRequestPayload}
     * @memberOf RealtimeErrorResponseAction
     */
    requestPayload: TRequestPayload;
}

/**
 * Action sent by server to clients (to whole team for example) and triggered by other action/sequence,
 * for example REALTIME_TOKEN_UPDATE/CHAT_WAS_CANCELED/etc...
 * For now it's same as BaseAction, but we may want to add some stuff later
 * 
 * @export
 * @interface ServerRealtimeAction
 * @extends {BaseAction<TPayload>}
 * @template TPayload
 */
export interface ServerRealtimeAction<TType, TPayload> extends BaseAction<TType, TPayload> {
}

/**
 * Check if given action is any of RealtimeAction types
 * 
 * @export
 * @template TType
 * @template TPayload
 * @param {*} action
 * @returns {action is RealtimeAction<TType, TPayload>}
 */
export function isRealtimeAction<TType, TPayload>(action: any): action is RealtimeAction<TType, TPayload> {
    return (action && typeof action.type !== "undefined" && action.meta && typeof action.meta.realtime !== "undefined");
}

/**
 * Check if given action is RealtimeRequestAction
 * 
 * @export
 * @template TType
 * @template TPayload
 * @param {*} action
 * @returns {action is RealtimeRequestAction<TType, TPayload>}
 */
export function isRealtimeRequestAction<TType, TPayload>(action: any): action is RealtimeRequestAction<TType, TPayload> {
    return (isRealtimeAction(action) && action.meta.realtime);
}