import { ActionDescriptor } from "../..";
import { VISITOR_TRACK_VISIT } from "../constants";

/**
 * Track visit request. Now is empty but may be expanded later
 */
export interface TrackVisitRequestPayload {
    /**
     * Visit page to track
     */
    visitPage?: string;
}

/**
 * Track visitor visit action. For now it's just increasing the counter of "Links clicked" in portal
 */
export type VisitorTrackVisitAction = ActionDescriptor<typeof VISITOR_TRACK_VISIT, TrackVisitRequestPayload, void>;