import { gql } from 'apollo-boost';

export const UPDATE_MOD = gql`
  mutation addMod($serverID: String!, $serverName: String!, $modName: String!) {
    addMod(serverID: $serverID, serverName: $serverName, modName: $modName) {
      serverID
      serverName
      modName
    }
  }
`;
