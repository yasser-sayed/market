"use client";

import {
  Badge,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdCart } from "react-icons/io";
import cartImg from "@/assets/cartImg.png";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";

const CartHoverCC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Menu
      placement="bottom-end"
      open={openMenu}
      handler={setOpenMenu}
      allowHover
    >
      <MenuHandler>
        <Link href="/cart">
          <Badge color="light-blue" content="1">
            <IoMdCart className="text-[2.3rem]" />
          </Badge>
        </Link>
      </MenuHandler>
      <MenuList className="hidden h-[28rem] w-[23rem] overflow-visible lg:flex flex-col border-2 !p-0 border-mainclr dark:border-secClr rounded-lg">
        <Flex direction="column" className="!border-0 !outline-0 select-none	">
          <Typography
            color="white"
            variant="h4"
            className="text-center bg-opacity-20 dark:bg-opacity-20 text-mainclr dark:text-secClr py-6 bg-mainclr dark:bg-secClr  border-b-2 border-mainclr dark:border-secClr"
          >
            Recenlty Added Products
          </Typography>

          <Flex
            direction="column"
            alignItems="center"
            justifyContent="space-around"
            className="h-[22.5rem]"
          >
            <Image
              src={cartImg}
              width={0}
              height={0}
              alt="Picture of the author"
              className="h-2/5 w-auto"
            />

            <Typography variant="paragraph">No Products Yet!</Typography>

            <Link href="/">
              <Button className="bg-mainclr dark:bg-secClr hover:shadow-mainclr dark:hover:shadow-secClr shadow-lg">
                go shopping now!
              </Button>
            </Link>
          </Flex>
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default CartHoverCC;
