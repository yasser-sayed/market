import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImageCC from "./NextImageCC";

const ProdImgCC = ({ prodDet }) => {
  return (
    <div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={prodDet?.images}
        render={{ slide: NextJsImageCC }}
      />
    </div>
  );
};

export default ProdImgCC;
