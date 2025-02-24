import { IBoardList, IBoardListProps } from "../types/board.type";
import Board from "./Board";
import BoardsListTitle from "./BoardsListTitle";

export default function BoardsList({
  isDateRange,
  data,
  filteredData,
}: IBoardListProps) {
  return (
    <div className="flex flex-col items-start self-stretch w-full px-3 gap-2 py-6 bg-white rounded-2xl shadow-[0px_0px_20px_0px_rgba(0,0,0,0.08)]">
      <BoardsListTitle />
      <ul className="flex flex-col w-full gap-2">
        {isDateRange
          ? data?.fetchBoards.map((board: IBoardList, index: number) => (
              <Board
                key={board._id}
                id={board._id}
                number={index + 1}
                title={board.title}
                writer={board.writer as string}
                createdAt={board.createdAt}
              />
            ))
          : filteredData?.map((board: IBoardList, index: number) => (
              <Board
                key={board._id}
                id={board._id}
                number={index + 1}
                title={board.title}
                writer={board.writer as string}
                createdAt={board.createdAt}
              />
            ))}
      </ul>
    </div>
  );
}
