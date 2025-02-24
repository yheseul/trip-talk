import { useState } from "react";
import { IPagination } from "../types/Pagination.type";
import { useCurrentPageStore } from "../stores/useCurrentPageStore";

export default function usePagination(props: IPagination) {
  const [startPage, setStartPage] = useState(1);
  const { setCurrentPage } = useCurrentPageStore();

  const onClickPage = (page: number) => () => {
    setCurrentPage(page);
    props.refetch({ page });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      alert("first page");
    } else {
      setStartPage(startPage - 10);
      props.refetch({ page: startPage - 10 });
    }
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= props.lastPage) {
      setStartPage(startPage + 10);
      props.refetch({ page: startPage + 10 });
    } else alert("last page");
  };

  return {
    startPage,
    onClickPage,
    onClickPrevPage,
    onClickNextPage,
  };
}
