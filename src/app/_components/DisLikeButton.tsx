import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";

const LikeAndDisLikeButton = ({ isLike }: { isLike: boolean }) => {
  return (
    <div>
      {isLike ? <LikeOutlined /> : <DislikeOutlined />}
      <p className={`text-${isLike ? "lightCoral" : "neutralGray"}`}>12</p>
    </div>
  );
};

export default LikeAndDisLikeButton;
