import React from "react";
import Slider from "react-slick";
import "./ImgSlider.scss";
import screen1 from "../../assets/image/screen1.webp";
import screen2 from "../../assets/image/screen2.webp";
import screen3 from "../../assets/image/screen3.webp";
import screen4 from "../../assets/image/screen4.webp";
import screen5 from "../../assets/image/screen5.webp";
import screen6 from "../../assets/image/screen6.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageItem from '../ImageItem'
import { useStyles } from "../../utils/useStyles";
import { Container } from "@mui/material";

const ImgSlider = () => {
  const classes = useStyles();
  let setting = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    cssEase: "linear",
  };
  return (
    <Container className={classes.slider} fixed>
      <Slider {...setting}>
        <ImageItem image={screen1}/>
        <ImageItem image={screen2}/>
        <ImageItem image={screen3}/>
        <ImageItem image={screen4}/>
        <ImageItem image={screen5}/>
        <ImageItem image={screen6}/>
      </Slider>
    </Container>
  );
};

export default ImgSlider;
