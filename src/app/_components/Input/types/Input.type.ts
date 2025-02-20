import { ChangeEventHandler } from "react";

export interface IInputProps {
  id: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
  disabled?: boolean;
  value?: string;
  required: boolean;
  isLabel?: boolean;
  errorMessage?: string;
}