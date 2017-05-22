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
    VISITOR_ADD_POSTSCRIPTUM,
    VISITOR_CANCEL_CHAT,
    VISITOR_CREATE_CHAT,
    VISITOR_END_CHAT
} from "./constants";
import { VISITOR_UPDATE_CHAT } from "./constants";
import { CancellationType, ChatUpdateType, CommonCommunicationInfo } from "./interfaces";

/**
 * Create chat request
 */
export interface CreateChatRequestPayload {
    /**
     * Team code
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
     * Team name
     */
    teamName: string;
    /**
     * Team id
     */
    teamId: number;
}

/**
 * New chat payload
 */
export interface CreateChatRealtimePayload extends CommonCommunicationInfo {
}

export type CreateChatAction = ActionDescriptor<typeof VISITOR_CREATE_CHAT, CreateChatRequestPayload, CreateChatResponsePayload>;
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

export type CancelChatAction = ActionDescriptor<typeof VISITOR_CANCEL_CHAT, CancelChatRequestPayload | undefined, CancelChatResponsePayload>;
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
export type VisitorEndChatAction = ActionDescriptor<typeof VISITOR_END_CHAT, EndChatRequestPayload, EndChatResponsePayload>;
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
 * Chat has been answered realtime action. Being sent to visitor and team side
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

export type VisitorUpdateChatAction = ActionDescriptor<typeof VISITOR_UPDATE_CHAT, UpdateChatRequestPayload, UpdateChatResponsePayload>;
export type UpdateChatServerAction = ServerRealtimeAction<typeof REALTIME_CHAT_UPDATED, ChatWasUpdatedRealtimePayload>;
    

export interface AddPostscriptumMessageRequestPayload {
    /**
     * Communication uuid
     */
    uuid: string;
    /**
     * Postscriptum message
     */
    message: string;
}

export interface AddPostscriptumMessageResponsePayload { }

export interface AddPostscriptumMessageRealtimePayload extends AddPostscriptumMessageRequestPayload {
    /**
     * Will be true if communication should be un-notified
     */
    unNotified: boolean;
}

export type AddPostscriptumMessageAction = ActionDescriptor<typeof VISITOR_ADD_POSTSCRIPTUM, AddPostscriptumMessageRequestPayload, AddPostscriptumMessageResponsePayload>;
export type AddPostscriptumMessageServerAction = ServerRealtimeAction<typeof REALTIME_POSTSCRIPTUM_ADDED, AddPostscriptumMessageRealtimePayload>;


    
/**
 * All communication actions
 */
export type CommunicationActions =
    CreateChatAction |
    CancelChatAction |
    EndChatAction |
    VisitorEndChatAction |
    AnswerChatAction |
    UpdateChatAction |
    VisitorUpdateChatAction |
    AddPostscriptumMessageAction;
    
export type CommunicationServerActions =
    CreateChatServerAction |
    CancelChatServerAction |
    EndChatServerAction |
    AnswerChatServerAction |
    UpdateChatServerAction |
    AddPostscriptumMessageServerAction;