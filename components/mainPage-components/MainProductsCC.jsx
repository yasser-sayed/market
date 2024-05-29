"use client";

import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import { getProducts } from "@/redux-system/slices/productSlice";
import CardSC from "../CardSC";

const MainProductsCC = () => {
  const { products, productsLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      gap={8}
      flexWrap={"wrap"}
      className="min-h-screen"
    >
      {productsLoading ? (
        <Loading />
      ) : (
        products.map((prod, i) => <CardSC prod={prod} key={i} />)
      )}
    </Flex>
  );
};

export default MainProductsCC;
