import { gql } from 'apollo-boost';

export const ADD_COMMAND = gql`
  mutation addCmd($serverID: String!, $serverName: String!, $commandName: String!, $commandRes: String!) {
    addCmd(serverID: $serverID, serverName: $serverName, commandName: $commandName, commandRes: $commandRes) {
      serverID
      serverName
      commandName
      commandRes
    }
  }
`;
