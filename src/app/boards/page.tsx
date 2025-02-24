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
    <div className="flex flex-col w-full py-2">
      <div className="flex flex-col gap-2">
      <FilterBar />
      <div className="flex flex-col items-start self-stretch w-full px-3 gap-2 py-6 bg-white rounded-2xl shadow-[0px_0px_20px_0px_rgba(0,0,0,0.08)]">
        <div className="flex items-center self-stretch gap-2 px-1 py-4 text-base font-medium text-charcoal">
          <div className="flex items-center justify-center px-1">
            번호
          </div>
          <div className="flex items-center justify-start flex-1 w-3/6 pl-3">
            제목
          </div>
          <div className="flex items-center justify-center w-1/6 mr-8">작성자</div>
          <div className="flex items-center justify-center mr-9">날짜</div>
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
      </div>
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  );
}
