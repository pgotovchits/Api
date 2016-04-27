/**
 * Common payload types for invite realtime actions
 * These may be differ than API backend responses payloads, since API backend could contain additional information for
 * realtime update other website members
 *
 * Suffix request indicates what actions is coming from frontend
 * Suffix response indicates what action is being sent by backend to frontend
 * Suffix realtime indicates what action is being sent by backend to frontend for some realtime updates, not triggered by user request
 */

/**
 * Get invite information request
 */
export interface GetInviteInfoRequestPayload {
    /**
     * Invite code
     */
    code: string;
}

/**
 * Get invite information response
 */
export interface GetInviteInfoResponsePayload {
    /**
     * Website name which invite belongs to
     */
    name: string;
}
