"use client";

import { useQuery } from "@apollo/client";
import { FetchBoardsDocument } from "../../commons/graphql/graphql";
import Pagination from "../_components/Pagination/components/Pagination";
import FilterBar from "../_components/FilterBar";
import { IBoardList } from "../_components/Board/types/board.type";
import Board from "../_components/Board/components/Board";
import useFilterPostsByDateRange from "../_components/Board/hooks/useFilterPostsByDateRange";

export default function Boards() {
  const { data, loading, error, refetch } = useQuery(FetchBoardsDocument);
  const { lastPage, isDateRange, filteredData } =
    useFilterPostsByDateRange(data);

  if (loading) {
    //  skeleton
  }
  if (error) {
    // error
  }

  return (
    <div className="px-4">
      <FilterBar />
      <div className="flex flex-col items-start self-stretch w-full gap-2 px-12 py-6 bg-white rounded-2xl min-w-[680px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.08)]">
        <div className="flex items-center self-stretch gap-2 px-6 py-4 text-base font-medium text-charcoal">
          <div className="flex w-16 items-center justify-center gap-2.5">
            번호
          </div>
          <div className="flex gap-2.5 items-center justify-start flex-1">
            제목
          </div>
          <div className="flex justify-center items-center gap-2.5">작성자</div>
          <div className="flex justify-center items-center gap-2.5">날짜</div>
        </div>
        <ul className="flex flex-col w-full gap-2">
          {isDateRange
            ? data?.fetchBoards.map((board, index: number) => (
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
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  );
}
