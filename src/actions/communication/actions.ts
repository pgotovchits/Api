import {
    ANSWER_CHAT,
    CANCEL_CHAT,
    CREATE_CHAT,
    CREATE_MESSAGE,
    END_CHAT,
    REALTIME_CHAT_ANSWERED,
    REALTIME_CHAT_CANCELED,
    REALTIME_CHAT_ENDED,
    REALTIME_CHAT_UPDATED,
    REALTIME_CREATE_CHAT,
    REALTIME_NEW_MESSAGE,
    UPDATE_CHAT
} from "./constants";
import { RealtimeAction, RealtimeErrorResponseAction, RealtimeSuccessResponseAction, ServerRealtimeAction } from "../realtimeAction";
import { CommonCommunicationInfo, CancellationType, ChatUpdateType } from "./interfaces";

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

export type CreateChatAction = RealtimeAction<typeof CREATE_CHAT, CreateChatRequestPayload>;
export type CreateChatServerAction = ServerRealtimeAction<typeof REALTIME_CREATE_CHAT, CreateChatRealtimePayload>;
export type CreateChatPending<T> = RealtimeAction<T, CreateChatRequestPayload>;
export type CreateChatSuccess<T> = RealtimeSuccessResponseAction<T, CreateChatResponsePayload>;
export type CreateChatFailed<T> = RealtimeErrorResponseAction<T>;



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

export type CancelChatAction = RealtimeAction<typeof CANCEL_CHAT, CancelChatRequestPayload | void>;
export type CancelChatServerAction = ServerRealtimeAction<typeof REALTIME_CHAT_CANCELED, ChatWasCanceledRealtimePayload>;
export type CancelChatPending<T> = RealtimeAction<T, CancelChatRequestPayload | void>;
export type CancelChatSuccess<T> = RealtimeSuccessResponseAction<T, CancelChatResponsePayload>;
export type CancelChatFailed<T> = RealtimeErrorResponseAction<T>;

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

export type EndChatAction = RealtimeAction<typeof END_CHAT, EndChatRequestPayload>;
export type EndChatServerAction = ServerRealtimeAction<typeof REALTIME_CHAT_ENDED, ChatWasEndedRealtimePayload>;
export type EndChatPending<T> = RealtimeAction<T, EndChatRequestPayload>;
export type EndChatSuccess<T> = RealtimeSuccessResponseAction<T, EndChatResponsePayload>;
export type EndChatFailed<T> = RealtimeErrorResponseAction<T>;

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

export type AnswerChatAction = RealtimeAction<typeof ANSWER_CHAT, AnswerChatRequestPayload>;
export type AnswerChatServerAction = ServerRealtimeAction<typeof REALTIME_CHAT_ANSWERED, ChatWasAnsweredRealtimePayload>;
export type AnswerChatPending<T> = RealtimeAction<T, AnswerChatRequestPayload>;
export type AnswerChatSuccess<T> = RealtimeSuccessResponseAction<T, AnswerChatResponsePayload>;
export type AnswerChatFailed<T> = RealtimeErrorResponseAction<T>;


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

export type UpdateChatAction = RealtimeAction<typeof UPDATE_CHAT, UpdateChatRequestPayload>;
export type UpdateChatServerAction = ServerRealtimeAction<typeof REALTIME_CHAT_UPDATED, ChatWasUpdatedRealtimePayload>;
export type UpdateChatPending<T> = RealtimeAction<T, UpdateChatRequestPayload>;
export type UpdateChatSuccess<T> = RealtimeSuccessResponseAction<T, UpdateChatResponsePayload>;
export type UpdateChatFailed<T> = RealtimeErrorResponseAction<T>;

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

export type CreateMessageAction = RealtimeAction<typeof CREATE_MESSAGE, CreateMessageRequestPayload>;
export type CreateMessageServerAction = ServerRealtimeAction<typeof REALTIME_NEW_MESSAGE, CreateMessageRealtimePayload>;
export type CreateMessagePending<T> = RealtimeAction<T, CreateMessageRequestPayload>;
export type CreateMessageSuccess<T> = RealtimeSuccessResponseAction<T, CreateMessageResponsePayload>;
export type CreateMessageFailed<T> = RealtimeErrorResponseAction<T>;