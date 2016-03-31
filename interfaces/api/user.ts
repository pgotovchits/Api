/**
 * Response from API GET /user
 */
export interface APIUserInfo {
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
    /**
     * User websites
     */
    websites: Array<{ id: number, name: string }>;
}