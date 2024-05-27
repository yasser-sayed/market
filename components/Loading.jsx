"use client";

import React from "react";
import { useSelector } from "react-redux";
import { ClimbingBoxLoader } from "react-spinners";

const Loading = () => {
  const { theme } = useSelector((state) => state.config);

  return (
    <div>
      <ClimbingBoxLoader
        color={theme ? "#0a93aacc" : "#024955"}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default Loading;
