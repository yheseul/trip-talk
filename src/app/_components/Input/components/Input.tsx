import { INPUT_CHILDREN, PLACEHOLDERS } from "../../../../constants/constants";
import { IInputProps } from "../types/Input.type";

export default function Input({
  id,
  onChange,
  defaultValue,
  disabled,
  value,
  required,
  isLabel,
  errorMessage,
}: IInputProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      {isLabel && (
        <div className="flex items-start gap-1">
          <label className="text-base font-medium text-darkGray">
            {INPUT_CHILDREN[id]}
          </label>
          {required && (
            <b className="text-base font-medium text-lightCoral">*</b>
          )}
          {errorMessage && (
            <div className="pl-2 text-lightCoral">{errorMessage}</div>
          )}
        </div>
      )}
      <input
        className="w-full h-12 px-4 py-3 text-base font-normal bg-white border border-solid rounded-lg outline-none placeholder:text-slateGray border-softGray"
        id={id}
        type={id.toLowerCase().includes("password") ? "password" : "text"}
        placeholder={PLACEHOLDERS[id]}
        onChange={onChange}
        defaultValue={defaultValue}
        disabled={disabled}
        value={value}
      />
    </div>
  );
}
