/**
 * Team role
 */
export type TeamRole = "owner" | "admin" | "agent";

/**
 * Team role -> member mapping
 */
export interface TeamMemberInfo {
    /**
     * Team id
     */
    teamId: number;
    /**
     * Member id
     */
    memberId: number;
    /**
     * Team role
     */
    role: TeamRole;
}

/**
 * Basic team information
 */
export interface UserTeamInfo {
    /**
     * Team id
     */
    id: number;
    /**
     * Team name
     */
    name: string;
    /**
     * Team code
     */
    code: string;
    /**
     * Team role
     */
    role: TeamRole;
}