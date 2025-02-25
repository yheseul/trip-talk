"use client";

import { useQuery } from "@apollo/client";
import { FetchBoardsDocument } from "../../commons/graphql/graphql";
import Pagination from "../_components/Pagination/components/Pagination";
import FilterBar from "../_components/FilterBar";
import useFilterBoards from "../_components/Board/hooks/useFilterBoards";
import BoardsList from "../_components/Board/components/BoardsList";

export default function Boards() {
  const { data, refetch } = useQuery(FetchBoardsDocument);
  const { lastPage, isDateRange, filteredData, onClickFilter } =
    useFilterBoards();

  return (
    <div className="flex flex-col w-full py-2">
      <div className="flex flex-col gap-2">
        <FilterBar onClickFilter={onClickFilter} />
        <BoardsList
          data={data}
          isDateRange={isDateRange}
          filteredData={filteredData}
        />
      </div>
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  );
}
