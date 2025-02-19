import useCommentWrite from "../hooks/useCommentWrite";
import CommentForm from "./CommentForm";

export default function CommentWrite() {
  const {
    handleCommentSubmit,
    handleInputChange,
    disabledButton,
    comment,
    setRating,
  } = useCommentWrite();

  return (
    <CommentForm
      handleCommentSubmit={handleCommentSubmit}
      handleInputChange={handleInputChange}
      disabledButton={disabledButton}
      comment={comment}
      setRating={setRating}
    />
  );
}
