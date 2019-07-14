import { gql } from 'apollo-boost';

export const DEL_MOD = gql`
  mutation delMod($serverID: String!) {
    delMod(serverID: $serverID) {
      serverID
      serverName
    }
  }
`;
