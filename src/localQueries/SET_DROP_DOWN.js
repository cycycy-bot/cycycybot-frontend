import { gql } from 'apollo-boost';

export const SET_DROP_DOWN = gql`
  mutation setTest($isOpen: Boolean) {
    setDropDown(isOpen: $isOpen) @client
  }
`;
