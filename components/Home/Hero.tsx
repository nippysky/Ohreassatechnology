import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SlideOne from "./HeroSliders/SlideOne";
import SlideTwo from "./HeroSliders/SlideTwo";

export default function Hero() {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <SlideOne />
        <SlideTwo />
      </Carousel>
    </>
  );
}
