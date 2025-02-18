import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import usePagination from "../../commons/hooks/usePagination";
import { IPagination } from "../../types/components.type";

export default function Pagination(props: IPagination) {
  const {
    startPage,
    onClickPage,
    onClickPrevPage,
    onClickNextPage,
    currentPage,
  } = usePagination(props);

  return (
    <div className="flex items-center justify-center gap-2 py-2 text-lg cursor-pointer">
      <span onClick={onClickPrevPage}>
        <LeftOutlined />
      </span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <span
              key={index + startPage}
              onClick={onClickPage(index + 1)}
              style={{
                color: index + startPage === currentPage ? "red" : "black",
              }}
            >
              {index + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>
        <RightOutlined />
      </span>
    </div>
  );
}
