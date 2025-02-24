import Image from "next/image";

export default function SlideImage({ image }: { image: string }) {
  return (
    <div className="w-full p-2.5 h-full">
      <Image src={`/webp/${image}.webp`} alt={image} fill />
    </div>
  );
}
