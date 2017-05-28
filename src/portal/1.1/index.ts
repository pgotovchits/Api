import { FailedKey, RequestKey, SuccessKey } from "../../common/realtimeAction";
import { AnalyticsActions } from "./analytics";
import { AuthActions, AuthServerActions } from "./auth";
import { CommunicationActions, CommunicationServerActions } from "./communication";
import { HistoryActions, HistoryServerActions } from "./history";
import { InviteActions, InviteServerActionos } from "./invite";
import { NoteActions, NoteServerActions } from "./note";
import { TeamActions, TeamInviteActions, TeamInviteServerActions, TeamMemberActions, TeamMembersServerActions, TeamServerActions } from "./team";
import { UserActions, UserServerActions } from "./user";

    
export type RealtimeActionDescriptors =
    AnalyticsActions |
    AuthActions |
    CommunicationActions |
    HistoryActions |
    InviteActions |
    NoteActions |
    UserActions |
    TeamActions |
    TeamInviteActions |
    TeamMemberActions;

export type RealtimeServerActions =
    AuthServerActions |
    CommunicationServerActions |
    HistoryServerActions |
    NoteServerActions |
    UserServerActions |
    TeamServerActions |
    InviteServerActionos |
    TeamInviteServerActions |
    TeamMembersServerActions;

// All realtime actions to consume in reducers
export type RealtimeActions = RealtimeActionDescriptors[RequestKey] | RealtimeActionDescriptors[SuccessKey] | RealtimeActionDescriptors[FailedKey] | RealtimeServerActions;

// Action descriptors

export * from "./analytics";
export * from "./auth";
export * from "./communication";
export * from "./history";
export * from "./invite";
export * from "./note";
export * from "./user";
export * from "./team";
export * from "./visitor";

export * from "../constants";

/**
 * API version
 */
export const API_VERSION = 1.1;