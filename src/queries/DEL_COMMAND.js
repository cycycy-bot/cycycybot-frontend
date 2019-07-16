import { gql } from 'apollo-boost';

export const DEL_COMMAND = gql`
  mutation delCmd($serverID: String!, $commandName: String!) {
    delCmd(serverID: $serverID, commandName: $commandName) {
      serverID
      serverName
      commandName
    }
  }
`;
