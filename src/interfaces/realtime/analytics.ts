/**
 * Fetch analytics request
 */
export interface GetAnalyticsRequestPayload {
    /**
     * Website id. Omitting it will fetch for all websites
     */
    websiteId?: number;
    /**
     * Days to fetch
     */
    days: number;
}

/**
 * Fetch analytics response
 */
export interface GetAnalyticsResponsePayload {
    /**
     * Each key is websiteId. Object keys in JS are always strings
     */
    [key: string]: {
        /**
         * Total number of chats
         */
        totalChats: number;
        /**
         * Total number of messages
         */
        totalMessages: number;
        /**
         * Total number of answered chats
         */
        totalAnsweredChats: number;
        /**
         * Total number of missed chats
         */
        totalMissedChats: number;
        /**
         * Total page views
         */
        totalPageViews: number;
        /**
         * Chat graph for period. Each key is day and number is total. Includes totals/missed chats
         */
        chatGraph: { [key: string]: number };
    };
}