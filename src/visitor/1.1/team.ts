import { ActionDescriptor } from "../../common/realtimeAction";
import { VISITOR_GET_TEAM_INFO } from "../constants";


export interface GetTeamInfoRequestPayload {
    /**
     * Team code
     */
    code: string;
}

export interface GetTeamInfoResponsePayload {
    /**
     * Team id
     */
    teamId: number;
    /**
     * Team name
     */
    teamName: string;
    
    /**
     * Available agents
     */
    agentsAvailable: Array<{
        /**
         * Agent id
         */
        id: number;
        /**
         * Agent first name
         */
        firstName: string;
        /**
         * Agent last name
         */
        lastName: string;
    }>;
}

export type VisitorGetTeamInfoAction = ActionDescriptor<typeof VISITOR_GET_TEAM_INFO, GetTeamInfoRequestPayload, GetTeamInfoResponsePayload>;

export type TeamActions = VisitorGetTeamInfoAction;