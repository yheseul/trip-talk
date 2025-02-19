"use client";

import withLoginCheck from "../../../commons/auth/withLoginCheck";
import BoardsDetail from "../../_components/Board/components/BoardsDetail";
import CommentList from "../../_components/Comment/components/CommentList";
import CommentWrite from "../../_components/Comment/components/CommentWrite";

const BoardsDetailPage = () => {
  return (
    <>
      <BoardsDetail />
      <CommentWrite />
      <CommentList />
    </>
  );
};

export default withLoginCheck(BoardsDetailPage);
