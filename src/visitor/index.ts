// Default export version - must be latest
export * from "./1.1";

/**
 * Socket.io Query options for visitor
 */
export interface VisitorConnectionOptions {
    /**
     * Ramble team code to connect to. Required
     */
    code: string;
    /**
     * Api version to use
     * @default Latest api version
     */
    apiVersion?: number;
    /**
     * Unique device id. Optional. Not used now
     */
    deviceId?: string;
    /**
     * Reconnection token to restore visitor connection after disconnect/page reload. Optional.
     * The token is being returned with VisitorConnectionServerAction immediately after connection
     * When provided valid reconnection token and visitor has any pending chat, it will be returned along
     * with VisitorConnectionServerAction.
     * Note: Visitor may reconnect only within 25 seconds interval. After this interval passed, the connection
     * will be treated as "new connection" regardless of reconnectionToken presence
     */
    reconnectionToken?: string;
}