import ExtendableError from "./ExtendableError";
/**
 * Application Custom errors
 */

export interface RealtimeErrorInterface {
    /**
     * Error message
     */
    message: string;
    /**
     * Action produced error
     */
    action: string;
}

export class RealtimeError extends ExtendableError implements RealtimeErrorInterface {
    /**
     * Error message
     */
    public message: string;
    /**
     * Action produced error
     */
    public action: string;
    /**
     * Error name
     * 
     * @type {string}
     * @memberOf RealtimeError
     */
    public name: string = "RealtimeError";

    /**
     * @constructor
     * @param message
     * @param action
     */
    public constructor(message: string, action: string) {
        super(message);
        this.message = message;
        this.action = action;
        if (typeof (Error as any).captureStackTrace === "function") {
            (Error as any).captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error()).stack;
        }
    }

    /**
     * Convert error to object
     */
    public toObject(): RealtimeErrorInterface {
        return {
            action: this.action,
            message: this.message
        };
    }
}


/**
 * Error object interface
 */
export interface ApiErrorInterface {
    /**
     * HTTP Backend URL
     */
    url: string;
    /**
     * HTTP status code
     */
    code: number;
    /**
     * JSON error object
     */
    error?: Object;

    /**
     * Error string type
     */
    type: string;

    /**
     * Error message
     */
    message: string;
}

/**
 * Generic API error is base for other custom errors and represent unsuccessful HTTP api status code
 */
export class ApiError extends ExtendableError implements ApiErrorInterface {
    /**
     * Error message
     */
    public message: string;
    /**
     * HTTP Backend URL
     */
    public url: string;
    /**
     * HTTP status code
     */
    public code: number;
    /**
     * JSON error object
     */
    public error?: Object;
    /**
     * Error string type
     */
    public type: string = "ApiError";
    /**
     * Error name
     * 
     * @type {string}
     * @memberOf ApiError
     */
    public name: string = "ApiError";

    /**
     * @constructor
     */
    public constructor(message: string, url: string, code: number, error?: Object) {
        super(message);
        // super() doesn't assign message for some reason
        this.message = message;
        this.url = url;
        this.code = code;
        this.error = error;
        if (typeof (Error as any).captureStackTrace === "function") {
            (Error as any).captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error()).stack;
        }
    }

    /**
     * Convert error to object representation
     */
    public toObject(): ApiErrorInterface {
        return {
            type: this.type,
            url: this.url,
            code: this.code,
            error: this.error,
            message: this.message
        };
    }
}


/**
 * Token error represent status code 401 or 400 and indicates that provided token is not valid.
 * Usually app should redirect to /login after it
 */
export class TokenError extends ApiError {
    public type: string = "TokenError";
    public name: string = "TokenError";
}

/**
 * Validation error represents status code 422 and contains validation errors in error property
 */
export class ValidationError extends ApiError {
    public type: string = "ValidationError";
    public name: string = "ValidationError";
    public constructor(url: string, error: Object) {
        super("Validation error", url, 422, error);
    }
}

export function isApiError(error: any): error is ApiErrorInterface {
    return (error && error.type);
}

export function isRealtimeError(error: any): error is RealtimeErrorInterface {
    return (error && typeof error.action !== "undefined");
}

/**
 * Error factory. Needed to convert error objects from realtime client to proper error instances
 */
export function createFromObject(error?: RealtimeErrorInterface | ApiErrorInterface | Error): Error | RealtimeError | ApiError | ValidationError | TokenError {
    if (!error) {
        return new Error();
    }

    if (isApiError(error)) {
        switch (error.type) {
            case "ApiError":
                return new ApiError(error.message, error.url, error.code, error.error);
            case "TokenError":
                return new TokenError(error.message, error.url, error.code, error.error);
            case "ValidationError":
                return new ValidationError(error.url, error.error ? error.error : {});
            default:
                return new ApiError(error.message, error.url, error.code, error.error);
        }
    } else if (isRealtimeError(error)) {
        return new RealtimeError(error.message, error.action);
    } else {
        return new Error(error.message);
    }
}