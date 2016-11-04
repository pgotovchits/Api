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
    meta?: any;
}

/**
 * Type guard
 */
export function isBaseAction<TType, TPayload>(action: any): action is BaseAction<TType, TPayload> {
    return (typeof action === "object" && typeof action.type !== "undefined");
}