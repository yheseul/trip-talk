import { MouseEventHandler } from "react";

export interface IButtonProps {
  id: string;
  disabled?: boolean;
  color: "blue" | "gray" | "white" | "black";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}
