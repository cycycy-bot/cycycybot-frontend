import { gql } from 'apollo-boost';

export const GET_MOD = gql`
    query mod($serverID: String) {
        mod(serverID: $serverID) {
            id
            modName
            serverName
            serverID
       }
    }
`;
