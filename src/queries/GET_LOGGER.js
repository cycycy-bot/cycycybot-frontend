import { gql } from 'apollo-boost';

export const GET_LOGGER = gql`
    query logger($serverID: String!) {
        logger(serverID: $serverID) {
            serverID
            serverName
            isEnabled
            logChannelID
            leaveQueueLimit
       }
    }
`;
