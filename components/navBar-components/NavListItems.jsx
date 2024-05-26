"use client";

import { Typography } from "@/materialExports";
import Link from "next/link";
import { Flex } from "@/chakraExports";
import ThemeCC from "./ThemeCC";
import SearchCC from "./SearchCC";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatList } from "@/redux-system/slices/categorySlice";
import { Skeleton, SkeletonText } from "@chakra-ui/react";

const NavList = () => {
  const { categoryList, listLoading, listErr } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatList());
  }, []);

  return (
    <Flex direction="column" gap="3" w="100%">
      <SearchCC />
      <ul className="mt-2 mb-4 flex flex-col gap-x-2 justify-evenly flex-wrap lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        {listLoading ? (
          <Skeleton h="3" w="80%" />
        ) : (
          categoryList?.slice(0, 8)?.map((item, key) => (
            <Typography
              key={key}
              as={Link}
              href={`/category/${item}`}
              variant="paragraph"
              color="gray"
              className="font-medium hover:text-secClr text--white text-sm"
            >
              <span className=""> {item}</span>
            </Typography>
          ))
        )}

        <ThemeCC />
      </ul>
    </Flex>
  );
};

export default NavList;
