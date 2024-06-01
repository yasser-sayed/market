import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImageCC from "./NextImageCC";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";

const ProdImgCC = ({ prodDet }) => {
  const [open, setOpen] = useState(false);
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    const newImgs = prodDet?.images.map((img) => {
      return { src: img };
    });

    setImgs(newImgs);
  }, [prodDet]);
  return (
    <div>
      <Image
        src={prodDet?.images[0]}
        width={2000}
        height={1000}
        alt="image"
        className="w-full h-[70%] cursor-zoom-in px-4"
        onClick={() => setOpen(true)}
      />

      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        gap={6}
        flexWrap={"wrap"}
      >
        {prodDet?.images.map((img) => {
          <Image
            src={img}
            width={2000}
            height={1000}
            alt="image"
            className="w-auto h-[30%] cursor-zoom-in px-4 hover:p-10"
            onClick={() => setOpen(true)}
          />;
        })}
      </Flex>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={imgs}
        render={{ slide: NextJsImageCC }}
      />
    </div>
  );
};

export default ProdImgCC;
