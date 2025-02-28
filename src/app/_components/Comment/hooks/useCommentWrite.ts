import { useMutation } from "@apollo/client";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  CreateBoardCommentDocument,
  FetchBoardCommentsDocument,
} from "../../../../commons/graphql/graphql";
import { useParams } from "next/navigation";
import { ICommentList } from "../types/comment.type";

export default function useCommentWrite() {
  const [commentFormData, setCommentFormData] = useState<ICommentList>({
    writer: "",
    password: "",
    contents: "",
  });

  const [rating, setRating] = useState(0);

  const disabledButton = !(commentFormData.writer && commentFormData.password);
  const [createBoardComment] = useMutation(CreateBoardCommentDocument);
  const params = useParams();

  const comment = {
    writer: commentFormData.writer,
    password: commentFormData.password,
    contents: commentFormData.contents,
    rating: rating,
  };

  const resetInputValue = () => {
    setCommentFormData({
      writer: "",
      password: "",
      contents: "",
    });
    setRating(0);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newFormData = {
      ...commentFormData,
      [event.target.id]: event.target.value,
    };

    setCommentFormData(newFormData);
  };

  const handleCommentSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: commentFormData.writer,
            password: commentFormData.password,
            contents: commentFormData.contents,
            rating: rating,
          },
          boardId: params.boardId as string,
        },
        refetchQueries: [
          {
            query: FetchBoardCommentsDocument,
            variables: { boardId: String(params.boardId) },
          },
        ],
      });
      console.log(result);
      alert("댓글 등록 완료");
      resetInputValue();
    } catch (error) {
      console.error(error);
      alert("댓글 등록 안됨");
    }
  };

  return {
    handleCommentSubmit,
    handleInputChange,
    disabledButton,
    comment,
    setRating,
  };
}
