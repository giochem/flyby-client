import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($account: AccountInput!) {
    login(account: $account) {
      code
      success
      message
      token
    }
  }
`;

export const NEW_TOURIST = gql`
  mutation Mutation($account: AccountInput!) {
    newTourist(account: $account) {
      code
      success
      message
      token
    }
  }
`;
