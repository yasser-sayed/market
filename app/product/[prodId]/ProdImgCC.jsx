import React from "react";
import PhotoAlbum from "react-photo-album";

const ProdImgCC = ({ prodDet }) => {
  return (
    <div style={{ position: "relative" }}>
      <PhotoAlbum
        photos={prodDet?.images}
        renderPhoto={() => (
          <img
            src={prodDet?.images[0]}
            alt={"image"}
            className="w-full h-[80%]"
          />
        )}
      />
    </div>
  );
};

export default ProdImgCC;
