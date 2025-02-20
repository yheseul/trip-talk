"use client";

import AccommodationList from "../../_components/AccommodationList";
import Carousel from "../../_components/Carousel/components/Carousel";
import FilterBar from "../../_components/FilterBar";

export default function Purchase() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[1200px]">
        <Carousel
          delay={6000}
          length={4}
          image="accommodation"
          width="628px"
          height="628px"
        />
      </div>
      <FilterBar />
      <AccommodationList />
      <AccommodationList />
    </div>
  );
}
