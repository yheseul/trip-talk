"use client";

import { useQuery } from "@apollo/client";
import styles from "./styles.module.css";
import { FetchBoardsDocument } from "../../commons/graphql/graphql";
import Pagination from "../_components/Pagination";
import FilterBar from "../_components/FilterBar";
import { IBoardList } from "../_components/Board/types/board.type";
import Board from "../_components/Board/components/Board";
import useFilterPostsByDateRange from "../_components/Board/hooks/useFilterPostsByDateRange";

export default function Boards() {
  const { data, loading, error, refetch } = useQuery(FetchBoardsDocument);
  const { lastPage, isDateRange, filteredData } = useFilterPostsByDateRange(data);

  if (loading) {
    //  skeleton
  }
  if (error) {
    // error
  }

  return (
    <div className="px-4">
      <FilterBar />
      <div className={styles.post_contain}>
        <div className={styles.boards_header}>
          <div className={styles.boards_header_number}>번호</div>
          <div className={styles.boards_header_title}>제목</div>
          <div className={styles.boards_header_writer}>작성자</div>
          <div className={styles.boards_header_createdAt}>날짜</div>
        </div>
        <ul className={styles.posts}>
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
