"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComplimentsCard from "./compilments-card";

type compliments = {
  feedback: {
    message: string;
    username: string;
  }[];
};

export default function ComplimentsCarousel(props: compliments) {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    // adaptiveHeight:true,
    // variableWidth:true
  };
  return (
    <div className="px-20">

    <Slider {...settings}>
      {props.feedback.map((feed) => (
    
          <ComplimentsCard feedback={feed} />
      ))}
    </Slider>
    </div>
  );
}
