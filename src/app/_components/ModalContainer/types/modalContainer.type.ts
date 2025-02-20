import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IModalContainer {
  isSwitched: boolean;
  children: ReactNode;
  isPrompt: boolean;
  alertMessage: ReactNode;
  setUserPassword?: Dispatch<SetStateAction<string>> | undefined;
}
