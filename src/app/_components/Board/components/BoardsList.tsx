import { useQuery } from "@apollo/client";
import {
  FetchBoardsCountDocument,
  FetchBoardsDocument,
} from "../../../../commons/graphql/graphql";
import Pagination from "../../Pagination/components/Pagination";
import Board from "./Board";

export default function BoardsList() {
  const { data, loading, error, refetch } = useQuery(FetchBoardsDocument);
  if (loading) {
    //  skeleton
  }
  if (error) {
    // error
  }

  const { data: dataBoardsCount } = useQuery(FetchBoardsCountDocument);
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  return (
    <div>
      <div className="flex flex-col items-start gap-2 self-stretch w-full rounded-2xl bg-white py-6 px-12 min-w-[680px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.08)]">
        <div className="flex items-center self-stretch gap-2 px-6 py-4 text-base font-medium text-charcoal">
          <div className="flex w-16 items-center justify-center gap-2.5">
            번호
          </div>
          <div className="flex gap-2.5 items-center justify-start flex-1">
            제목
          </div>
          <div className="flex justify-center items-center gap-2.5 w-[100px]">
            작성자
          </div>
          <div className="flex justify-center items-center gap-2.5 w-[100px]">
            날짜
          </div>
        </div>
        <ul className="flex flex-col w-full gap-2">
          {data?.fetchBoards.map((board, index: number) => (
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
