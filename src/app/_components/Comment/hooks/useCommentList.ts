"use client";

import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { FetchBoardCommentsDocument } from "../../../../commons/graphql/graphql";

export default function useCommentList() {
  const params = useParams();
  const { data, fetchMore } = useQuery(FetchBoardCommentsDocument, {
    variables: {
      boardId: String(params.boardId),
    },
  });

  const onNext = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return { data, onNext };
}
