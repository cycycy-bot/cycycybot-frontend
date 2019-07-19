import { gql } from 'apollo-boost';

export const ADD_BANPHRASE = gql`
  mutation addBanPhrase($serverID: String!, $banphrase: String!) {
    addBanPhrase(serverID: $serverID, banphrase: $banphrase) {
      serverID
      banphrase
    }
  }
`;
