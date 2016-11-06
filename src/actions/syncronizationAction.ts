import { ApiErrorInterface, RealtimeErrorInterface } from "../utils/Errors";
import { BaseAction } from "./action";

/**
 * This action is being sent to other user connections for request
 * 
 * @export
 * @interface SyncronizationAction
 * @extends {BaseAction<TPayload>}
 * @template TPayload
 */
export interface SyncronizationAction<TType, TPayload> extends BaseAction<TType, TPayload> {
    meta: {
        /**
         * Current user id which is syncronizing
         * 
         * @type {number}
         */
        currentUserId: number;
    };
}

/**
 * This action is being sent to other user connections on successful response
 * 
 * @export
 * @interface SyncronizationResponseAction
 * @extends {SyncronizationAction<TResponsePayload>}
 * @template TOriginalPayload
 * @template TResponsePayload
 */
export interface SyncronizationResponseAction<TType, TOriginalPayload, TResponsePayload> extends SyncronizationAction<TType, TResponsePayload> {
    /**
     * Error flag
     * 
     * @type null
     * @memberOf SyncronizationResponseAction
     */
    error: false;
    /**
     * Original request payload
     * 
     * @type {TOriginalPayload}
     * @memberOf SyncronizationResponseAction
     */
    originalPayload: TOriginalPayload;
}

export interface SyncronizationErrorResponseAction<TType, TOriginalPayload> extends SyncronizationAction<TType, ApiErrorInterface | RealtimeErrorInterface> {
    /**
     * Error flag
     * 
     * @type null
     * @memberOf SyncronizationErrorResponseAction
     */
    error: true;
    /**
     * Original request payload
     * 
     * @type {TOriginalPayload}
     * @memberOf SyncronizationErrorResponseAction
     */
    originalPayload: TOriginalPayload;
}