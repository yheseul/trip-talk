import { ChangeEvent } from "react";

export interface ITextArea {
  id: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  defaultValue?: string | undefined;
}