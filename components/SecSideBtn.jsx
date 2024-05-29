"use client";

import { IconButton } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import DrawerCC from "./DrawerCC";
import { useDisclosure } from "@chakra-ui/react";

const SecSideBtn = ({ isOpen, onOpen }) => {
  const [scrollY, setScrollY] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleScroll = (e) => {
    setScrollY(e.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      handleScroll(e.currentTarget);
    });
  }, []);

  return (
    <div className="rounded-full relative bottom-4 !left-4">
      <IconButton
        hidden={isOpen || !scrollY}
        className="rounded-full text-2xl duration-150 bg-mainclr dark:bg-secClr hover:shadow-mainclr dark:hover:shadow-secClr shadow-lg"
        title="side menu"
        onClick={onOpen}
      >
        <TbMenuDeep />
      </IconButton>

      <DrawerCC isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default SecSideBtn;
