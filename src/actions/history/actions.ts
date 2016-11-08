import { RealtimeRequestAction, RealtimeErrorResponseAction, RealtimeSuccessResponseAction, ServerRealtimeAction } from "../realtimeAction";
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

export type GetChatsRequestAction = RealtimeRequestAction<typeof HISTORY_GET_CHATS, GetChatsRequestPayload>;
export type GetChatsSuccessAction = RealtimeSuccessResponseAction<typeof HISTORY_GET_CHATS, GetChatsResponsePayload, GetChatsRequestPayload>;
export type GetChatsFailedAction = RealtimeErrorResponseAction<typeof HISTORY_GET_CHATS, GetChatsRequestPayload>;
export type GetChatsActions =
    GetChatsRequestAction |
    GetChatsSuccessAction |
    GetChatsFailedAction;



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

export type GetChatFullRequestAction = RealtimeRequestAction<typeof HISTORY_GET_CHAT, GetChatFullRequestPayload>;
export type GetChatFullSuccessAction = RealtimeSuccessResponseAction<typeof HISTORY_GET_CHAT, GetChatFullResponsePayload, GetChatFullRequestPayload>;
export type GetChatFullFailedAction = RealtimeErrorResponseAction<typeof HISTORY_GET_CHAT, GetChatFullRequestPayload>;
export type GetChatFullActions =
    GetChatFullRequestAction |
    GetChatFullSuccessAction |
    GetChatFullFailedAction;

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

export type GetMessagesRequestAction = RealtimeRequestAction<typeof HISTORY_GET_MESSAGES, GetMessagesRequestPayload>;
export type GetMessagesSuccessAction = RealtimeSuccessResponseAction<typeof HISTORY_GET_MESSAGES, GetMessagesResponsePayload, GetMessagesRequestPayload>;
export type GetMessagesFailedAction = RealtimeErrorResponseAction<typeof HISTORY_GET_MESSAGES, GetMessagesRequestPayload>;
export type GetMessagesActions =
    GetMessagesRequestAction |
    GetMessagesSuccessAction |
    GetMessagesFailedAction;

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

export type GetMessageFullRequestAction = RealtimeRequestAction<typeof HISTORY_GET_MESSAGE, GetMessageFullRequestPayload>;
export type GetMessageFullSuccessAction = RealtimeSuccessResponseAction<typeof HISTORY_GET_MESSAGE, GetMessageFullResponsePayload, GetMessageFullRequestPayload>;
export type GetMessageFullFailedAction = RealtimeErrorResponseAction<typeof HISTORY_GET_MESSAGE, GetMessageFullRequestPayload>;
export type GetMessageFullActions =
    GetMessageFullRequestAction |
    GetMessageFullSuccessAction |
    GetMessageFullFailedAction;

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

export type HistoryActions =
    GetChatsActions |
    GetChatFullActions |
    GetMessagesActions |
    GetMessageFullActions |
    MessageViewedServerAction;