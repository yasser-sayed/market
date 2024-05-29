"use client";

import { Typography } from "@material-tailwind/react";
import React from "react";
import { TbMenuDeep } from "react-icons/tb";
import DrawerCC from "../DrawerCC";

const SideBarCC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Typography
        className="hover:text-secClr dark:hover:text-mainclr cursor-pointer "
        variant="h3"
        onClick={onOpen}
      >
        <TbMenuDeep />
      </Typography>

      <DrawerCC isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default SideBarCC;
