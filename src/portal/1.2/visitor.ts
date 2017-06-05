/**
 * Common visitor interfaces
 */

/**
 * Visitor social profile info
 */
export interface VisitorSocialProfileInterface {
    /**
     * Profile type
     */
    type: string;
    /**
     * Profile url
     */
    url: string;
}

/**
 * Visitor location info
 */
export interface VisitorLocationInterface {
    /**
     * Country
     */
    country: string;
    /**
     * Country code
     */
    countryCode: string;
    /**
     * State
     */
    state?: string;
    /**
     * City
     */
    city?: string;
    /**
     * Latitude
     */
    lat?: string;
    /**
     * Longitude
     */
    lon?: string;
}

/**
 * Visit info
 */
export interface VisitInfoInterface {
    /**
     * Visitor ip
     */
    ip?: string;
    /**
     * Domain
     */
    domain?: string;
    /**
     * Page
     */
    page?: string;
    /**
     * OS name/family
     */
    os?: string;
    /**
     * OS version
     */
    osVersion?: string;
    /**
     * Browser name/family
     */
    browser?: string;
    /**
     * Browser version
     */
    browserVersion?: string;
}

/**
 * Visitor info
 */
export interface VisitorInfoInterface {
    /**
     * Visitor name
     */
    name?: string;
    /**
     * Visitor email
     */
    email?: string;
    /**
     * Visitor sex
     */
    sex?: "male" | "female";
    /**
     * Visitor approximate age
     */
    age?: number;
    /**
     * Visitor profile image
     */
    profileImage?: string;
    /**
     * Visitor location
     */
    location?: VisitorLocationInterface;
    /**
     * Visit information (Populated from referrer)
     */
    visit?: VisitInfoInterface;
    /**
     * List of social profiles if any
     */
    socialProfiles?: VisitorSocialProfileInterface[];
}

