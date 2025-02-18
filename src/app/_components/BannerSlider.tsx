import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IBannerSlider } from "../../types/components.type";
import SlideImage from "./SlideImage";

export default function BannerSlider({
  delay,
  length,
  image,
  width,
  height,
}: IBannerSlider) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={length === 4 ? 2 : 1}
      centeredSlides={length === 4 ? false : true}
      autoplay={{
        delay,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {Array.from({ length }).map((_, i) => (
        <SwiperSlide key={i + 1}>
          <SlideImage
            image={`${image}${i + 1}`}
            width={width}
            height={height}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
