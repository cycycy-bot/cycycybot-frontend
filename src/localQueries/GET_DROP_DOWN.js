import { gql } from 'apollo-boost';

export const GET_DROP_DOWN = gql`
  {
    dropDownOpen @client {
      isOpen
    }
  }
`;
