import { gql } from 'apollo-boost';

export const SET_TEST = gql`
  mutation setTest {
    setTest @client
  }
`;
