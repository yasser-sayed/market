"use client";

import React from "react";
import sliderImg1 from "@/assets/slider-1.jpg";
import sliderImg2 from "@/assets/slider-2.jpg";
import sliderImg3 from "@/assets/slider-3.jpg";
import sliderImg4 from "@/assets/slider-4.jpg";
import sliderImg5 from "@/assets/slider-5.webp";
import sliderImg6 from "@/assets/slider-6.jpg";
import Image from "next/image";
import { Carousel } from "@/materialExports";

const SliderImgsCC = () => {
  return (
    <div className="px-10 py-8 bg-white dark:bg-forthClr">
      <Carousel
        navigation={({ setActiveIndex, length }) => (
          <div className="!hidden">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className="!hidden"
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={({ handlePrev }) => (
          <button onClick={handlePrev} className="!hidden"></button>
        )}
        nextArrow={({ handleNext }) => (
          <button onClick={handleNext} className="!hidden"></button>
        )}
        className="rounded-xl  max-h-[40vh] overflow-hidden"
        autoplay
        autoplayDelay={4000}
        loop
      >
        <Image
          src={sliderImg1}
          width={2000}
          height={1200}
          alt="slider img"
          className="h-full w-full "
        />

        <Image
          src={sliderImg2}
          width={2000}
          height={1200}
          alt="slider img"
          className="h-full w-full "
        />

        <Image
          src={sliderImg3}
          width={2000}
          height={1200}
          alt="slider img"
          className="h-full w-full "
        />

        <Image
          src={sliderImg4}
          width={2000}
          height={1200}
          alt="slider img"
          className="h-full w-full "
        />

        <Image
          src={sliderImg5}
          width={2000}
          height={1200}
          alt="slider img"
          className="h-full w-full "
        />

        <Image
          src={sliderImg6}
          width={2000}
          height={1200}
          alt="slider img"
          className="h-full w-full "
        />
      </Carousel>
    </div>
  );
};

export default SliderImgsCC;
