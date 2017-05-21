import { ActionDescriptor, FailedKey, RealtimeErrorResponseAction, RealtimeRequestAction, RealtimeSuccessResponseAction, RequestKey, SuccessKey } from "../realtimeAction";
import { GET_ANALYTICS } from "./constants";
/**
 * Fetch analytics request
 */
export interface GetAnalyticsRequestPayload {
    /**
     * Team id. Omitting it will fetch for all teams
     */
    teamId?: number;
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
     * Each key is teamId. Object keys in JS are always strings
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

export type GetAnalyticsRequestAction = RealtimeRequestAction<typeof GET_ANALYTICS, GetAnalyticsRequestPayload>;
export type GetAnalyticsSuccessAction = RealtimeSuccessResponseAction<typeof GET_ANALYTICS, GetAnalyticsResponsePayload, GetAnalyticsRequestPayload>;
export type GetAnalyticsFailedAction = RealtimeErrorResponseAction<typeof GET_ANALYTICS, GetAnalyticsRequestPayload>;


export type GetAnalytics = ActionDescriptor<typeof GET_ANALYTICS, GetAnalyticsRequestPayload, GetAnalyticsResponsePayload>;
// export type GetAnalyticsActions = GetAnalyticsRequestAction | GetAnalyticsSuccessAction | GetAnalyticsFailedAction;
export type GetAnalyticsActions = GetAnalytics[RequestKey] | GetAnalytics[SuccessKey] | GetAnalytics[FailedKey];


/**
 * Common type for all analytics realtime actions
 */
export type AnalyticsActions = GetAnalyticsActions;