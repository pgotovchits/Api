/**
 * Application Custom errors
 */

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
export class ApiError extends Error implements ApiErrorInterface {
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
    public error: Object;
    /**
     * Error string type
     */
    public type: string = "ApiError";

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
    }

    /**
     * Convert error to object represtantion
     */
    public toObject(): ApiErrorInterface {
        return {
            type: this.type,
            url: this.url,
            code: this.code,
            error: this.error,
            message: this.message
        }
    }
}

/**
 * Token error represent status code 401 or 400 and indicates that provided token is not valid.
 * Usually app should redirect to /login after it
 */
export class TokenError extends ApiError {
    public type: string = "TokenError";
}

/**
 * Validation error represents status code 422 and contains validation errors in error property
 */
export class ValidationError extends ApiError {
    public type: string = "ValidationError";
    constructor(url: string, error: Object) {
        super("Validation error", url, 422, error);
    }
}

export function isApiError(error): error is ApiError {
    return (error && error.type);
}

/**
 * Error factory. Needed to convert error objects from realtime client to propert error instances
 */
export function createFromObject(error: ApiErrorInterface | Error): Error | ApiError | ValidationError | TokenError {
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
                return new ValidationError(error.url, error.error);
            default:
                return new ApiError(error.message, error.url, error.code, error.error);
        }
    } else {
        return new Error(error.message);
    }
}