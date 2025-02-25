import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { IBoardList } from "../types/board.type";
import {
  FetchBoardsCountDocument,
  FetchBoardsDocument,
} from "../../../../commons/graphql/graphql";
import { useDateRangeStore } from "../../../../commons/stores/useDateRangeStore";
import { useCurrentPageStore } from "../../Pagination/stores/useCurrentPageStore";
import { useSearchBarStore } from "../../../../commons/stores/useSearchBarStore";

export default function useFilterPostsByDateRange() {
  const { dateRange } = useDateRangeStore();
  const { currentPage } = useCurrentPageStore();
  const { searchBar } = useSearchBarStore();

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery(
    FetchBoardsCountDocument
  );

  const { refetch: refetchBoards } = useQuery(FetchBoardsDocument);

  const [filteredData, setFilteredData] = useState<IBoardList[]>([]);
  const isDateRange =
    dateRange[0] === null && dateRange[1] === null && searchBar === "";

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  useEffect(() => {
    const fetchFilteredData = async () => {
      const { data: boardsData } = await refetchBoards({
        endDate: dateRange[1]?.toISOString(),
        startDate: dateRange[0]?.toISOString(),
        page: currentPage,
        search: searchBar,
      });

      await refetchBoardsCount({
        endDate: dateRange[1]?.toISOString(),
        startDate: dateRange[0]?.toISOString(),
        search: searchBar || "",
      });

      setFilteredData(boardsData?.fetchBoards || []);
    };

    fetchFilteredData();
  }, [
    dateRange,
    currentPage,
    refetchBoards,
    refetchBoardsCount,
    isDateRange,
    searchBar,
  ]);

  return { lastPage, isDateRange, filteredData, currentPage };
}
