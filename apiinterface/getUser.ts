/**
 * Interface for JSON output from backend /user endpoint
 */
export interface APIUserInterface {
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