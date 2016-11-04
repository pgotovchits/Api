import { RealtimeAction, RealtimeErrorResponse, RealtimeResponse, ServerRealtimeAction } from "../realtimeAction";
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
export type GetChatsResponse = RealtimeResponse<GetChatsResponsePayload> | RealtimeErrorResponse;

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
export type GetChatFullResponse = RealtimeResponse<GetChatFullResponsePayload> | RealtimeErrorResponse;

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
export type GetMessagesResponse = RealtimeResponse<GetMessagesResponsePayload> | RealtimeErrorResponse;

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
export type GetMessageFullResponse = RealtimeResponse<GetMessageFullResponsePayload> | RealtimeErrorResponse;


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