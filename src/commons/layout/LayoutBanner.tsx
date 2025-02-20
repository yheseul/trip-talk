"use client";

import Carousel from "../../app/_components/Carousel/components/Carousel";

export default function LayoutBanner() {
  return (
    <Carousel
      delay={3000}
      length={6}
      image="banner"
      width="100%"
      height="512px"
    />
  );
}
