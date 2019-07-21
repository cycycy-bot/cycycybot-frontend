import { gql } from 'apollo-boost';

export const ENABLE_LOGGER = gql`
  mutation enableLogger(
    $serverID: String!,
    $serverName: String!,
    $logChannelID: String!,
    $isEnabled: String!,
    ) {
    enableLogger(
      serverID: $serverID, 
      serverName: $serverName,
      logChannelID: $logChannelID,
      isEnabled: $isEnabled,
      leaveQueueLimit: 0,
      ) {
      serverID
      serverName
      logChannelID,
      isEnabled,
    }
  }
`;
