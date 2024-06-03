import { Flex } from "@chakra-ui/react";
import React from "react";
import DetCC from "./DetCC";

export const metadata = {
  title: "rsa product view",
  description: "showing product details",
};

const product = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      className="my-4 mx-8 md:mx-10 lg:my-12"
    >
      <section className="grid md:grid-cols-2 grid-cols-1 gap-3 rounded bg-white dark:bg-forthClr">
        <DetCC />
      </section>
    </Flex>
  );
};

export default product;
