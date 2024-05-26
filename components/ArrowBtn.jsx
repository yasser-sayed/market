"use client";

import { IconButton } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useSelector } from "react-redux";

const ArrowBtn = () => {
  const [scrollY, setScrollY] = useState(0);
  const { theme } = useSelector((state) => state.config);

  const handleScroll = (e) => {
    setScrollY(e.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      handleScroll(e.currentTarget);
    });
  }, []);

  return (
    <div className="rounded-full fixed bottom-4 !right-4">
      <IconButton
        hidden={!scrollY}
        color={theme ? "cyan" : "blue"}
        className="rounded-full text-2xl duration-150"
        title="go up"
        onClick={() => {
          scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <MdKeyboardArrowUp />
      </IconButton>
    </div>
  );
};

export default ArrowBtn;
