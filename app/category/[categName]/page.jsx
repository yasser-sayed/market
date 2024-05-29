import { Flex } from "@chakra-ui/react";
import React from "react";
import { Typography } from "@/materialExports";
import CategoryProdsCC from "./CategoryProdsCC";

const category = ({ params: { categName } }) => {
  return (
    <Flex
      direction={"column"}
      justifyContent="center"
      alignItems="center"
      className="  px-4 md:px-8 lg:px-10 my-10 "
      gap="8"
    >
      <Typography
        variant="h4"
        color="gray"
        className="border-l-[6px] border-mainclr dark:border-secClr p-3 shadow-xl w-full dark:text-white"
      >
        {" "}
        see our {categName}
      </Typography>

      <CategoryProdsCC categName={categName} />
    </Flex>
  );
};

export default category;
