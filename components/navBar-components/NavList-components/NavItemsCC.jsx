"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-tailwind/react";
import { getCatList } from "@/redux-system/slices/categorySlice";
import { Skeleton } from "@chakra-ui/react";

const NavItemsCC = () => {
  const { categoryList, listLoading } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatList());
  }, []);

  return (
    <>
      {listLoading ? (
        <Skeleton h="3" w="80%" />
      ) : (
        categoryList?.slice(0, 8)?.map((item, key) => (
          <Typography
            key={key}
            as={Link}
            href={`/category/${item}`}
            variant="paragraph"
            className="font-medium hover:text-secClr text-white text-sm"
          >
            <span className=""> {item}</span>
          </Typography>
        ))
      )}
    </>
  );
};

export default NavItemsCC;
