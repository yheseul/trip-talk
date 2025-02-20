import { usePathname } from "next/navigation";
import { PLACEHOLDERS } from "../../../../constants/constants";
import { ITextArea } from "../types/textArea.type";

export default function TextArea({
  id,
  onChange,
  value,
  defaultValue,
}: ITextArea) {
  const path = usePathname();

  return (
    <textarea
      id={id}
      placeholder={String(PLACEHOLDERS[id])}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      className={`flex w-full px-4 py-3 bg-white border border-solid rounded-lg outline-none resize-none border-softGray h-36 placeholder:text-slateGray ${
        path === "/boards/new" && "h-[21rem]"
      }`}
    />
  );
}
