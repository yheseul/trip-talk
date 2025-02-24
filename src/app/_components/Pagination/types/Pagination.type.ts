import { ApolloQueryResult } from "@apollo/client";
import { FetchBoardsQuery } from "../../../../commons/graphql/graphql";

export interface IPagination {
  refetch: (variables?: {
    page: number;
  }) => Promise<ApolloQueryResult<FetchBoardsQuery>>;
  lastPage: number;
}
