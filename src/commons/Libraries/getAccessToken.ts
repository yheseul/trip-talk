import { GraphQLClient } from "graphql-request";
import { RestoreAccessTokenDocument } from "../graphql/graphql";

type RestoreAccessTokenResponse = {
  restoreAccessToken: {
    accessToken: string;
  };
};

export const getAccessToken = async () => {
  try {
    const graphQLClient = new GraphQLClient(
      process.env.NEXT_PUBLIC_GRAPHQL_API_URL ?? "",
      { credentials: "include" }
    );
    const result = await graphQLClient.request<RestoreAccessTokenResponse>(
      RestoreAccessTokenDocument
    );
    const newAccessToken = result?.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
