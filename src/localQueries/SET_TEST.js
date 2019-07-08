import { gql } from 'apollo-boost';

export const SET_TEST = gql`
  mutation setTest($test: String!) {
    setTest(test: $test) @client
  }
`;
