/**
 * Realtime action interface
 */

import { BaseAction, isBaseAction } from "./action";

/**
 * Action interface
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
    };
}

/**
 * Type guard
 */
export function isRealtimeAction<TPayload>(action: any): action is RealtimeAction<TPayload> {
    return (isBaseAction(action) && (typeof action.meta !== "undefined") && action.meta.realtime);
}