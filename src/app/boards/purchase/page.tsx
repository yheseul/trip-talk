"use client";

import AccommodationList from "../../_components/AccommodationList";
import Carousel from "../../_components/Carousel/components/Carousel";
import FilterBar from "../../_components/FilterBar";

export default function Purchase() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-2 pt-2">
      <div className="w-full h-40 md:h-72 lg:h-96">
        <Carousel
          delay={6000}
          length={4}
          image="accommodation"
        />
      </div>
      <FilterBar />
      <AccommodationList />
      <AccommodationList />
    </div>
  );
}
