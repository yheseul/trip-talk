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
  const { data: dataBoardsCount } = useQuery(FetchBoardsCountDocument);
  const { refetch } = useQuery(FetchBoardsDocument);
  const { dateRange } = useDateRangeStore();
  const [filteredData, setFilteredData] = useState<IBoardList[]>([]);
  const { currentPage } = useCurrentPageStore();

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);
  const isDateRange = dateRange[0] === null && dateRange[1] === null;

  useEffect(() => {
    const fetchFilteredData = async () => {
      const { data } = await refetch({
        endDate: dateRange[1]?.toISOString(),
        startDate: dateRange[0]?.toISOString(),
        page: currentPage,
      });

      setFilteredData(data?.fetchBoards || []);
    };

    if (!isDateRange) {
      fetchFilteredData();
    }
  }, [dateRange, refetch, currentPage, isDateRange]);

  return { lastPage, isDateRange, filteredData, currentPage };
}
