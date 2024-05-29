"use client";

import React, { useEffect } from "react";
import { Collapse } from "@/materialExports";
import NavList from "./NavListSC";
import { useSelector } from "react-redux";
import { setOpenNav } from "@/redux-system/slices/configSlice";

const CollapseCC = () => {
  const { openNav } = useSelector((state) => state.config);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <Collapse open={openNav} className="overflow-scroll">
      <NavList />
    </Collapse>
  );
};

export default CollapseCC;
