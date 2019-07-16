import { gql } from 'apollo-boost';

export const EDIT_COMMAND = gql`
  mutation editCmd($serverID: String!, $commandName: String!, $commandRes: String!) {
    editCmd(serverID: $serverID, commandName: $commandName, commandRes: $commandRes) {
      serverID
      serverName
      commandName
      commandRes
    }
  }
`;
