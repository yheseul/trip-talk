import { Dispatch } from "react";

export interface IStarRating {
  defaultValue?: number;
  setRating?: Dispatch<React.SetStateAction<number>>;
  rating?: number;
}