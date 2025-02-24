import { DeleteOutlined } from "@ant-design/icons";
import { IBoardList } from "../types/board.type";
import useBoardsList from "../hooks/useBoardList";
import useHover from "../../../../commons/hooks/useHover";

export default function Board(props: IBoardList) {
  const { onClickBoard, onCLickDelete } = useBoardsList(props.id ?? "");
  const { isHovered, handleMouseOver, handleMouseOut } = useHover();

  return (
    <li
      className="relative flex items-center justify-start w-full gap-2 px-1 py-3 text-sm font-light text-center border border-solid rounded-lg cursor-pointer border-offWhite"
      onClick={onClickBoard}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <span className="px-3 overflow-hidden text-mediumGray">
        {props.number}
      </span>
      <span className="flex-1 w-3/6 pl-3 overflow-hidden font-medium text-start text-charcoal text-ellipsis whitespace-nowrap">
        {props.title}
      </span>
      <span className="w-1/6 overflow-hidden text-darkGray text-ellipsis whitespace-nowrap">
        {props.writer}
      </span>
      <span className="px-3 text-mediumGray">
        {props.createdAt.slice(0, 10).replaceAll("-", ".")}
      </span>
      {isHovered && (
        <button className="absolute right-2 top-3" onClick={onCLickDelete}>
          <DeleteOutlined />
        </button>
      )}
    </li>
  );
}
