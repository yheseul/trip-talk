import Image from "next/image";
import { ICustomImage } from "../types/carousel.type";

export default function SlideImage({ image, width, height }: ICustomImage) {
  return (
    <div className="w-full p-2.5">
      <Image
        src={`/webp/${image}.webp`}
        alt={image}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width,
          height,
        }}
      />
    </div>
  );
}
