import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImageCC from "./NextImageCC";

const ProdImgCC = ({ prodDet }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={prodDet?.images}
        render={{ slide: NextJsImageCC }}
      />

      <button onClick={() => setOpen(true)}>tesst</button>
    </div>
  );
};

export default ProdImgCC;
