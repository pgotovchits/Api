/**
 * Base action
 */
export interface BaseAction<TType, TPayload> {
    /**
     * Action type
     */
    type: TType;
    /**
     * Action payload
     */
    payload: TPayload;
    /**
     * True if action is error
     */
    error: false;
    /**
     * Action meta
     */
    // meta?: any;
}

/**
 * Base action with error payload
 * 
 * @export
 * @interface BaseErrorAction
 * @extends {BaseAction<TType, Error>}
 * @template TType
 */
export interface BaseErrorAction<TType> {
    /**
     * Action type
     */
    type: TType;
    /**
     * Action payload
     */
    payload: Error;
    /**
     * Error flag
     * 
     * @type null
     * @memberOf BaseErrorAction
     */
    error: true;
    /**
     * Action meta
     * 
     * @type {any}
     * @memberOf BaseErrorAction
     */
    // meta?: any;
}

/**
 * Check if action is BaseAction
 * 
 * @export
 * @template TType
 * @template TPayload
 * @param {*} action
 * @returns {action is BaseAction<TType, TPayload>}
 */
export function isBaseAction<TType, TPayload>(action: any): action is BaseAction<TType, TPayload> {
    return (typeof action === "object" && typeof action.type !== "undefined" && !action.error);
}

/**
 * Check if action is BaseErrorAction
 * 
 * @export
 * @template TType
 * @param {*} action
 * @returns {action is BaseErrorAction<TType>}
 */
export function isBaseErrorAction<TType>(action: any): action is BaseErrorAction<TType> {
    return (typeof action === "object" && typeof action.type !== "undefined" && action.error);
}