import { FailedKey, RequestKey, SuccessKey } from "../../common/realtimeAction";
import { AnalyticsActions } from "./analytics";
import { AuthActions, AuthServerActions } from "./auth";
import { CommunicationActions, CommunicationServerActions } from "./communication";
import { HistoryActions, HistoryServerActions } from "./history";
import { InviteActions, InviteServerActionos } from "./invite";
import { NoteActions, NoteServerActions } from "./note";
import { TeamActions, TeamInviteActions, TeamInviteServerActions, TeamMemberActions, TeamMembersServerActions, TeamServerActions } from "./team";
import { UserActions, UserServerActions } from "./user";

/**
 * All realtime actions
 */
export type RealtimeActions =
    AnalyticsActions[RequestKey] |
    AnalyticsActions[SuccessKey] |
    AnalyticsActions[FailedKey] |

    AuthActions[RequestKey] |
    AuthActions[SuccessKey] |
    AuthActions[FailedKey] |
    AuthServerActions |

    CommunicationActions[RequestKey] |
    CommunicationActions[SuccessKey] |
    CommunicationActions[FailedKey] |
    CommunicationServerActions |

    HistoryActions[RequestKey] |
    HistoryActions[SuccessKey] |
    HistoryActions[FailedKey] |
    HistoryServerActions |

    InviteActions[RequestKey] |
    InviteActions[SuccessKey] |
    InviteActions[FailedKey] |
    InviteServerActionos |

    NoteActions[RequestKey] |
    NoteActions[SuccessKey] |
    NoteActions[FailedKey] |
    NoteServerActions |

    UserActions[RequestKey] |
    UserActions[SuccessKey] |
    UserActions[FailedKey] |
    UserServerActions |

    TeamActions[RequestKey] |
    TeamActions[SuccessKey] |
    TeamActions[FailedKey] |
    TeamServerActions |

    TeamInviteActions[RequestKey] |
    TeamInviteActions[SuccessKey] |
    TeamInviteActions[FailedKey] |
    TeamInviteServerActions |

    TeamMemberActions[RequestKey] |
    TeamMemberActions[SuccessKey] |
    TeamMemberActions[FailedKey] |
    TeamMembersServerActions;

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

/**
 * API version
 */
export const API_VERSION = 1.1;