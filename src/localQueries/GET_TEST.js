import { gql } from 'apollo-boost';

export const GET_TEST = gql`
  {
    test @client {
      isTest
    }
  }
`;
