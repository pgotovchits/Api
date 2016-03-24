/**
 * Response from /auth/refreshToken endpoint
 */
export interface APIRefreshToken {
    /**
     * New user token
     */
    token: string;
}