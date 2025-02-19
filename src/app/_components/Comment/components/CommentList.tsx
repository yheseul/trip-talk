import { COMMENT_FORM } from "../../../../constants/constants";
import Comment from "./Comment";
import InfiniteScroll from "react-infinite-scroll-component";
import useCommentList from "../hooks/useCommentList";

export default function CommentList() {
  const { data: dataCommentList, onNext } = useCommentList();
  const hasComments = dataCommentList?.fetchBoardComments;
  const countComments = dataCommentList?.fetchBoardComments.length;

  return (
    <div className="flex flex-col py-10">
      {countComments ? (
        <InfiniteScroll
          dataLength={countComments ?? 0}
          next={onNext}
          hasMore={true}
          loader={countComments <= 0 && <div>loading...</div>}
        >
          <div>
            <ul>
              {hasComments?.map((e, index: number) => (
                <Comment
                  key={e._id}
                  _id={e._id}
                  number={index + 1}
                  writer={String(e.writer)}
                  contents={e.contents}
                  createdAt={e.createdAt}
                  rating={e.rating}
                />
              ))}
            </ul>
          </div>
        </InfiniteScroll>
      ) : (
        <p className="text-sm font-normal text-center text-dimGray">
          {COMMENT_FORM.NO_COMMENTS}
        </p>
      )}
    </div>
  );
}
