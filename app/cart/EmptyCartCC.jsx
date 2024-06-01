import { Flex } from "@chakra-ui/react";
import { Button, Typography } from "@/materialExports";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cartImg from "@/assets/cartImg.png";

const EmptyCartCC = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      gap={6}
      flexDirection={"column"}
      className="h-[80vh] w-full"
    >
      <Image
        src={cartImg}
        width={2000}
        height={1000}
        alt="cart image"
        className="w-1/5 h-auto"
      />

      <Typography
        variant="paragraph"
        className="text-forthClr dark:text-thirdClr"
      >
        Your shopping cart is empty
      </Typography>

      <Link href="/">
        <Button className="bg-mainclr dark:bg-secClr hover:shadow-mainclr dark:hover:shadow-secClr shadow-lg">
          go shopping now!
        </Button>
      </Link>
    </Flex>
  );
};

export default EmptyCartCC;
