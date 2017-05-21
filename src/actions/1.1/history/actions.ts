import { ActionDescriptor, ServerRealtimeAction } from "../../../common/realtimeAction";
import {
    HISTORY_GET_CHAT,
    HISTORY_GET_CHATS,
} from "./constants";
import { REALTIME_ARCHIVED_STATUS_CHANGED, REALTIME_WAS_CLAIMED, REALTIME_WAS_NOTIFIED, REALTIME_WAS_UNNOTIFIED, SET_ARCHIVED_STATUS, SET_CLAIMED, SET_NOTIFIED } from "./constants";
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
    /**
     * Filter by archived status
     */
    archived?: boolean;
    /**
     * Filter by notified status
     */
    notified?: boolean;
    /**
     * Include only communications with postscriptum message
     */
    withPostscriptumMessage?: true;
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

export type GetChatsAction = ActionDescriptor<typeof HISTORY_GET_CHATS, GetChatsRequestPayload, GetChatsResponsePayload>;


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

export type GetChatFullAction = ActionDescriptor<typeof HISTORY_GET_CHAT, GetChatFullRequestPayload, GetChatFullResponsePayload>;


export interface SetNotifiedRequestPayload {
    /**
     * Array of communication uuids/teamIds to be set notified
     */
    comms: Array<{ uuid: string, teamId: number }>;
}

export interface SetNotifiedResponsePayload { }


export type SetNotifiedAction = ActionDescriptor<typeof SET_NOTIFIED, SetNotifiedRequestPayload, SetNotifiedResponsePayload>;

export interface SetNotifiedRealtimePayload extends SetNotifiedRequestPayload { }
export type SetNotifiedServerAction = ServerRealtimeAction<typeof REALTIME_WAS_NOTIFIED, SetNotifiedRealtimePayload>;

export interface SetUnnotifiedRealtimePayload {
    /**
     * Array of communication uuids/teamIds to be set unnotified
     */
    comms: Array<{ uuid: string, teamId: number }>;
}

export type SetUnnotifiedServerAction = ServerRealtimeAction<typeof REALTIME_WAS_UNNOTIFIED, SetUnnotifiedRealtimePayload>;

/**
 * Set archive status request
 * 
 * @export
 */
export interface SetArchivedStatusRequestPayload {
    comms: Array<{ uuid: string, teamId: number }>;
    archived: boolean;
    requested: "answered" | "missed";
}

/**
 * Set archive status response
 * 
 * @export
 */
export interface SetArchivedStatusResponsePayload {

}

export type SetArchivedStatusAction = ActionDescriptor<typeof SET_ARCHIVED_STATUS, SetArchivedStatusRequestPayload, SetArchivedStatusResponsePayload>;

/**
 * Archive status was changed for comms
 * 
 * @export
 */
export interface SetArchivedStatusRealtimePayload extends SetArchivedStatusRequestPayload {
}

export type SetArchivedStatusServerAction = ServerRealtimeAction<typeof REALTIME_ARCHIVED_STATUS_CHANGED, SetArchivedStatusRealtimePayload>;


export interface SetClaimedRequestPayload {
    uuid: string;
    teamId: number;
}

export interface SetClaimedResponsePayload {
}

export type SetClaimedAction = ActionDescriptor<typeof SET_CLAIMED, SetClaimedRequestPayload, SetClaimedResponsePayload>;


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
    GetChatsAction |
    GetChatFullAction |
    SetNotifiedAction |
    SetClaimedAction |
    SetArchivedStatusAction;

export type HistoryServerActions =
    SetNotifiedServerAction |
    SetUnnotifiedServerAction |
    CommunicationClaimedServerAction |
    SetArchivedStatusServerAction;