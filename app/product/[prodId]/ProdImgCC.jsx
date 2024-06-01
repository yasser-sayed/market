import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImageCC from "./NextImageCC";
import Image from "next/image";
import img11 from "@/assets/slider-1.jpg";

const ProdImgCC = ({ prodDet }) => {
  const [open, setOpen] = useState(false);
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

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[img11]}
        render={{ slide: NextJsImageCC }}
      />
    </div>
  );
};

export default ProdImgCC;
