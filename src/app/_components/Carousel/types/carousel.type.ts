export interface ICarouselImage {
  image: string;
  width: string;
  height: string;
}

export interface ICarousel {
  delay: number;
  length: number;
  image: string;
  width: string;
  height: string;
  objectFit?: string;
}
