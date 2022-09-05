import { gql } from "@apollo/client";

export const ORDERS = gql`
  query Query($accountId: ID!) {
    orders(accountId: $accountId) {
      id
      tour {
        id
        name
        decs
        image
        quantity
      }
    }
  }
`;
