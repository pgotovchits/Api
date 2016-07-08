import { VisitorInfoInterface } from "./visitor";
export type SocialProfileType = "facebook" | "googleplus" | "instagram" | "twitter";

export interface CommonCommunicationInfo {
    /**
     * Communication UUID
     */
    id: string;
    /**
     * Website id
     */
    websiteId: number;
    /**
     * Communication started time in UTC string
     */
    startTime: string;
    /**
     * Visitor information
     */
    visitor: VisitorInfoInterface;
}

/**
 * Create chat request
 */
export interface CreateChatRequestPayload {
    /**
     * Website code
     */
    code?: string;
    /**
     * User (visitor) email
     */
    email?: string;
    /**
     * User (visitor) name
     */
    name?: string;
    /**
     * URL page which visitor came from. Taken from referrer
     */
    page?: string;
}

/**
 * Create chat response
 */
export interface CreateChatResponsePayload {
    /**
     * Communication UUID
     */
    id: string;
    /**
     * Website name
     */
    websiteName: string;
    /**
     * Website id
     */
    websiteId: number;
}

/**
 * New chat payload
 */
export interface CreateChatRealtimePayload extends CommonCommunicationInfo {
}

export type CancellationType = "request" | "timeout" | "leave";

/**
 * Chat was canceled for some reason
 */
export interface ChatWasCanceledRealtimePayload {
    /**
     * Chat UUID
     */
    id: string;
    /**
     * Website id
     */
    websiteId: number;
    /**
     * Cancellation reason
     */
    reason: CancellationType;
}

/**
 * Explicit cancel chat request action
 */
export interface CancelChatRequestPayload {
    /**
     * Chat UUID
     */
    id: string;
}

export interface CancelChatResponsePayload {}


/**
 * Chat ended payload
 */
export interface ChatWasEndedRealtimePayload {
    /**
     * Chat UUID
     */
    id: string;
    /**
     * Website id
     */
    websiteId: number;
}

/**
 * Chat end request both for visitor & agent
 */
export interface EndChatRequestPayload {
    /**
     * Chat uuid
     */
    id: string;
}

/**
 * Chat end response
 */
export interface EndChatResponsePayload {}

/**
 * Answer chat request. Valid only for agent
 */
export interface AnswerChatRequestPayload {
    /**
     * Chat uuid
     */
    id: string;
}

/**
 * Answer chat response
 */
export interface AnswerChatResponsePayload {}

/**
 * Chat has been answered realtime action. Being sent to visitor and website side
 */
export interface ChatWasAnsweredRealtimePayload {
    /**
     * Chat uuid
     */
    id: string;
    /**
     * Website id
     */
    websiteId: number;
    /**
     * Answered agent id
     */
    agentId: number;
    /**
     * Agent first name
     */
    agentFirstName: string;
    /**
     * Agent last name
     */
    agentLastName: string;
}

export type ChatUpdateType = "message" | "typing";

/**
 * Action to update chat room: new message or typing indicator
 */
export interface UpdateChatRequestPayload {
    /**
     * Chat uuid
     */
    id: string;
    /**
     * Chat update type
     */
    type: ChatUpdateType;
    
    /**
     * Chat message. Could be omitted for typing type
     */
    message?: string;
    
    /**
     * Typing indicator
     */
    typing?: boolean;
}

/**
 * Chat update response
 */
export interface UpdateChatResponsePayload {}

/**
 * Chat was updated
 */
export interface ChatWasUpdatedRealtimePayload extends UpdateChatRequestPayload {
    /**
     * Website id which chat belongs to
     */
    websiteId: number;
    /**
     * User type for update action
     */
    userType: "visitor" | "agent";
    /**
     * User id. Number for agents, string for visitor
     */
    userId: number | string;
    
    /**
     * Action date in UTC string format
     */
    date: string;
}

/**
 * Create message request
 */
export interface CreateMessageRequestPayload {
    /**
     * Website code
     */
    code: string;
    /**
     * Message
     */
    message: string;
    /**
     * User (visitor) email
     */
    email?: string;
    /**
     * User (visitor) name
     */
    name?: string;
    /**
     * URL page which visitor came from. Taken from referrer
     */
    page?: string;
}

/**
 * Create message response
 */
export interface CreateMessageResponsePayload {}

/**
 * Message was created realtime payload
 */
export interface CreateMessageRealtimePayload extends CommonCommunicationInfo {
    /**
     * Message text
     */
    message: string;
}
