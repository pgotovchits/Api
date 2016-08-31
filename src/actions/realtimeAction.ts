import { BaseAction, isBaseAction } from "./action";

/**
 * Realtime action interface
 */
export interface RealtimeAction<TPayload> extends BaseAction<TPayload> {
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
        realtime: boolean;
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
 * Realtime response
 */
export interface RealtimeResponse<TPayload> {
    /**
     * True if response is error response
     */
    error: boolean;
    
    /**
     * Response payload
     */
    payload: TPayload | Error;
}

/**
 * Realtime response action interface
 */
export interface RealtimeResponseAction<TRequestPayload, TResponsePayload> extends RealtimeAction<TResponsePayload> {
    /**
     * Original request payload. Being set by node for propagated actions or by client middleware
     */
    originalPayload: TRequestPayload;
}

/**
 * Type guard
 * @param action
 */
export function isRealtimeAction<TPayload>(action: any): action is RealtimeAction<TPayload> {
    return (isBaseAction(action) && (typeof action.meta !== "undefined") && action.meta.realtime);
}

/**
 * Type guard
 * @param action
 * @return {boolean|boolean}
 */
export function isRealtimeResponseAction<TRequestPayload, TResponsePayload>(action: any): action is RealtimeResponseAction<TRequestPayload, TResponsePayload> {
    return (isRealtimeAction(action) && typeof (action as any).originalPayload !== undefined);
}