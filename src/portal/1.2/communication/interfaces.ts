import { VisitorInfoInterface } from "../visitor";
export type SocialProfileType = "facebook" | "googleplus" | "instagram" | "twitter";
export type ChatUpdateType = "message" | "typing";
export type CancellationType = "request" | "timeout" | "leave";

/**
 * Common stuff for all communications
 * 
 * @export
 * @interface CommonCommunicationInfo
 */
export interface CommonCommunicationInfo {
    /**
     * Communication UUID
     */
    id: string;
    /**
     * Team id
     */
    teamId: number;
    /**
     * Communication started time in UTC string
     */
    startTime: string;
    /**
     * Visitor information
     */
    visitor: VisitorInfoInterface;

    /**
     * Notified flag
     */
    notified: boolean;
}

/**
 * Incoming chat communication info
 */
export interface IncomingChatCommunicationInfo extends CommonCommunicationInfo {
    /**
     * Chat status
     */
    status: "incoming";
    /**
     * Incoming chat is non notified
     */
    notified: false;
}

/**
 * Active chat communication info
 */
export interface ActiveChatCommunicationInfo extends CommonCommunicationInfo {
    /**
     * Chat answered time
     */
    answeredTime: string;
    /**
     * Chat answered agent
     */
    agentId: number;
    /**
     * Chat status
     */
    status: "active";
    /**
     * Messages
     */
    messages: Array<{
        /**
         * Chat message text
         */
        message: string;
        /**
         * Message date as UTC string
         */
        date: string;
        /**
         * Chat message user type
         */
        userType: "visitor" | "agent";
        /**
         * User id. Number for agents, string for visitor
         */
        userId: number | string;
    }>;
    /**
     * Active chat is notified
     */
    notified: true;
}