import { UserActions } from "./user";
import { NoteActions } from "./note";
import { InviteActions } from "./invite";
import { HistoryActions } from "./history";
import { CommunicationActions } from "./communication";
import { AuthActions } from "./auth";
import { AnalyticsActions } from "./analytics";
import { WebsiteActions, WebsiteInviteActions, WebsiteMemberActions } from "./website";

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
    WebsiteActions |
    WebsiteInviteActions |
    WebsiteMemberActions;