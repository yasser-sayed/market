"use client";

import { IconButton } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { TbMenuDeep } from "react-icons/tb";

const SecSideBtn = ({ isOpen, onOpen }) => {
  const [scrollY, setScrollY] = useState(0);

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
        hidden={isOpen}
        className="rounded-full text-2xl duration-150 bg-mainclr dark:bg-secClr hover:shadow-mainclr dark:hover:shadow-secClr shadow-lg"
        title="side menu"
        onClick={onOpen}
      >
        <TbMenuDeep />
      </IconButton>
    </div>
  );
};

export default SecSideBtn;
