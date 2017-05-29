import { FailedKey, RequestKey, SuccessKey } from "../../common/realtimeAction";
import { ChatActions, ChatServerActions } from "./chat";
import { TeamActions } from "./team";


export type RealtimeActionDescriptors =
    ChatActions |
    TeamActions;

export type RealtimeServerActions =
    ChatServerActions;
    

export type RealtimeActions = RealtimeActionDescriptors[RequestKey] | RealtimeActionDescriptors[SuccessKey] | RealtimeActionDescriptors[FailedKey] | RealtimeServerActions;

/**
 * Visitor API version
 */
export const API_VERSION = 1.1;

export * from "./chat";
export * from "./team";
export * from "../constants";