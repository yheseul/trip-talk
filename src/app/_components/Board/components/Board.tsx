import { DeleteOutlined } from "@ant-design/icons";
import { IBoardList } from "../types/board.type";
import useBoardsList from "../hooks/useBoardList";
import useHover from "../../../../commons/hooks/useHover";

export default function Board(props: IBoardList) {
  const { onClickBoard, onCLickDelete } = useBoardsList(props.id ?? "");
  const { isHovered, handleMouseOver, handleMouseOut } = useHover();

  return (
    <li
      className="relative flex items-center self-stretch gap-2 px-6 py-3 text-sm font-light text-center border border-solid rounded-lg cursor-pointer text-ellipsis border-offWhite"
      onClick={onClickBoard}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <span className="w-16 overflow-hidden text-mediumGray">
        {props.number}
      </span>
      <span className="flex-1 overflow-hidden font-medium text-start text-charcoal">
        {props.title}
      </span>
      <span className="w-32 text-darkGray">{props.writer}</span>
      <span className="w-32 text-mediumGray">
        {props.createdAt.slice(0, 10).replaceAll("-", ".")}
      </span>
      {isHovered && (
        <button className="absolute right-2 top-2.5" onClick={onCLickDelete}>
          <DeleteOutlined />
        </button>
      )}
    </li>
  );
}
