import { gql } from 'apollo-boost';

export const DISABLE_LOGGER = gql`
  mutation disableLogger($serverID: String!, $isEnabled: String!) {
    disableLogger(serverID: $serverID, isEnabled: $isEnabled) {
      serverID
      isEnabled
    }
  }
`;
