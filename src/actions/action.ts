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
    error?: boolean;
    /**
     * Action meta
     */
    meta?: {};
}

/**
 * Base action with error payload
 * 
 * @export
 * @interface BaseErrorAction
 * @extends {BaseAction<TType, Error>}
 * @template TType
 */
export interface BaseErrorAction<TType> extends BaseAction<TType, Error> {
    /**
     * Error flag
     * 
     * @type null
     * @memberOf BaseErrorAction
     */
    error: true;
}

/**
 * Type guard
 */
export function isBaseAction<TType, TPayload>(action: any): action is BaseAction<TType, TPayload> {
    return (typeof action === "object" && typeof action.type !== "undefined");
}