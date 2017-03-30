/**
 * Basic user information interface
 */
export interface BasicUserInformation {
    /**
     * User id
     */
    id: number;
    /**
     * User email
     */
    email: string;
    /**
     * User first name
     */
    firstName: string;
    /**
     * User last name
     */
    lastName: string;
}

export interface FullUserInformation extends BasicUserInformation {
    /**
     * User settings
     */
    settings: object;
}