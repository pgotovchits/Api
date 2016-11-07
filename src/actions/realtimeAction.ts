import { BaseErrorAction } from "../";
import { ApiErrorInterface, RealtimeErrorInterface } from "../utils/Errors";
import { BaseAction, isBaseAction } from "./action";

/**
 * Realtime action interface
 */
export interface RealtimeAction<TType, TPayload> extends BaseAction<TType, TPayload> {
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
         * Array of action types:
         * First is pending
         * Second is success
         * Third is failed
         *
         * If omitted then server will not send action updates
         */
        realtimeActionTypes?: [string, string, string];
        /**
         * Do not perform action propagation to other user connections
         */
        noPropagate?: boolean;
    };
}

/**
 * Raw response from action
 * 
 * @export
 * @interface RealtimeResponse
 * @template TPayload
 */
export interface RealtimeResponse<TPayload> {
    /**
     * Error flag
     * 
     * @type null
     * @memberOf RealtimeResponse
     */
    error: false;
    /**
     * Response payload
     * 
     * @type {TPayload}
     * @memberOf RealtimeResponse
     */
    payload: TPayload;
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
export interface RealtimeSuccessResponseAction<TType, TPayload> extends BaseAction<TType, TPayload> { }

/**
 * Realtime error response action
 * 
 * @export
 * @interface RealtimeErrorResponse
 */
export interface RealtimeErrorResponseAction<TType> extends BaseErrorAction<TType> {
}

/**
 * Serialized error response.
 * We can't send RealtimeErrorResponse from websockets directly, since the class type of error payload will be lost
 * Instead we'll recreate error payload on client side
 * 
 * @export
 * @interface SerializedRealtimeErrorResponse
 */
export interface SerializedRealtimeErrorResponse {
    /**
     * Error flag
     * 
     * @type null
     * @memberOf SerializedRealtimeErrorResponse
     */
    error: true;
    /**
     * Error payload converted to object
     * 
     * @type {(ApiErrorInterface | RealtimeErrorInterface)}
     * @memberOf SerializedRealtimeErrorResponse
     */
    payload: ApiErrorInterface | RealtimeErrorInterface;
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
 * Type guard
 * @param action
 */
export function isRealtimeAction<TType, TPayload>(action: any): action is RealtimeAction<TType, TPayload> {
    return (isBaseAction(action) && (typeof (action as any).meta !== "undefined") && ((action as any).meta as any).realtime);
}