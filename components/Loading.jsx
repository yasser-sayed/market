"use client";

import React from "react";
import { useSelector } from "react-redux";
import { CircleLoader } from "react-spinners";

const Loading = () => {
  const { theme } = useSelector((state) => state.config);

  return (
    <div>
      <CircleLoader
        size={100}
        color={theme ? "#0a93aacc" : "#024955"}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default Loading;
