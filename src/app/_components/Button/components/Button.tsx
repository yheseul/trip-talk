import { BUTTON } from "../../../../constants/constants";
import { EditOutlined, MenuOutlined } from "@ant-design/icons";
import { IButtonProps } from "../types/button.type";

export default function Button({
  id,
  disabled,
  color,
  onClick,
  width,
}: IButtonProps) {
  const colorVariants = {
    blue: "bg-blue text-white",
    gray: "bg-gray text-white",
    white: "bg-white text-black border-black",
    black: "bg-black text-white",
  };

  return (
    <button
      id={id}
      type={id.includes("submit") ? "submit" : undefined}
      disabled={disabled}
      className={`h-12 py-3 px-4 gap-2 rounded-lg text-lg font-semibold flex items-center border-solid border justify-center ${colorVariants[color]}`}
      onClick={onClick}
      style={{ width: width }}
    >
      {BUTTON[id]}
      {id === "menu" ||
        (id === "edit" && <EditOutlined />) ||
        (id === "list" && <MenuOutlined />)}
    </button>
  );
}
