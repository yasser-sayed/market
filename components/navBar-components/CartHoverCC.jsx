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
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const CartHoverCC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const router = useRouter();

  return (
    <Menu
      placement="bottom-end"
      open={openMenu}
      handler={setOpenMenu}
      allowHover
    >
      <MenuHandler>
        <Link href="/cart">
          <Badge color="light-blue" content={cartItems.length}>
            <IoMdCart className="text-[2.3rem]" />
          </Badge>
        </Link>
      </MenuHandler>
      <MenuList
        className={`hidden ${
          cartItems.length ? "max" : ""
        }h-[28rem] w-[23rem] overflow-visible lg:flex flex-col border-2 !p-0 border-mainclr dark:border-secClr rounded-lg`}
      >
        <Flex direction="column" className="!border-0 !outline-0 select-none	">
          <Typography
            color="white"
            variant="h4"
            className="text-center !bg-opacity-20 dark:!bg-opacity-20 text-mainclr dark:text-secClr py-6 bg-secClr dark:bg-secClr  border-b-2 border-mainclr dark:border-secClr"
          >
            Recenlty Added Products
          </Typography>

          {/* cart content */}
          {cartItems.length ? (
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="space-between"
              className="max-h-[22.5rem]"
              overflow={"scroll"}
            >
              {cartItems.map((cartItem, i) => (
                <div key={i} className="w-full">
                  <Flex
                    alignItems={"center"}
                    justifyContent={"space-around"}
                    className="hover:bg-[#8080803b] rounded-lg p-2 m-2 w-[98%] text-center"
                    onClick={() => router.push(`/product/${cartItem.id}`)}
                  >
                    <Image
                      src={cartItem.thumbnail}
                      alt="item image"
                      width={700}
                      height={500}
                      className="h-10 w-auto"
                    />

                    <Typography variant="paragraph">
                      {cartItem.title} {""}
                    </Typography>

                    <Typography
                      variant="h6"
                      className="text-mainclr dark:text-secClr font-bold"
                    >
                      EGP{" "}
                      {(
                        cartItem.price -
                        (cartItem.discountPercentage * cartItem.price) / 100
                      ).toFixed(2)}
                    </Typography>
                  </Flex>

                  <hr />
                </div>
              ))}

              <Link href="/cart">
                <Button className="bg-mainclr dark:bg-secClr hover:shadow-mainclr dark:hover:shadow-secClr shadow-lg">
                  view my cart
                </Button>
              </Link>
            </Flex>
          ) : (
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
          )}
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default CartHoverCC;
