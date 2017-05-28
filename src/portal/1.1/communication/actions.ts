import { ActionDescriptor, ServerRealtimeAction } from "../../../common/realtimeAction";
import {
    ANSWER_CHAT,
    END_CHAT,
    REALTIME_CHAT_ANSWERED,
    REALTIME_CHAT_CANCELED,
    REALTIME_CHAT_ENDED,
    REALTIME_CHAT_UPDATED,
    REALTIME_CREATE_CHAT,
    REALTIME_POSTSCRIPTUM_ADDED,
    UPDATE_CHAT,
} from "../../constants/communication";
import { CancellationType, ChatUpdateType, CommonCommunicationInfo } from "./interfaces";

/**
 * New chat payload
 */
export interface CreateChatRealtimePayload extends CommonCommunicationInfo {}

export type CreateChatServerAction = ServerRealtimeAction<typeof REALTIME_CREATE_CHAT, CreateChatRealtimePayload>;


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
     * Team id
     */
    teamId: number;
    /**
     * Cancellation reason
     */
    reason: CancellationType;
}

export type CancelChatServerAction = ServerRealtimeAction<typeof REALTIME_CHAT_CANCELED, ChatWasCanceledRealtimePayload>;


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
     * Team id
     */
    teamId: number;
}

export type EndChatAction = ActionDescriptor<typeof END_CHAT, EndChatRequestPayload, EndChatResponsePayload>;
export type EndChatServerAction = ServerRealtimeAction<typeof REALTIME_CHAT_ENDED, ChatWasEndedRealtimePayload>;


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
 * Chat has been answered realtime action. Being sent to other team members
 */
export interface ChatWasAnsweredRealtimePayload {
    /**
     * Chat uuid
     */
    id: string;
    /**
     * Team id
     */
    teamId: number;
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

export type AnswerChatAction = ActionDescriptor<typeof ANSWER_CHAT, AnswerChatRequestPayload, AnswerChatResponsePayload>;
export type AnswerChatServerAction = ServerRealtimeAction<typeof REALTIME_CHAT_ANSWERED, ChatWasAnsweredRealtimePayload>;

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
     * Team id which chat belongs to
     */
    teamId: number;
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

export type UpdateChatAction = ActionDescriptor<typeof UPDATE_CHAT, UpdateChatRequestPayload, UpdateChatResponsePayload>;

export type UpdateChatServerAction = ServerRealtimeAction<typeof REALTIME_CHAT_UPDATED, ChatWasUpdatedRealtimePayload>;
    

export interface AddPostscriptumMessageRealtimePayload {
    /**
     * Communication uuid
     */
    uuid: string;
    /**
     * Postscriptum message
     */
    message: string;
    /**
     * Will be true if communication should be un-notified
     */
    unNotified: boolean;
}

export type AddPostscriptumMessageServerAction = ServerRealtimeAction<typeof REALTIME_POSTSCRIPTUM_ADDED, AddPostscriptumMessageRealtimePayload>;

/**
 * All communication actions
 */
export type CommunicationActions =
    EndChatAction |
    AnswerChatAction |
    UpdateChatAction;
    
export type CommunicationServerActions =
    CreateChatServerAction |
    CancelChatServerAction |
    EndChatServerAction |
    AnswerChatServerAction |
    UpdateChatServerAction |
    AddPostscriptumMessageServerAction;