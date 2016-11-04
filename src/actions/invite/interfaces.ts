/**
 * User invite information
 */
export interface UserInviteInfo {
    /**
     * Invite code
     */
    code: string;
    /**
     * Linked website to this invite
     */
    websiteId: number;
    /**
     * Website name
     */
    websiteName: string;
}

/**
 * Invite information
 */
export interface WebsiteInviteInfo {
    /**
     * Invite code
     */
    code: string;
    /**
     * Invite email
     */
    email: string;
    /**
     * Linked website to this invite
     */
    websiteId: number;
    /**
     * User id if invite was linked with existing user, otherwise undefined
     */
    userId?: number;
}