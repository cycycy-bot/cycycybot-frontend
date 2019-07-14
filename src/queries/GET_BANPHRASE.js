import { gql } from 'apollo-boost';

export const GET_BANPHRASE = gql`
    query banphrase($serverID: String) {
        banphrases(serverID: $serverID) {
            id
            serverID
            banphrase
        }
    }
`;
