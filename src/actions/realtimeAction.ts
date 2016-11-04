import { BaseAction, isBaseAction } from "./action";

/**
 * Realtime action interface
 */
export interface RealtimeAction<TType, TPayload> extends BaseAction<TType, TPayload> {
    meta: {
        /**
         * Current user id in application. Being set by middleware
         * NOTE: Not being transferred to node server
         */
        currentUserId?: number;
        /**
         * If true and was set then use authenticated route
         */
        authenticated?: boolean;
        /**
         * If true sends action to realtime server
         */
        realtime: true;
        /**
         * True if action is optimistic and should use optimistic ui updates
         */
        isOptimistic?: boolean;
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
 * Realtime success response
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
 * Realtime error response
 * 
 * @export
 * @interface RealtimeErrorResponse
 */
export interface RealtimeErrorResponse {
    /**
     * Error flag
     * 
     * @type {boolean}
     * @memberOf RealtimeErrorResponse
     */
    error: true;
    /**
     * Error object
     * 
     * @type {Error}
     * @memberOf RealtimeErrorResponse
     */
    payload: Error;
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
    return (isBaseAction(action) && (typeof action.meta !== "undefined") && action.meta.realtime);
}