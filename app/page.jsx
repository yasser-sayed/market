import SliderImgs from "@/components/mainPage-components/SliderImgs";
import { Flex } from "@chakra-ui/react";
import { Typography } from "@/materialExports";
import React from "react";
import MainProductsCC from "@/components/mainPage-components/MainProductsCC";

const home = () => {
  return (
    <div className="bg-thirdClr ">
      <SliderImgs />

      <Flex
        direction={"column"}
        justifyContent="center"
        alignItems="center"
        className="mx-auto container my-6"
        gap="8"
      >
        <Typography
          variant="h4"
          color="gray"
          className="border-l-[6px] border-mainclr dark:border-secClr p-3 shadow-xl w-full"
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
