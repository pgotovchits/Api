import { CommonCommunicationInfo } from "../communication";


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
    /**
     * Additional message attached to chat
     */
    postscriptumMessage?: string;
}
