import { ServerRealtimeAction } from "../../../common/realtimeAction";
import { VERSION_MISMATCH } from "../../constants/common";

export interface SetMismatchResponseRealtimePayload {
    /**
     * Last Server Version of API
     */
    latestApiServerVersion: number;
    /**
     * Requested Client Version of API
     */
    requestedApiVersion: number;
}
export declare type VersionMismatchAction = ServerRealtimeAction<typeof VERSION_MISMATCH, SetMismatchResponseRealtimePayload>;

export type CommonServerActions =
    VersionMismatchAction;