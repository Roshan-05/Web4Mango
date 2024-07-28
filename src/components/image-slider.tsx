"use client"
import { useState } from "react";
import "./image-slider.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import Image from "next/image";


type ImageProps = {
  Images: {
    url: string;
    alt: string;
  }[];
};

export default function ImageSlider({ Images }: ImageProps) {
  const [imageIndex, setImageIndex] = useState(0)

  const nextImage = ()=>{
    const newIndex = (imageIndex+1)%(Images.length)
    setImageIndex(newIndex)
  }

  const prevImage = ()=>{
    const newIndex = imageIndex === 0 ? Images.length-1:imageIndex-1
    setImageIndex(newIndex)
  }
  return (
    <section className="relative"> 
      
    
      <div className="bg-gray-600 w-full h-full flex overflow-hidden">
       {Images.map(({url, alt}, index)=>(
        <Image key={index} className="img-slider " width={700} height={600} src={url} alt={alt} style={{translate: `${-100 * imageIndex}%`}}/>
       ))}
      </div>
      <button onClick={prevImage} className="left-0 img-slider-btn ">
        <ArrowBackIosIcon />
      </button>

      <button onClick={nextImage} className="right-0 img-slider-btn "><ArrowForwardIosIcon /></button>

      <div className="absolute left-1/2 translate-y-1/2 flex gap-2">
        {
          Images.map((_, index)=>(
            <button key={index}
            className="img-slider-viewer"
            onClick={()=>setImageIndex(index)}>
              {
                index === imageIndex ? (
<CircleIcon fontSize="inherit" />
                ):(
                  
<CircleOutlinedIcon fontSize="inherit" />
                )
              }

            </button>
          ))
        }
      </div>
      
      </section>
  );
} 
