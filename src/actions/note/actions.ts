import { RealtimeRequestAction, RealtimeErrorResponseAction, RealtimeSuccessResponseAction, ServerRealtimeAction } from "../realtimeAction";
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

export type CreateNoteRequestAction = RealtimeRequestAction<typeof CREATE_NOTE, CreateNoteRequestPayload>;
export type CreateNoteSuccessAction = RealtimeSuccessResponseAction<typeof CREATE_NOTE, CreateNoteResponsePayload, CreateNoteRequestPayload>;
export type CreateNoteFailedAction = RealtimeErrorResponseAction<typeof CREATE_NOTE, CreateNoteRequestPayload>;
export type CreateNoteServerAction = ServerRealtimeAction<typeof REALTIME_NOTE_CREATED, NoteWasCreatedRealtimePayload>;
export type CreateNoteActions =
    CreateNoteRequestAction |
    CreateNoteSuccessAction |
    CreateNoteFailedAction;

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

export type DeleteNoteRequestAction = RealtimeRequestAction<typeof DELETE_NOTE, DeleteNoteRequestPayload>;
export type DeleteNoteSuccessAction = RealtimeSuccessResponseAction<typeof DELETE_NOTE, DeleteNoteResponsePayload, DeleteNoteRequestPayload>;
export type DeleteNoteFailedAction = RealtimeErrorResponseAction<typeof DELETE_NOTE, DeleteNoteRequestPayload>;
export type DeleteNoteServerAction = ServerRealtimeAction<typeof REALTIME_NOTE_DELETED, NoteWasDeletedRealtimePayload>;
export type DeleteNoteActions =
    DeleteNoteRequestAction |
    DeleteNoteSuccessAction |
    DeleteNoteFailedAction;

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

export type ChangeNoteRequestAction = RealtimeRequestAction<typeof CHANGE_NOTE, ChangeNoteRequestPayload>;
export type ChangeNoteSuccessAction = RealtimeSuccessResponseAction<typeof CHANGE_NOTE, ChangeNoteResponsePayload, ChangeNoteRequestPayload>;
export type ChangeNoteFailedAction = RealtimeErrorResponseAction<typeof CHANGE_NOTE, ChangeNoteRequestPayload>;
export type ChangeNoteServerAction = ServerRealtimeAction<typeof REALTIME_NOTE_CHANGED, NoteWasChangedRealtimePayload>;
export type ChangeNoteActions =
    ChangeNoteRequestAction |
    ChangeNoteSuccessAction |
    ChangeNoteFailedAction;
    
    
export type NoteActions =
    CreateNoteActions |
    CreateNoteServerAction |
    DeleteNoteActions |
    DeleteNoteServerAction |
    ChangeNoteActions |
    ChangeNoteServerAction;