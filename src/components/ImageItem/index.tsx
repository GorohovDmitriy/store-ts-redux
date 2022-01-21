import React, { FC } from "react";

interface ImageItemProps {
  image: string;
}

const ImageItem: FC<ImageItemProps> = ({ image }) => (
  <div className="slider__image">
    <img src={image} alt="Slider" />
  </div>
);

export default ImageItem;
