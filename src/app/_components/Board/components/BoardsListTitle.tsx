const BoardsListTitle = () => {
  return (
    <div className="flex items-center self-stretch gap-2 px-1 py-4 text-base font-medium text-charcoal">
      <div className="flex items-center justify-center px-1">번호</div>
      <div className="flex items-center justify-start flex-1 w-3/6 pl-3">
        제목
      </div>
      <div className="flex items-center justify-center w-1/6 mr-8">작성자</div>
      <div className="flex items-center justify-center mr-9">날짜</div>
    </div>
  );
};

export default BoardsListTitle;
