import { FailedKey, RequestKey, SuccessKey } from "../../common/realtimeAction";
import { ChatActions, ChatServerActions } from "./chat";
import { VisitorConnectionAction } from "./connection";
import { TeamActions } from "./team";
import { VisitorTrackVisitAction } from "./tracking";


export type RealtimeActionDescriptors =
    ChatActions |
    TeamActions |
    VisitorTrackVisitAction;

export type RealtimeServerActions =
    ChatServerActions |
    VisitorConnectionAction;
    

export type RealtimeActions = RealtimeActionDescriptors[RequestKey] | RealtimeActionDescriptors[SuccessKey] | RealtimeActionDescriptors[FailedKey] | RealtimeServerActions;

/**
 * Visitor API version
 */
export const API_VERSION = 1.1;

export * from "./chat";
export * from "./team";
export * from "./tracking";
export * from "./connection";
export * from "../constants";