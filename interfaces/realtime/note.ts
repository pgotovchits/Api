/**
 * Communication note interfaces
 */

/**
 * Create note request
 */
export interface CreateNoteRequestPayload {
    /**
     * Communication id
     */
    communicationId: string;
    /**
     * Communication type
     */
    communicationType: "chat" | "message";
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
     * Communication type
     */
    communicationType: "chat" | "message";
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

/**
 * Delete note request
 */
export interface DeleteNoteRequestPayload {
    /**
     * Communication id
     */
    communicationId: string;
    /**
     * Communication type
     */
    communicationType: "chat" | "message";
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
     * Communication type
     */
    communicationType: "chat" | "message";
    /**
     * Agent id which deleted note
     */
    agentId: number;
    /**
     * Website id
     */
    websiteId: number;
}

/**
 * Change note request
 */
export interface ChangeNoteRequestPayload {
    /**
     * Communication id
     */
    communicationId: string;
    /**
     * Communication type
     */
    communicationType: "chat" | "message";
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
     * Communication type
     */
    communicationType: "chat" | "message";
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