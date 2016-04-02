/**
 * Realtime response
 */
export interface RealtimeResponse<TPayload> {
    /**
     * True if response is error response
     */
    error: boolean;

    /**
     * Response payload
     */
    payload: TPayload | Error;
}