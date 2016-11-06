import { RealtimeAction, RealtimeErrorResponse, RealtimeResponse } from "../realtimeAction";
import { GET_ANALYTICS } from "./constants";
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
         * Chat graph for period. Each key is day of metric and value is object of metric
         */
        chatGraph: { [key: string]: {
            /**
             * Total chats
             */
            total: number;
            /**
             * Missed chats
             */
            missed: number;
            /**
             * Answered chats
             */
            answered: number;
        } };
    };
}

export type GetAnalyticsAction = RealtimeAction<typeof GET_ANALYTICS, GetAnalyticsRequestPayload>;
export type GetAnalyticsResponse = RealtimeResponse<GetAnalyticsResponsePayload> | RealtimeErrorResponse;