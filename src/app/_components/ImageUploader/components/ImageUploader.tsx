
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import useHover from "../../../../commons/hooks/useHover";
import useImageUploader from "../hooks/useImageUploader";

export default function ImageUploader({ id }: { id: string }) {
  const { onClickImage, onCLickDelete, handleImageUpload, imageUrl, fileRef } =
    useImageUploader(id);

  const { isHovered, handleMouseOver, handleMouseOut } = useHover();

  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center w-40 h-40 gap-2 rounded-lg bg-softGray"
        onClick={onClickImage}
      >
        {!imageUrl && <PlusOutlined />}
        {imageUrl && (
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img className="w-40 h-40 rounded-lg" src={imageUrl} />
            {isHovered && (
              <button
                className="absolute top-1 right-1"
                onClick={onCLickDelete}
              >
                <DeleteOutlined />
              </button>
            )}
          </div>
        )}
        {!imageUrl && (
          <div className="text-base font-normal text-dimGray">
            클릭해서 사진 업로드
          </div>
        )}
      </div>
      <input
        className="hidden"
        type="file"
        onChange={handleImageUpload}
        ref={fileRef}
      />
    </>
  );
}
