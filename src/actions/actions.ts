import { AnalyticsActions } from "./analytics";
import { AuthActions } from "./auth";
import { CommunicationActions } from "./communication";
import { HistoryActions } from "./history";
import { InviteActions } from "./invite";
import { NoteActions } from "./note";
import { TeamActions, TeamInviteActions, TeamMemberActions } from "./team";
import { UserActions } from "./user";

/**
 * All realtime actions
 */
export type RealtimeActions =
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