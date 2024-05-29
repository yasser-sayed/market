"use client";

import { Center, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Typography } from "@/materialExports";
import { useDispatch, useSelector } from "react-redux";
import { getSrchResult } from "@/redux-system/slices/searchSlice";
import Loading from "@/components/Loading";
import CardSC from "@/components/CardSC";

const Search = ({ params: { srchWord } }) => {
  const { srchResult, srchLoading } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSrchResult(srchWord));
  }, [srchWord]);

  return (
    <>
      {srchLoading ? (
        <Loading />
      ) : !srchResult.length ? (
        <Center
          bg={"transparent"}
          className="!text-mainclr dark:!text-secClr text-3xl font-extrabold h-screen"
        >
          Sorry, No Products Found!
        </Center>
      ) : (
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
            showing results for {srchWord}:
          </Typography>

          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            gap={8}
            flexWrap={"wrap"}
            className="min-h-screen"
          >
            {srchResult.map((prod, i) => (
              <CardSC prod={prod} key={i} />
            ))}
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Search;
