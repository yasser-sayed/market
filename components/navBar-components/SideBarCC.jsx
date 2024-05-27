"use client";

import { getCatList } from "@/redux-system/slices/categorySlice";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
  Skeleton,
} from "@chakra-ui/react";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import ThemeCC from "./ThemeCC";

const SideBarCC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { categoryList, listLoading, listErr } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getCatList());
  }, []);
  return (
    <>
      <Typography
        className="hover:text-secClr dark:hover:text-mainclr cursor-pointer "
        variant="h3"
        onClick={onOpen}
      >
        <TbMenuDeep />
      </Typography>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="unset" className="!bg-mainclr dark:!bg-secClr">
          <DrawerHeader borderBottomWidth="1px" py="12">
            <DrawerCloseButton />
            <Flex alignItems="center" gap="3" direction="column">
              <ThemeCC />
              <Link href="/" className=" hover:text-secClr cursor-pointer ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </Link>
              <Typography
                as={Link}
                href="/"
                variant="h3"
                className="mr-4  cursor-pointer py-1.5 font-bold hover:text-secClr "
              >
                RSA-Market
              </Typography>
            </Flex>
          </DrawerHeader>
          <DrawerBody p="0">
            <Flex direction="column">
              {listLoading ? (
                <Skeleton h="100vh" w="100%" />
              ) : (
                categoryList.map((item, key) => (
                  <Button
                    key={key}
                    fullWidth
                    onClick={() => {
                      onClose();

                      router.push(`/category/${item}`);
                    }}
                    variant="text"
                    className="hover:bg-secClr bg-opacity-30 dark:hover:bg-mainclr rounded-none lowercase text-white text-md dark:text-gray-300"
                  >
                    {item}
                  </Button>
                ))
              )}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideBarCC;
