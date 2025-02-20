import Button from "../../Button/components/Button";
import useBoardsDetail from "../hooks/useBoardsDetail";
import LikeAndDisLikeButton from "../../DisLikeButton";
import Youtube from "../../Youtube";
import Divider from "../../Divider";
import {
  EnvironmentOutlined,
  LinkOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

import Contents from "../../Contents";
import CreatedAt from "../../CreatedAt";
import Title from "../../Title";
import BoardsDetailImage from "./BoardsDetailImage";

export default function BoardsDetail() {
  const { boardId, boardData } = useBoardsDetail();
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6 px-6">
      <Title>{boardData?.title}</Title>
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex items-center gap-1 text-xl">
            <UserOutlined />
            <p>{boardData?.writer}</p>
          </div>
          <div className="flex items-center justify-end gap-2 text-sm font-normal text-grayMuted">
            <CreatedAt createdAt={boardData?.createdAt || undefined} />
          </div>
        </div>
        <Divider />
        <div className="flex justify-end gap-2 text-xl">
          <LinkOutlined />
          <EnvironmentOutlined />
        </div>
      </div>
      <BoardsDetailImage images={boardData?.images || undefined} />
      <Contents contents={boardData?.contents} />
      <Youtube youtubeUrl={boardData?.youtubeUrl || undefined} />
      <div className="flex items-center justify-center gap-6">
        <LikeAndDisLikeButton isLike={false} />
        <LikeAndDisLikeButton isLike={true} />
      </div>
      <div className="flex items-center justify-center gap-6">
        <Button
          color="white"
          id="list"
          onClick={() => router.push("/boards")}
        />
        <Button
          color="white"
          id="edit"
          onClick={() => router.push(`${boardId}/edit`)}
        />
      </div>
    </div>
  );
}
