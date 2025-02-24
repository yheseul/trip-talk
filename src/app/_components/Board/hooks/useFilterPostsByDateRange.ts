import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { IBoardList } from "../types/board.type";
import {
  FetchBoardsCountDocument,
  FetchBoardsDocument,
} from "../../../../commons/graphql/graphql";
import { useDateRangeStore } from "../../../../commons/stores/useDateRangeStore";
import { useCurrentPageStore } from "../../Pagination/stores/useCurrentPageStore";

export default function useFilterPostsByDateRange() {
  const { dateRange } = useDateRangeStore();
  const { currentPage } = useCurrentPageStore();

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery(
    FetchBoardsCountDocument
  );

  const { refetch: refetchBoards } = useQuery(FetchBoardsDocument);

  const [filteredData, setFilteredData] = useState<IBoardList[]>([]);
  const isDateRange = dateRange[0] === null && dateRange[1] === null;

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  useEffect(() => {
    const fetchFilteredData = async () => {
      const { data: boardsData } = await refetchBoards({
        endDate: dateRange[1]?.toISOString(),
        startDate: dateRange[0]?.toISOString(),
        page: currentPage,
      });

      await refetchBoardsCount({
        endDate: dateRange[1]?.toISOString(),
        startDate: dateRange[0]?.toISOString(),
      });

      setFilteredData(boardsData?.fetchBoards || []);
    };

    if (!isDateRange) {
      fetchFilteredData();
    }
  }, [dateRange, currentPage, refetchBoards, refetchBoardsCount, isDateRange]);

  return { lastPage, isDateRange, filteredData, currentPage };
}
