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
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        className="w-full h-[32rem]"
      >
        <Image
          src={prodDet?.images[0]}
          width={2000}
          height={1000}
          alt="image"
          className="max-w-full max-h-full cursor-zoom-in px-4"
          onClick={() => setOpen(true)}
        />
      </Flex>

      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        gap={6}
        className="px-8 h-24 w-full"
      >
        {imgs.map((img, key) => (
          <Image
            key={key}
            src={img.src}
            width={2000}
            height={1000}
            alt="image"
            className="w-auto h-auto max-h-full cursor-zoom-in mx-4 hover:p-5"
            onClick={() => setOpen(true)}
          />
        ))}
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
