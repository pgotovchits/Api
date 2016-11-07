import { ApiErrorInterface, RealtimeErrorInterface } from "../utils/Errors";
import { BaseAction } from "./action";

/**
 * Attributes specific to syncronization actions
 * 
 * @export
 * @interface SyncronizationMetaAttributes
 */
export interface SyncronizationMetaAttributes {
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
 * This action is being sent to other user connections for request
 * 
 * @export
 * @interface SyncronizationAction
 * @extends {BaseAction<TPayload>}
 * @template TPayload
 */
export interface SyncronizationAction<TType, TPayload> extends BaseAction<TType, TPayload>, SyncronizationMetaAttributes {
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

/**
 * This action is being sent to other user connections on failed response
 * NOTE: not inherting from BaseErrorAction/BaseAction since we need to discriminate by error property
 * 
 * @export
 * @interface SyncronizationErrorResponseAction
 * @extends {SyncronizationMetaAttributes}
 * @template TType
 * @template TOriginalPayload
 */
export interface SyncronizationErrorResponseAction<TType, TOriginalPayload> extends SyncronizationMetaAttributes {
    /**
     * Type
     * 
     * @type {TType}
     * @memberOf SyncronizationErrorResponseAction
     */
    type: TType;
    /**
     * Error flag
     * 
     * @type null
     * @memberOf SyncronizationErrorResponseAction
     */
    error: true;
    /**
     * Error payload
     * 
     * @type {(ApiErrorInterface | RealtimeErrorInterface)}
     * @memberOf SyncronizationErrorResponseAction
     */
    payload: ApiErrorInterface | RealtimeErrorInterface;
    /**
     * Original request payload
     * 
     * @type {TOriginalPayload}
     * @memberOf SyncronizationErrorResponseAction
     */
    originalPayload: TOriginalPayload;
}