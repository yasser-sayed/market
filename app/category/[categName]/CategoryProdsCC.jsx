"use client";

import CardSC from "@/components/CardSC";
import Loading from "@/components/Loading";
import { getCatProds } from "@/redux-system/slices/categorySlice";
import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategoryProdsCC = ({ categName }) => {
  const { categoryProds, prodsLoading } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatProds(categName));
  }, []);

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      gap={8}
      flexWrap={"wrap"}
      className="min-h-screen"
    >
      {prodsLoading ? (
        <Loading />
      ) : (
        categoryProds.map((prod, i) => <CardSC prod={prod} key={i} />)
      )}
    </Flex>
  );
};

export default CategoryProdsCC;
