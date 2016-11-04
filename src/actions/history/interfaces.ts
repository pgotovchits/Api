import { CommonCommunicationInfo } from "../communication";

/**
 * Common history communication request
 */
export interface HistoryCommunicationRequest {
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
    startTime?: string;
    /**
     * End date filter
     */
    endTime?: string;
}

/**
 * Communication note
 */
export interface HistoryCommunicationNote {
    /**
     * Note text
     */
    noteText: string;
    /**
     * Created date
     */
    createdTime: string;
    /**
     * Agent id which created note
     */
    agentId: number;
}

export interface HistoryCommunicationInfo extends CommonCommunicationInfo {
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
export interface ChatMessageInfo {
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

export interface ChatHistoryCommunicationInfo extends HistoryCommunicationInfo {
    /**
     * Chat ends date
     */
    endTime: string;
    /**
     * Chat answered date
     */
    answeredTime?: string;
    /**
     * Chat messages
     */
    messages: ChatMessageInfo[];
    /**
     * Chat status
     */
    status: "missed" | "answered";
}

export interface MessageHistoryCommunicationInfo extends HistoryCommunicationInfo {
    /**
     * Message viewed date
     */
    viewedTime?: string;
    /**
     * Message text
     */
    message: string;
    /**
     * Message status
     */
    status: "viewed" | "created";
}