import SliderImgsCC from "@/components/mainPage-components/SliderImgsCC";
import { Flex } from "@chakra-ui/react";
import { Typography } from "@/materialExports";
import React from "react";
import MainProductsCC from "@/components/mainPage-components/MainProductsCC";

const home = () => {
  return (
    <div>
      <SliderImgsCC />

      <Flex
        direction={"column"}
        justifyContent="center"
        alignItems="center"
        className="  px-4 md:px-8 lg:px-10 my-6"
        gap="8"
      >
        <Typography
          variant="h4"
          color="gray"
          className="border-l-[6px] border-mainclr dark:border-secClr p-3 shadow-xl w-full dark:text-white"
        >
          {" "}
          SEE OUR PRODUCTS
        </Typography>

        <MainProductsCC />
      </Flex>
    </div>
  );
};

export default home;
