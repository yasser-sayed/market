"use client";
import { Button, Flex } from "@chakra-ui/react";
import { Input } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const SearchCC = () => {
  const [srch, setSrch] = useState("");
  const { theme } = useSelector((state) => state.config);

  const router = useRouter();

  return (
    <Flex w="100%" className="relative ">
      <Input
        type="search"
        label="type here..."
        placeholder="search"
        size="sm"
        color="white"
        value={srch}
        onChange={(inp) => setSrch(inp.target.value)}
        className="pr-24 w-full text-white dark:text-gray-300 dark:placeholder:text-gray-300 placeholder:text-white"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        isDisabled={!srch}
        className="!absolute right-0 top-0 rounded"
        onClick={() => router.push(`/search/${srch}`)}
      >
        search
      </Button>
    </Flex>
  );
};

export default SearchCC;
