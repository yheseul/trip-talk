import useCommentEditForm from "../hooks/useCommentEditForm";
import { ICommentEdit } from "../types/comment.type";
import CommentForm from "./CommentForm";

export default function CommentEdit(commentData: ICommentEdit) {
  const { handleSubmitEdit, handleInputChange, disabledButton } =
    useCommentEditForm(commentData);

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
