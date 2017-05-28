/**
 * User invite information
 */
export interface UserInviteInfo {
    /**
     * Invite code
     */
    code: string;
    /**
     * Linked team to this invite
     */
    teamId: number;
    /**
     * Team name
     */
    teamName: string;
}

/**
 * Invite information
 */
export interface TeamInviteInfo {
    /**
     * Invite code
     */
    code: string;
    /**
     * Invite email
     */
    email: string;
    /**
     * Linked team to this invite
     */
    teamId: number;
    /**
     * User id if invite was linked with existing user, otherwise undefined
     */
    userId?: number;
}