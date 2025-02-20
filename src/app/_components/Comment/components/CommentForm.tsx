import { CommentOutlined } from "@ant-design/icons";
import { ICommentFormProps } from "../types/comment.type";
import StarRating from "../../StarRating/components/StarRating";
import Input from "../../Input/components/Input";
import TextArea from "../../TextArea/components/TextArea";
import Button from "../../Button/components/Button";

const CommentForm = (props: ICommentFormProps) => {
  const {
    handleCommentSubmit,
    comment,
    handleInputChange,
    disabledButton,
    isEdit,
    setRating,
  } = props;
  return (
    <form
      className="flex flex-col items-start w-full gap-6 px-6 pt-10"
      onSubmit={handleCommentSubmit}
    >
      {!isEdit && (
        <div className="flex w-full gap-2 text-base font-semibold text-black">
          <CommentOutlined />
          <p>댓글</p>
        </div>
      )}
      <div className="flex w-full">
        <StarRating setRating={setRating} rating={comment.rating} />
      </div>
      <div className="flex flex-col w-full gap-2">
        <div className="flex gap-4 w-[640]">
          <Input
            id="writer"
            required={true}
            onChange={handleInputChange}
            value={comment.writer}
            isLabel={true}
          />
          <Input
            id="password"
            required={true}
            onChange={handleInputChange}
            value={comment.password}
            isLabel={true}
          />
        </div>
        <div className="w-full">
          <TextArea
            id="contents"
            onChange={handleInputChange}
            {...(isEdit
              ? { defaultValue: comment.contents }
              : { value: comment.contents })}
          />
        </div>
        <div className={`flex justify-end w-full ${isEdit && "gap-2"}`}>
          {isEdit && <Button id="cancel" color="white" />}
          <Button
            id="commit_submit"
            disabled={disabledButton}
            color={disabledButton ? "gray" : "blue"}
          />
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
