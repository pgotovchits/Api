import { RealtimeErrorResponseAction, RealtimeRequestAction, RealtimeSuccessResponseAction, ServerRealtimeAction } from "../realtimeAction";
import {
    HISTORY_GET_CHAT,
    HISTORY_GET_CHATS,
} from "./constants";
import { REALTIME_WAS_CLAIMED, REALTIME_WAS_NOTIFIED, REALTIME_WAS_UNNOTIFIED, SET_CLAIMED, SET_NOTIFIED } from "./constants";
import { ChatHistoryCommunicationInfo } from "./interfaces";

/**
 * Common history communication request
 */
export interface ChatHistoryCommunicationRequest {
    /**
     * Page number
     */
    page: number;
    /**
     * Page size
     */
    pageSize: number;
    /**
     * Filter by team id
     */
    teamId?: number;
    /**
     * Start date filter
     */
    startTime?: string;
    /**
     * End date filter
     */
    endTime?: string;
    /**
     * Chat status
     */
    status: "missed" | "answered";
}

/**
 * Get chat history request
 */
export interface GetChatsRequestPayload extends ChatHistoryCommunicationRequest {}

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


export interface SetNotifiedRequestPayload {
    /**
     * Array of communication uuids/teamIds to be set notified
     */
    comms: Array<{ uuid: string, teamId: number }>;
}

export interface SetNotifiedResponsePayload { }

export interface SetNotifiedRealtimePayload extends SetNotifiedRequestPayload { }

export type SetNotifiedRequestAction = RealtimeRequestAction<typeof SET_NOTIFIED, SetNotifiedRequestPayload>;
export type SetNotifiedSuccessAction = RealtimeSuccessResponseAction<typeof SET_NOTIFIED, SetNotifiedResponsePayload, SetNotifiedRequestPayload>;
export type SetNotifiedFailedAction = RealtimeErrorResponseAction<typeof SET_NOTIFIED, SetNotifiedRequestPayload>;
export type SetNotifiedServerAction = ServerRealtimeAction<typeof REALTIME_WAS_NOTIFIED, SetNotifiedRealtimePayload>;

export type SetNotifiedActions =
    SetNotifiedRequestAction |
    SetNotifiedSuccessAction |
    SetNotifiedFailedAction;
    
export interface SetUnnotifiedRealtimePayload {
    /**
     * Array of communication uuids/teamIds to be set unnotified
     */
    comms: Array<{ uuid: string, teamId: number }>;
}

export type SetUnnotifiedServerAction = ServerRealtimeAction<typeof REALTIME_WAS_UNNOTIFIED, SetUnnotifiedRealtimePayload>;

export interface SetClaimedRequestPayload {
    uuid: string;
    teamId: number;
}

export interface SetClaimedResponsePayload {
}

export type SetClaimedRequestAction = RealtimeRequestAction<typeof SET_CLAIMED, SetClaimedRequestPayload>;
export type SetClaimedSuccessAction = RealtimeSuccessResponseAction<typeof SET_CLAIMED, SetClaimedResponsePayload, SetClaimedRequestPayload>;
export type SetClaimedFailedAction = RealtimeErrorResponseAction<typeof SET_CLAIMED, SetClaimedRequestPayload>;

export type SetClaimedActions =
    SetClaimedRequestAction |
    SetClaimedSuccessAction |
    SetClaimedFailedAction;


export interface CommunicationClaimedRealtimePayload {
    /**
     * Communication uuid
     */
    uuid: string;
    /**
     * Agent id which claimed communication
     */
    agentId: number;
    /**
     * True if communication also notified
     */
    notifiedNow: boolean;
}

export type CommunicationClaimedServerAction = ServerRealtimeAction<typeof REALTIME_WAS_CLAIMED, CommunicationClaimedRealtimePayload>;

export type HistoryActions =
    GetChatsActions |
    GetChatFullActions |
    SetNotifiedActions |
    SetNotifiedServerAction |
    SetUnnotifiedServerAction |
    SetClaimedActions |
    CommunicationClaimedServerAction;