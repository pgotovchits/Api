export type SocialProfileType = "facebook" | "googleplus" | "instagram" | "twitter";

export interface VisitorSocialProfileInterface {
    /**
     * Profile type
     */
    type: SocialProfileType;
    /**
     * Profile url
     */
    url: string;
}

export interface VisitorLocationInterface {
    /**
     * Country
     */
    country: string;
    /**
     * State
     */
    state: string;
    /**
     * City
     */
    city: string;
    /**
     * Latitude
     */
    lat: number;
    /**
     * Longitude
     */
    lon: number;
}

export interface VisitInfoInterface {
    /**
     * Visitor ip
     */
    ip: string;
    /**
     * Domain
     */
    domain: string;
    /**
     * Page
     */
    page: string;
    /**
     * OS name/family
     */
    os: string;
    /**
     * OS version
     */
    osVersion: string;
    /**
     * Browser name/family
     */
    browser: string;
    /**
     * Browser version
     */
    browserVersion: string;
}

/**
 * Basic visitor info
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
     * Visitor age
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


/**
 * Create chat request
 */
export interface CreateChatRequestPayload {
    /**
     * Website code
     */
    code: string;
    /**
     * User (visitor) email
     */
    email?: string;
    /**
     * User (visitor) name
     */
    name?: string;
}

/**
 * Create chat response
 */
export interface CreateChatResponsePayload {
    /**
     * Communication UUID
     */
    id: string;
    /**
     * Website name
     */
    websiteName: string;
    /**
     * Website id
     */
    websiteId: number;
}

/**
 * New chat payload
 */
export interface CreateChatRealtimePayload {
    /**
     * Chat UUID
     */
    id: string;
    /**
     * Website id
     */
    websiteId: number;
    /**
     * Chat started time in UTC string
     */
    startTime: string;
    /**
     * Visitor information
     */
    visitor: VisitorInfoInterface;
}

export type CancellationType = "request" | "timeout" | "leave";

/**
 * Chat was canceled for some reason
 */
export interface ChatWasCanceledRealtimePayload {
    /**
     * Chat UUID
     */
    id: string;
    /**
     * Website id
     */
    websiteId: number;
    /**
     * Cancellation reason
     */
    reason: CancellationType;
}

/**
 * Explicit cancel chat request action
 */
export interface CancelChatRequestPayload {
    /**
     * Chat UUID
     */
    id: string;
}

export interface CancelChatResponsePayload {}


/**
 * Chat ended payload
 */
export interface ChatWasEndedRealtimePayload {
    /**
     * Chat UUID
     */
    id: string;
    /**
     * Website id
     */
    websiteId: number;
}

/**
 * Chat end request both for visitor & agent
 */
export interface EndChatRequestPayload {
    /**
     * Chat uuid
     */
    id: string;
}

/**
 * Chat end response
 */
export interface EndChatResponsePayload {}

/**
 * Answer chat request. Valid only for agent
 */
export interface AnswerChatRequestPayload {
    /**
     * Chat uuid
     */
    id: string;
}

/**
 * Answer chat response
 */
export interface AnswerChatResponsePayload {}

/**
 * Chat has been answered realtime action. Being sent to visitor and website side
 */
export interface ChatWasAnsweredRealtimePayload {
    /**
     * Chat uuid
     */
    id: string;
    /**
     * Website id
     */
    websiteId: number;
    /**
     * Answered agent id
     */
    agentId: number;
    /**
     * Agent first name
     */
    agentFirstName: string;
    /**
     * Agent last name
     */
    agentLastName: string;
}

export type ChatUpdateType = "message" | "typing";

/**
 * Action to update chat room: new message or typing indicator
 */
export interface UpdateChatRequestPayload {
    /**
     * Chat uuid
     */
    id: string;
    /**
     * Chat update type
     */
    type: ChatUpdateType;
    
    /**
     * Chat message. Could be omitted for typing type
     */
    message?: string;
    
    /**
     * Typing indicator
     */
    typing?: boolean;
}

/**
 * Chat update response
 */
export interface UpdateChatResponsePayload {}

/**
 * Chat was updated
 */
export interface ChatWasUpdatedRealtimePayload extends UpdateChatRequestPayload {
    /**
     * Website id which chat belongs to
     */
    websiteId: number;
    /**
     * User type for update action
     */
    userType: "visitor" | "agent";
    /**
     * User id. Number for agents, string for visitor
     */
    userId: number | string;
    
    /**
     * Action date in UTC string format
     */
    date: string;
}