import useCommentEdit from "../hooks/useCommentEdit";
import { ICommentEdit } from "../types/comment.type";
import CommentForm from "./CommentForm";

export default function CommentEdit(commentData: ICommentEdit) {
  const { handleSubmitEdit, handleInputChange, disabledButton } =
  useCommentEdit(commentData);

  return (
    <CommentForm
      handleCommentSubmit={handleSubmitEdit}
      handleInputChange={handleInputChange}
      disabledButton={disabledButton}
      comment={commentData.commentData}
      isEdit={true}
    />
  );
}
