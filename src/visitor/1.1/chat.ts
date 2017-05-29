import { ActionDescriptor, ServerRealtimeAction } from "../../common/realtimeAction";
import { REALTIME_CHAT_ANSWERED, REALTIME_CHAT_CANCELED, REALTIME_CHAT_ENDED, REALTIME_CHAT_UPDATED, VISITOR_ADD_POSTSCRIPTUM, VISITOR_CANCEL_CHAT, VISITOR_CREATE_CHAT, VISITOR_END_CHAT, VISITOR_UPDATE_CHAT } from "../constants";

export interface VisitorCreateChatRequestPayload {
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
     * URL page which visitor came from. Usually this should be referrer page
     */
    page?: string;
}

export interface VisitorCreateChatResponsePayload {
    /**
     * Chat UUID
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

export type VisitorCreateChatAction = ActionDescriptor<typeof VISITOR_CREATE_CHAT, VisitorCreateChatRequestPayload, VisitorCreateChatResponsePayload>;


/**
 * Explicit cancel chat request action
 */
export interface VisitorCancelChatRequestPayload {
    /**
     * Chat UUID to cancel. Optional
     */
    id?: string;
}

export interface VisitorCancelChatResponsePayload {}

export type VisitorCancelChatAction = ActionDescriptor<typeof VISITOR_CANCEL_CHAT, VisitorCancelChatRequestPayload, VisitorCancelChatResponsePayload>;


export interface VisitorEndChatRequestPayload {
    /**
     * Chat uuid
     */
    id: string;
}

export interface VisitorEndChatResponsePayload {}

export type VisitorEndChatAction = ActionDescriptor<typeof VISITOR_END_CHAT, VisitorEndChatRequestPayload, VisitorEndChatResponsePayload>;


export interface VisitorUpdateChatRequestPayload {
    /**
     * Chat uuid
     */
    id: string;
    /**
     * Chat update type
     */
    type: "message" | "typing";
    
    /**
     * Chat message. Can be omitted for typing type
     */
    message?: string;
    
    /**
     * Typing indicator. Can be omitted for message type
     */
    typing?: boolean;
}

/**
 * Chat update response
 */
export interface VisitorUpdateChatResponsePayload {}

export type VisitorUpdateChatAction = ActionDescriptor<typeof VISITOR_UPDATE_CHAT, VisitorUpdateChatRequestPayload, VisitorUpdateChatResponsePayload>;

export interface VisitorAddPostscriptumMessageRequestPayload {
    /**
     * Chat uuid
     */
    id: string;
    /**
     * Postscriptum message
     */
    message: string;
}

export interface VisitorAddPostscriptumMessageResponsePayload { }

export type VisitorAddPostscriptumMessageAction = ActionDescriptor<typeof VISITOR_ADD_POSTSCRIPTUM, VisitorAddPostscriptumMessageRequestPayload, VisitorAddPostscriptumMessageResponsePayload>;


export interface VisitorChatCanceledRealtimePayload {
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
    reason: "timeout";
}

export type VisitorChatCanceledAction = ServerRealtimeAction<typeof REALTIME_CHAT_CANCELED, VisitorChatCanceledRealtimePayload>;

export interface VisitorChatAnsweredRealtimePayload {
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

export type VisitorChatAnsweredAction = ServerRealtimeAction<typeof REALTIME_CHAT_ANSWERED, VisitorChatAnsweredRealtimePayload>;


export interface VisitorChatEndedRealtimePayload {
    /**
     * Chat UUID
     */
    id: string;
    /**
     * Team id
     */
    teamId: number;
}

export type VisitorChatEndedAction = ServerRealtimeAction<typeof REALTIME_CHAT_ENDED, VisitorChatEndedRealtimePayload>;

export interface VisitorChatUpdatedRealtimePayload extends VisitorUpdateChatRequestPayload {
    /**
     * Team id
     */
    teamId: number;
    /**
     * User type who updated the chat. Can be only agent
     */
    userType: "agent";
    /**
     * Agent id
     */
    userId: number;
    /**
     * Action date in UTC string format
     */
    date: string;
}

export type VisitorChatUpdatedAction = ServerRealtimeAction<typeof REALTIME_CHAT_UPDATED, VisitorChatUpdatedRealtimePayload>;

export type ChatActions =
    VisitorCreateChatAction |
    VisitorCancelChatAction |
    VisitorEndChatAction |
    VisitorUpdateChatAction |
    VisitorAddPostscriptumMessageAction;
    
export type ChatServerActions =
    VisitorChatCanceledAction |
    VisitorChatAnsweredAction |
    VisitorChatEndedAction |
    VisitorChatUpdatedAction;