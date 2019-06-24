import { gql } from 'apollo-boost';

const getModQuery = gql`
    query mod($serverID: String) {
        mod(serverID: $serverID) {
            id
            modName
            serverName
            serverID
       }
    }
`;

const getBanPhraseQuery = gql`
    query banphrase($serverID: String) {
        banphrases(serverID: $serverID) {
            id
            serverID
            banphrase
        }
    }
`;

export { 
    getModQuery,
    getBanPhraseQuery
};