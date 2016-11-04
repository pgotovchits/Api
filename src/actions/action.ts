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
 * Simple map action payload. Doesn't strict payload type
 */
export interface KeyMapPayload {
    [key: string]: any;
}

/**
 * Type guard
 */
export function isBaseAction<TType, TPayload>(action: any): action is BaseAction<TType, TPayload> {
    return (typeof action === "object" && typeof action.type !== "undefined");
}

/**
 * True if action contains another payload (in case of failed/success response of realtime action)
 * @deprecated
 * @param action
 * @returns {boolean}
 */
export function hasOriginalPayload<TType, TPayload>(action: any): action is BaseAction<TType, TPayload> & { originalPayload: TPayload } {
    return (typeof action === "object" && typeof action.originalPayload !== "undefined");
}