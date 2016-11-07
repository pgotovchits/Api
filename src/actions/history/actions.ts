import { RealtimeAction, RealtimeErrorResponseAction, RealtimeSuccessResponseAction, ServerRealtimeAction } from "../realtimeAction";
import {
    HISTORY_GET_CHAT,
    HISTORY_GET_CHATS,
    HISTORY_GET_MESSAGE,
    HISTORY_GET_MESSAGES,
    REALTIME_MESSAGE_VIEWED
} from "./constants";
import { ChatHistoryCommunicationInfo, HistoryCommunicationRequest, MessageHistoryCommunicationInfo } from "./interfaces";

/**
 * Get chat history request
 */
export interface GetChatsRequestPayload extends HistoryCommunicationRequest {}

/**
 * Get chat history response
 */
export interface GetChatsResponsePayload {
    /**
     * Total number of chats
     */
    total: number;
    /**
     * Map of communication UUID -> chat info
     */
    chats: { [key: string]: ChatHistoryCommunicationInfo };
}

export type GetChatsAction = RealtimeAction<typeof HISTORY_GET_CHATS, GetChatsRequestPayload>;
export type GetChatsPending<T> = RealtimeAction<T, GetChatsRequestPayload>;
export type GetChatsSuccess<T> = RealtimeSuccessResponseAction<T, GetChatsResponsePayload>;
export type GetChatsFailed<T> = RealtimeErrorResponseAction<T>;

/**
 * Get full single chat information
 */
export interface GetChatFullRequestPayload {
    /**
     * Chat UUID
     */
    id: string;
}

/**
 * Get full single chat information response
 */
export interface GetChatFullResponsePayload extends ChatHistoryCommunicationInfo {}

export type GetChatFullAction = RealtimeAction<typeof HISTORY_GET_CHAT, GetChatFullRequestPayload>;
export type GetChatFullPending<T> = RealtimeAction<T, GetChatFullRequestPayload>;
export type GetChatFullSuccess<T> = RealtimeSuccessResponseAction<T, GetChatFullResponsePayload>;
export type GetChatFullFailed<T> = RealtimeErrorResponseAction<T>;

/**
 * Get messages history request
 */
export interface GetMessagesRequestPayload extends HistoryCommunicationRequest {}

/**
 * Get messages history response
 */
export interface GetMessagesResponsePayload {
    /**
     * Total number of messages
     */
    total: number;
    /**
     * Map of communication UUID -> message info
     */
    messages: { [key: string]: MessageHistoryCommunicationInfo };
}

export type GetMessagesAction = RealtimeAction<typeof HISTORY_GET_MESSAGES, GetMessagesRequestPayload>;
export type GetMessagesPending<T> = RealtimeAction<T, GetMessagesRequestPayload>;
export type GetMessagesSuccess<T> = RealtimeSuccessResponseAction<T, GetMessagesResponsePayload>;
export type GetMessagesFailed<T> = RealtimeErrorResponseAction<T>;

/**
 * Get single message full information
 */
export interface GetMessageFullRequestPayload {
    /**
     * Message UUID
     */
    id: string;
}

/**
 * Get single message full information response
 */
export interface GetMessageFullResponsePayload extends MessageHistoryCommunicationInfo {}

export type GetMessageFullAction = RealtimeAction<typeof HISTORY_GET_MESSAGE, GetMessageFullRequestPayload>;
export type GetMessageFullPending<T> = RealtimeAction<T, GetMessageFullRequestPayload>;
export type GetMessageFullSuccess<T> = RealtimeSuccessResponseAction<T, GetMessageFullResponsePayload>;
export type GetMessageFullFailed<T> = RealtimeErrorResponseAction<T>;


/**
 * Update message realtime payload
 */
export interface MessageWasViewedRealtimePayload {
    /**
     * Message id
     */
    id: string;
    /**
     * Agent id which viewed message
     */
    agentId: number;
}

export type MessageViewedServerAction = ServerRealtimeAction<typeof REALTIME_MESSAGE_VIEWED, MessageWasViewedRealtimePayload>;