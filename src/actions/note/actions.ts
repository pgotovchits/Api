import { RealtimeAction, RealtimeErrorResponseAction, RealtimeSuccessResponseAction, ServerRealtimeAction } from "../realtimeAction";
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
export type CreateNoteServerAction = ServerRealtimeAction<typeof REALTIME_NOTE_CREATED, NoteWasCreatedRealtimePayload>;
export type CreateNotePending<T> = RealtimeAction<T, CreateNoteRequestPayload>;
export type CreateNoteSuccess<T> = RealtimeSuccessResponseAction<T, CreateNoteResponsePayload>;
export type CreateNoteFailed<T> = RealtimeErrorResponseAction<T>;

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
export type DeleteNoteServerAction = ServerRealtimeAction<typeof REALTIME_NOTE_DELETED, NoteWasDeletedRealtimePayload>;
export type DeleteNotePending<T> = RealtimeAction<T, DeleteNoteRequestPayload>;
export type DeleteNoteSuccess<T> = RealtimeSuccessResponseAction<T, DeleteNoteResponsePayload>;
export type DeleteNoteFailed<T> = RealtimeErrorResponseAction<T>;

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
export type ChangeNoteServerAction = ServerRealtimeAction<typeof REALTIME_NOTE_CHANGED, NoteWasChangedRealtimePayload>;
export type ChangeNotePending<T> = RealtimeAction<T, ChangeNoteRequestPayload>;
export type ChangeNoteSuccess<T> = RealtimeSuccessResponseAction<T, ChangeNoteResponsePayload>;
export type ChangeNoteFailed<T> = RealtimeErrorResponseAction<T>;