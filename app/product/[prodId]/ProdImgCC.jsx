import React from "react";
import PhotoAlbum from "react-photo-album";

const ProdImgCC = ({ prodDet }) => {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <PhotoAlbum
        photos={prodDet?.images}
        renderPhoto={({
          imageProps: { src, alt, style, ...restImageProps },
        }) => (
          <img
            src={prodDet?.images[0]}
            alt={"image"}
            className="w-full h-[80%]"
            {...restImageProps}
          />
        )}
      />
    </div>
  );
};

export default ProdImgCC;
