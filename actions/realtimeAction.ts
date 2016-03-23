/**
 * Realtime action interface
 */

import {BaseAction, isBaseAction} from "./action";

/**
 * Action interface
 */
export interface RealtimeAction<TPayload> extends BaseAction<TPayload> {
    meta: {
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
    }
}

/**
 * Type guard
 */
export function isRealtimeAction<TPayload>(action: any): action is RealtimeAction<TPayload> {
    return (isBaseAction(action) && (typeof action.meta !== "undefined") && action.meta.realtime);
}