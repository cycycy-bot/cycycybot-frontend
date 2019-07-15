import { gql } from 'apollo-boost';

export const GET_COMMANDS = gql`
    query customcommands($serverID: String!) {
        customcommands(serverID: $serverID) {
          serverID
          serverName
          commandRes
          commandName
          id
       }
    }
`;
