import StarRating from "../../StarRating/StarRating";
import CommentEdit from "./CommentEdit";
import { CloseOutlined, EditOutlined, UserOutlined } from "@ant-design/icons";
import CreatedAt from "../../CreatedAt";
import { ICommentList } from "../types/comment.type";
import useComment from "../hooks/useComment";

export default function Comment(props: ICommentList) {
  const { onClickEditComment, onClickDeleteComment, commentData, isEdit } =
    useComment(props);

  return (
    <li>
      {!isEdit ? (
        <div className="flex flex-col w-full gap-2 py-10 border-b border-lightGray">
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-2">
              <div className="flex items-center gap-1 text-sm font-light text-neutralGray">
                <UserOutlined />
                <span>{commentData.writer}</span>
              </div>
              <div className="flex gap-0">
                <StarRating defaultValue={commentData.rating} />
              </div>
            </div>
            <div className="flex gap-2">
              <EditOutlined
                className="cursor-pointer"
                onClick={onClickEditComment}
              />
              <CloseOutlined
                className="cursor-pointer"
                onClick={onClickDeleteComment}
              />
            </div>
          </div>
          <div>{commentData.contents}</div>
          <span className="text-sm font-normal text-grayMuted">
            <CreatedAt createdAt={commentData.createdAt ?? ""} />
          </span>
        </div>
      ) : (
        <div className="flex flex-col w-full gap-2 py-10 border-b border-lightGray">
          <CommentEdit commentData={commentData} />
        </div>
      )}
    </li>
  );
}
