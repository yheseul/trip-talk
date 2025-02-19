import CommentEdit from "./CommentEdit";
import { ICommentList } from "../types/comment.type";
import useComment from "../hooks/useComment";
import CommentItem from "./CommentItem";

export default function Comment(props: ICommentList) {
  const { onClickEditComment, onClickDeleteComment, commentData, isEdit } =
    useComment(props);

  return (
    <li>
      {!isEdit ? (
        <CommentItem
          commentData={commentData}
          onClickEditComment={onClickEditComment}
          onClickDeleteComment={onClickDeleteComment}
        />
      ) : (
        <div className="flex flex-col w-full gap-2 py-10 border-b border-lightGray">
          <CommentEdit commentData={commentData} />
        </div>
      )}
    </li>
  );
}
