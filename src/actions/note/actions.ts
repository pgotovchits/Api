import { RealtimeAction, RealtimeErrorResponse, RealtimeResponse, ServerRealtimeAction } from "../realtimeAction";
import {
    CHANGE_NOTE,
    CREATE_NOTE,
    DELETE_NOTE,
    REALTIME_NOTE_CHANGED,
    REALTIME_NOTE_CREATED,
    REALTIME_NOTE_DELETED
} from "./constants";

/**
 * Create note request
 */
export interface CreateNoteRequestPayload {
    /**
     * Communication id
     */
    communicationId: string;
    /**
     * Note text
     */
    noteText: string;
}

/**
 * Create note response
 */
export interface CreateNoteResponsePayload {
}

/**
 * Note was created by someone
 */
export interface NoteWasCreatedRealtimePayload {
    /**
     * Communication id
     */
    communicationId: string;
    /**
     * Note text
     */
    noteText: string;
    /**
     * Created date
     */
    createdDate: string;
    /**
     * Agent id which created note
     */
    agentId: number;
    /**
     * Website id
     */
    websiteId: number;
}

export type CreateNoteAction = RealtimeAction<typeof CREATE_NOTE, CreateNoteRequestPayload>;
export type CreateNoteResponse = RealtimeResponse<CreateNoteResponsePayload> | RealtimeErrorResponse;
export type CreateNoteServerAction = ServerRealtimeAction<typeof REALTIME_NOTE_CREATED, NoteWasCreatedRealtimePayload>;

/**
 * Delete note request
 */
export interface DeleteNoteRequestPayload {
    /**
     * Communication id
     */
    communicationId: string;
}

/**
 * Delete note response
 */
export interface DeleteNoteResponsePayload {

}

/**
 * Note was deleted by someone
 */
export interface NoteWasDeletedRealtimePayload {
    /**
     * Communication id
     */
    communicationId: string;
    /**
     * Agent id which deleted note
     */
    agentId: number;
    /**
     * Website id
     */
    websiteId: number;
}

export type DeleteNoteAction = RealtimeAction<typeof DELETE_NOTE, DeleteNoteRequestPayload>;
export type DeleteNoteResponse = RealtimeResponse<DeleteNoteResponsePayload> | RealtimeErrorResponse;
export type DeleteNoteServerAction = ServerRealtimeAction<typeof REALTIME_NOTE_DELETED, NoteWasDeletedRealtimePayload>;

/**
 * Change note request
 */
export interface ChangeNoteRequestPayload {
    /**
     * Communication id
     */
    communicationId: string;
    /**
     * New note text
     */
    newText: string;
}

/**
 * Change note response
 */
export interface ChangeNoteResponsePayload {

}

/**
 * Note was changed by someone
 */
export interface NoteWasChangedRealtimePayload {
    /**
     * Communication id
     */
    communicationId: string;
    /**
     * Agent id which changed note
     */
    agentId: number;
    /**
     * Website id
     */
    websiteId: number;
    /**
     * New note text
     */
    note: string;
}

export type ChangeNoteAction = RealtimeAction<typeof CHANGE_NOTE, ChangeNoteRequestPayload>;
export type ChangeNoteResponse = RealtimeResponse<ChangeNoteResponsePayload> | RealtimeErrorResponse;
export type ChangeNoteServerAction = ServerRealtimeAction<typeof REALTIME_NOTE_CHANGED, NoteWasChangedRealtimePayload>;