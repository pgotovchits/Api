import { BaseAction } from "../common/action";
import { ApiErrorInterface, RealtimeErrorInterface } from "../common/Errors";

export const REALTIME_ACTION_REQUEST = "request";
export const REALTIME_ACTION_SUCCESS = "success";
export const REALTIME_ACTION_FAILED = "failed";

/**
 * Realtime metadata
 */
export interface RealtimeActionMetaInformation {
    /**
     * Realtime flag
     */
    realtime: boolean;
}

/**
 * Realtime base action interface
 */
export interface RealtimeAction<TType, TPayload> {
    /**
     * Action type
     */
    type: TType;
    /**
     * Action flow type
     */
    flowType: typeof REALTIME_ACTION_REQUEST | typeof REALTIME_ACTION_SUCCESS | typeof REALTIME_ACTION_FAILED;
    /**
     * Action payload
     */
    payload: TPayload;
    /**
     * Error flag
     */
    error?: boolean;
    /**
     * Metadata information for all realtime action types
     */
    meta: RealtimeActionMetaInformation;
}

/**
 * Realtime request action interface
 * 
 * @export
 * @interface RealtimeRequestAction
 * @template TType 
 * @template TPayload 
 */
export interface RealtimeRequestAction<TType, TPayload> extends RealtimeAction<TType, TPayload> {
    /**
     * Action flow type
     */
    flowType: typeof REALTIME_ACTION_REQUEST;
    /**
     * Error flag
     */
    error: false;
    meta: RealtimeActionMetaInformation & {
        /**
         * If true and was set then use authenticated route
         */
        authenticated?: boolean;
        /**
         * Realtime flag. If false it won't be processsed on server
         * When server is sending syncronization request for this action it set this to false automatically
         */
        realtime: boolean;
        /**
         * Do not send success/failed response for action
         */
        simpleFlow?: boolean;
        /**
         * Do not perform action propagation to other user connections
         */
        noPropagate?: boolean;
    };
}

/**
 * Realtime success response action
 * 
 * @export
 * @interface RealtimeResponseAction
 * @template TType
 * @template TPayload
 */
export interface RealtimeSuccessResponseAction<TType, TResponsePayload, TRequestPayload> extends RealtimeAction<TType, TResponsePayload> {
    /**
     * Action flow type
     */
    flowType: typeof REALTIME_ACTION_SUCCESS;
    /**
     * Error flag. For success response it's false
     */
    error: false;
    meta: RealtimeActionMetaInformation & {
        /**
         * Realtime flag. The response will not be processed on server again, so must be false
         */
        realtime: false;
    };
    /**
     * Original request payload
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
     * Action flow type
     */
    flowType: typeof REALTIME_ACTION_FAILED;
    /**
     * Error flag
     */
    error: true;
    meta: RealtimeActionMetaInformation & {
        /**
         * Realtime flag. Te response will not be processed on server again, so must be false
         */
        realtime: false;
    };
    /**
     * Original request payload
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
 * @template TPayload
 */
export interface ServerRealtimeAction<TType, TPayload> extends BaseAction<TType, TPayload> {}

/**
 * Check if given action is any of RealtimeAction types
 * 
 * @export
 * @template TType 
 * @template TPayload 
 * @param action 
 * @returns 
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
 * @param action 
 * @returns 
 */
export function isRealtimeRequestAction<TType, TPayload>(action: any): action is RealtimeRequestAction<TType, TPayload> {
    return (isRealtimeAction(action) && action.meta.realtime);
}

export type RequestKey = "Request";
export type SuccessKey = "Success";
export type FailedKey = "Failed";
export type ResponseKey = "Response";
/**
 * Action descriptor
 * 
 * @export
 * @interface ActionDescriptor
 * @template TType 
 * @template TRequest 
 * @template TResponse 
 */
export interface ActionDescriptor<TType, TRequest, TResponse> {
    Request: RealtimeRequestAction<TType, TRequest>;
    Success: RealtimeSuccessResponseAction<TType, TResponse, TRequest>;
    Failed: RealtimeErrorResponseAction<TType, TRequest>;
    Response: RealtimeSuccessResponseAction<TType, TResponse, TRequest> | RealtimeErrorResponseAction<TType, TRequest>;
}