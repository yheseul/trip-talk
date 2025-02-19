import { Dispatch } from "react";

export interface ICommentList {
  writer: string;
  contents: string;
  createdAt?: string;
  number?: number;
  _id?: string;
  rating?: number;
  password?: string;
}

export interface ICommentEdit {
  commentData: ICommentList;
}

export interface ICommentFormProps {
  comment: ICommentList;
  handleCommentSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  disabledButton: boolean;
  isEdit?: boolean;
  setRating?: Dispatch<React.SetStateAction<number>>;
}

export interface ICommentItemProps {
  commentData: ICommentList;
  onClickEditComment: () => void;
  onClickDeleteComment: () => void;
}
