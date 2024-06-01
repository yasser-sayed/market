import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImageCC from "./NextImageCC";
import Image from "next/image";

const ProdImgCC = ({ prodDet }) => {
  const [open, setOpen] = useState(false);
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    setImgs(prodDet?.images);
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
