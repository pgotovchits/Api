import { CommonCommunicationInfo } from "./communication";
/**
 * Common history communication request
 */
interface HistoryCommunicationRequest {
    /**
     * Page number
     */
    page: number;
    /**
     * Page size
     */
    pageSize: number;
    /**
     * Filter by website id
     */
    websiteId?: number;
    /**
     * Start date filter
     */
    startDate?: string;
    /**
     * End date filter
     */
    endDate?: string;
}

/**
 * Communication note
 */
interface HistoryCommunicationNote {
    /**
     * Note text
     */
    noteText: string;
    /**
     * Created date
     */
    createdDate: string;
    /**
     * Agent id which created note
     */
    agentId: number;
}

interface HistoryCommunicationInfo extends CommonCommunicationInfo {
    /**
     * Agent id assigned to communication
     */
    agentId?: number;
    /**
     * Note if exists
     */
    note?: HistoryCommunicationNote;
}

/**
 * Chat message serialization interface
 */
interface ChatMessageInfo {
    /**
     * Message date in UTC string
     */
    date: string;
    /**
     * Message type
     */
        type: "agent" | "visitor";
    /**
     * Message itself
     */
    message: string;
    /**
     * Agent id for agent type
     */
    agentId?: number;
}

interface ChatHistoryCommunicationInfo extends HistoryCommunicationInfo {
    /**
     * Chat ends date
     */
    endDate?: string;
    /**
     * Chat answered date
     */
    answeredDate?: string;
    /**
     * Chat messages
     */
    messages: ChatMessageInfo[];
    /**
     * Chat status
     */
    status: "missed" | "answered";
}

interface MessageHistoryCommunicationInfo extends HistoryCommunicationInfo {
    /**
     * Message viewed date
     */
    viewedDate?: string;
    /**
     * Message text
     */
    message: string;
    /**
     * Message status
     */
    status: "viewed" | "created";
}

/**
 * Get chat history request
 */
export interface GetChatsRequestPayload extends HistoryCommunicationRequest {}

/**
 * Get chat history response
 */
export interface GetChatsResponsePayload {
    /**
     * Array of chats
     */
    [key: number]: ChatHistoryCommunicationInfo;
}

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

/**
 * Get messages history request
 */
export interface GetMessagesRequestPayload extends HistoryCommunicationRequest {}

/**
 * Get messages history response
 */
export interface GetMessagesResponsePayload {
    /**
     * Array of messages
     */
    [key: number]: MessageHistoryCommunicationInfo;
}

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
