/**
 * Team role
 */
export type TeamRole = "owner" | "admin" | "agent";

export interface TeamCode {
    /**
     * Code
     */
    code: string;
    /**
     * Code type. Custom is user provided
     */
    type: "autogenerated" | "custom";
}

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
     * @deprecated Use codes instead
     */
    code: string;
    /**
     * Team codes
     */
    codes: TeamCode[];
    /**
     * Team role
     */
    role: TeamRole;
}