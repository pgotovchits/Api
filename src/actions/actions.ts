import { AnalyticsActions } from "./analytics";
import { AuthActions } from "./auth";
import { CommunicationActions } from "./communication";
import { HistoryActions } from "./history";
import { InviteActions } from "./invite";
import { NoteActions } from "./note";
import { UserActions } from "./user";
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