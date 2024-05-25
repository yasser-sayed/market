import React from "react";
import { Input, Typography } from "@/materialExports";
import Link from "next/link";
import { Button, Flex, Switch } from "@chakra-ui/react";
import axios from "axios";
import { IoFlash, IoFlashOffOutline } from "react-icons/io5";

const getCatList = async () => {
  const data = await axios({
    method: "get",
    url: "https://dummyjson.com/products/category-list",
  });

  return data.data.slice(0, 8);
};

const NavList = async () => {
  const categList = await getCatList();

  return (
    <Flex direction="column" gap="3" w="100%">
      <Flex w="100%" className="relative ">
        <Input
          type="search"
          label="type here..."
          placeholder="enter product name"
          color="white"
          // value={email}
          // onChange={onChange}
          className="pr-24 w-full text-white placeholder:text-white"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button className="!absolute right-0 top-0 rounded">search</Button>
      </Flex>
      <ul className="mt-2 mb-4 flex flex-col gap-x-2 justify-evenly flex-wrap lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        {categList.map((item, key) => (
          <Typography
            key={key}
            as={Link}
            href={`/category/${item}`}
            variant="paragraph"
            color="gray"
            className="font-medium hover:text-secClr text--white "
          >
            <span className=""> {item}</span>
          </Typography>
        ))}

        <Flex gap="2">
          <IoFlashOffOutline className="hover:text-secClr text-xl" />
          <Switch color="lightblue" />
          <IoFlash className="hover:text-secClr text-xl" />
        </Flex>
      </ul>
    </Flex>
  );
};

export default NavList;
