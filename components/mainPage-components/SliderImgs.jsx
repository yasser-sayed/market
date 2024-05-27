import React from "react";
import sliderImg1 from "@/assets/slider-1.jpg";
import sliderImg2 from "@/assets/slider-2.jpg";
import sliderImg3 from "@/assets/slider-3.jpg";
import sliderImg4 from "@/assets/slider-4.jpg";
import sliderImg5 from "@/assets/slider-5.webp";
import sliderImg6 from "@/assets/slider-6.jpg";
import Image from "next/image";
import { Carousel } from "@/materialExports";

const SliderImgs = () => {
  return (
    <div className="px-10 py-8 bg-white dark:bg-forthClr">
      <Carousel
        className="rounded-xl  h-[350px] overflow-hidden"
        autoplay
        autoplayDelay={4000}
        loop
      >
        <Image
          src={sliderImg1}
          width="100%"
          height={350}
          alt="slider img"
          className=" w-full "
        />

        <Image
          src={sliderImg2}
          width="100%"
          height={350}
          alt="slider img"
          className=" w-full "
        />

        <Image
          src={sliderImg3}
          width="100%"
          height={350}
          alt="slider img"
          className=" w-full "
        />

        <Image
          src={sliderImg4}
          width="100%"
          height={350}
          alt="slider img"
          className=" w-full "
        />

        <Image
          src={sliderImg5}
          width="100%"
          height={350}
          alt="slider img"
          className=" w-full "
        />

        <Image
          src={sliderImg6}
          width="100%"
          height={350}
          alt="slider img"
          className=" w-full "
        />
      </Carousel>
    </div>
  );
};

export default SliderImgs;
