import { FetchBoardQuery } from "../../../../commons/graphql/graphql";

export interface IBoardList {
  id?: string;
  number?: number;
  _id?: string;
  writer?: string | null;
  title: string;
  createdAt: string;
  youtubeUrl?: string | null;
}

export interface IBoardData {
  fetchBoards: IBoardList[];
}

export interface IBoardsWriteHook {
  isEdit: boolean;
  data?: FetchBoardQuery;
}

export interface IFormData {
  writer: string;
  password: string;
  title: string;
  contents: string;
  youtubeUrl: string;
  images: string[];
}

export interface IError {
  graphQLErrors: {
    message: string;
  };
}