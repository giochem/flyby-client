import { gql } from "@apollo/client";

export const TOURS = gql`
  query Query {
    tours {
      id
      name
      decs
      image
      quantity
      active
    }
  }
`;
