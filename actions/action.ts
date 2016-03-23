/**
 * Base action
 */
export interface BaseAction<TPayload> {
    /**
     * Action type
     */
    type: string | number;
    /**
     * Action payload
     */
    payload?: TPayload;
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
export function isBaseAction<TPayload>(action: any): action is BaseAction<TPayload> {
    return (typeof action === "object" && typeof action.type !== "undefined");
}