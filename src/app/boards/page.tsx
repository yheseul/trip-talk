"use client";

import { useQuery } from "@apollo/client";
import { FetchBoardsDocument } from "../../commons/graphql/graphql";
import Pagination from "../_components/Pagination/components/Pagination";
import FilterBar from "../_components/FilterBar";
import useFilterPostsByDateRange from "../_components/Board/hooks/useFilterPostsByDateRange";
import BoardsList from "../_components/Board/components/BoardsList";

export default function Boards() {
  const { data, refetch } = useQuery(FetchBoardsDocument);
  const { lastPage, isDateRange, filteredData } =
    useFilterPostsByDateRange();

  return (
    <div className="flex flex-col w-full py-2">
      <div className="flex flex-col gap-2">
        <FilterBar />
        <BoardsList
          data={data}
          isDateRange={isDateRange}
          filteredData={filteredData}
        />
      </div>
      <Pagination
        refetch={refetch}
        lastPage={lastPage}
      />
    </div>
  );
}
