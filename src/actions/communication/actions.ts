import { RealtimeErrorResponseAction, RealtimeRequestAction, RealtimeSuccessResponseAction, ServerRealtimeAction } from "../realtimeAction";
import {
    ANSWER_CHAT,
    CANCEL_CHAT,
    CREATE_CHAT,
    END_CHAT,
    REALTIME_CHAT_ANSWERED,
    REALTIME_CHAT_CANCELED,
    REALTIME_CHAT_ENDED,
    REALTIME_CHAT_UPDATED,
    REALTIME_CREATE_CHAT,
    UPDATE_CHAT
} from "./constants";
import { ADD_POSTSCRIPTUM, REALTIME_POSTSCRIPTUM_ADDED } from "./constants";
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

export type CreateChatRequestAction = RealtimeRequestAction<typeof CREATE_CHAT, CreateChatRequestPayload>;
export type CreateChatSuccessAction = RealtimeSuccessResponseAction<typeof CREATE_CHAT, CreateChatResponsePayload, CreateChatRequestPayload>;
export type CreateChatFailedAction = RealtimeErrorResponseAction<typeof CREATE_CHAT, CreateChatRequestPayload>;
export type CreateChatServerAction = ServerRealtimeAction<typeof REALTIME_CREATE_CHAT, CreateChatRealtimePayload>;
export type CreateChatActions =
    CreateChatRequestAction |
    CreateChatSuccessAction |
    CreateChatFailedAction;



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

export type CancelChatRequestAction = RealtimeRequestAction<typeof CANCEL_CHAT, CancelChatRequestPayload | void>;
export type CancelChatSuccessAction = RealtimeSuccessResponseAction<typeof CANCEL_CHAT, CancelChatResponsePayload, CancelChatRequestPayload | void>;
export type CancelChatFailedAction = RealtimeErrorResponseAction<typeof CANCEL_CHAT, CancelChatRequestPayload | void>;
export type CancelChatServerAction = ServerRealtimeAction<typeof REALTIME_CHAT_CANCELED, ChatWasCanceledRealtimePayload>;
export type CancelChatActions =
    CancelChatRequestAction |
    CancelChatSuccessAction |
    CancelChatFailedAction;



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

export type EndChatRequestAction = RealtimeRequestAction<typeof END_CHAT, EndChatRequestPayload>;
export type EndChatSuccessAction = RealtimeSuccessResponseAction<typeof END_CHAT, EndChatResponsePayload, EndChatRequestPayload>;
export type EndChatFailedAction = RealtimeErrorResponseAction<typeof END_CHAT, EndChatRequestPayload>;
export type EndChatServerAction = ServerRealtimeAction<typeof REALTIME_CHAT_ENDED, ChatWasEndedRealtimePayload>;
export type EndChatActions =
    EndChatRequestAction |
    EndChatSuccessAction |
    EndChatFailedAction;



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

export type AnswerChatRequestAction = RealtimeRequestAction<typeof ANSWER_CHAT, AnswerChatRequestPayload>;
export type AnswerChatSuccessAction = RealtimeSuccessResponseAction<typeof ANSWER_CHAT, AnswerChatResponsePayload, AnswerChatRequestPayload>;
export type AnswerChatFailedAction = RealtimeErrorResponseAction<typeof ANSWER_CHAT, AnswerChatRequestPayload>;
export type AnswerChatServerAction = ServerRealtimeAction<typeof REALTIME_CHAT_ANSWERED, ChatWasAnsweredRealtimePayload>;
export type AnswerChatActions =
    AnswerChatRequestAction |
    AnswerChatSuccessAction |
    AnswerChatFailedAction;

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

export type UpdateChatRequestAction = RealtimeRequestAction<typeof UPDATE_CHAT, UpdateChatRequestPayload>;
export type UpdateChatSuccessAction = RealtimeSuccessResponseAction<typeof UPDATE_CHAT, UpdateChatResponsePayload, UpdateChatRequestPayload>;
export type UpdateChatFailedAction = RealtimeErrorResponseAction<typeof UPDATE_CHAT, UpdateChatRequestPayload>;
export type UpdateChatServerAction = ServerRealtimeAction<typeof REALTIME_CHAT_UPDATED, ChatWasUpdatedRealtimePayload>;
export type UpdateChatActions =
    UpdateChatRequestAction |
    UpdateChatSuccessAction |
    UpdateChatFailedAction;
    

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

export type AddPostscriptumMessageRequestAction = RealtimeRequestAction<typeof ADD_POSTSCRIPTUM, AddPostscriptumMessageRequestPayload>;
export type AddPostscriptumMessageSuccessAction = RealtimeSuccessResponseAction<typeof ADD_POSTSCRIPTUM, AddPostscriptumMessageResponsePayload, AddPostscriptumMessageRequestPayload>;
export type AddPostscriptumMessageFailedAction = RealtimeErrorResponseAction<typeof ADD_POSTSCRIPTUM, AddPostscriptumMessageRequestPayload>;
export type AddPostscriptumMessageServerAction = ServerRealtimeAction<typeof REALTIME_POSTSCRIPTUM_ADDED, AddPostscriptumMessageRealtimePayload>;

export type AddPostscriptumMessageActions =
    AddPostscriptumMessageRequestAction |
    AddPostscriptumMessageSuccessAction |
    AddPostscriptumMessageFailedAction;



    
/**
 * All communication actions
 */
export type CommunicationActions =
    CreateChatActions |
    CreateChatServerAction |
    CancelChatActions |
    CancelChatServerAction |
    EndChatActions |
    EndChatServerAction |
    AnswerChatActions |
    AnswerChatServerAction |
    UpdateChatActions |
    UpdateChatServerAction |
    AddPostscriptumMessageActions |
    AddPostscriptumMessageServerAction;