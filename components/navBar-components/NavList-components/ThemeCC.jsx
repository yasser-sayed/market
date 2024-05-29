"use client";
import { setTheme } from "@/redux-system/slices/configSlice";
import { Flex, Switch } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoFlash, IoFlashOffOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const ThemeCC = () => {
  const { theme } = useSelector((state) => state.config);
  const dispatch = useDispatch();

  //handle theme
  const handleTheme = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      dispatch(setTheme(false));
    } else {
      document.documentElement.classList.remove("dark");
      dispatch(setTheme(true));
    }
  };

  //toggle theme
  const toggleTheme = () => {
    if (localStorage.theme == "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
    handleTheme();
  };

  const setLight = () => {
    localStorage.theme = "light";

    handleTheme();
  };

  const setDark = () => {
    localStorage.theme = "dark";

    handleTheme();
  };

  useEffect(() => {
    handleTheme();
  }, []);
  return (
    <Flex gap="2">
      <IoFlashOffOutline
        className="hover:text-secClr dark:hover:text-mainclr text-xl cursor-pointer"
        onClick={setDark}
      />
      <Switch isChecked={theme} onChange={toggleTheme} color="lightblue" />
      <IoFlash
        className="hover:text-secClr dark:hover:text-mainclr text-xl cursor-pointer"
        onClick={setLight}
      />
    </Flex>
  );
};

export default ThemeCC;
