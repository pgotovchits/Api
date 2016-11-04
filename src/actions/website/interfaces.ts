/**
 * Website role
 */
export type WebsiteRole = "owner" | "admin" | "agent";

/**
 * Website role -> member mapping
 */
export interface WebsiteMemberInfo {
    /**
     * Website id
     */
    websiteId: number;
    /**
     * Member id
     */
    memberId: number;
    /**
     * Website role
     */
    role: WebsiteRole;
}

/**
 * Basic website information
 */
export interface UserWebsiteInfo {
    /**
     * Website id
     */
    id: number;
    /**
     * Website name
     */
    name: string;
    /**
     * Website code
     */
    code: string;
    /**
     * Website role
     */
    role: WebsiteRole;
}