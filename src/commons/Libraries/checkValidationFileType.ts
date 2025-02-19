import { ICheckValidationFile } from "../../types/components.type";

export default function checkValidationFileType(
  file: ICheckValidationFile,
  fileType: string
) {
  return !file.type.includes(fileType);
}
