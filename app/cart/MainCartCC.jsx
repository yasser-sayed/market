"use client";

import React from "react";
import { useSelector } from "react-redux";
import CartItemsCC from "./CartItemsCC";
import EmptyCartCC from "./EmptyCartCC";

const MainCartCC = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return <>{cartItems.length ? <CartItemsCC /> : <EmptyCartCC />}</>;
};

export default MainCartCC;
