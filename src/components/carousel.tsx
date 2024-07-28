"use client"

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from 'next/image';


type ImageProps = {
    Images: {
      url: string;
      alt: string;
    }[],
    slidesToShow : number,
    width : number
  };

export default function Carousel(props:ImageProps){
    let settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow: props.slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        // adaptiveHeight:true,
        // variableWidth:true
    }
    return(
        <Slider {...settings} >
            {
                props.Images.map(({url, alt})=>(
                    <Image key={url} className='px-3 items-center justify-center my-auto' 
                    width={props.width}
                    height={props.width}
                    style={{ objectFit:'cover'}}
                    src={`/${url}`} alt={alt} />
                ))
            }

        </Slider>
    )
}