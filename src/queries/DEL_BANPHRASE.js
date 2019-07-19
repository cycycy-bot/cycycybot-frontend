import { gql } from 'apollo-boost';

export const DEL_BANPHRASE = gql`
  mutation delBanPhrase($serverID: String!, $banphrase: String!) {
    delBanPhrase(serverID: $serverID, banphrase: $banphrase) {
      serverID
      banphrase
    }
  }
`;
