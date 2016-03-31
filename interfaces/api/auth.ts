/**
 * Base interface for all response containing token
 */
export interface APIToken {
    /**
     * New user token
     */
    token: string;
}

/**
 * Response from /auth/refreshToken endpoint
 */
export interface APIRefreshToken extends APIToken {
}

/**
 * Response from /auth/signup
 */
export interface APISignup extends APIToken {
}

/**
 * Response from /auth/login
 */
export interface APILogin extends APIToken {
    
}