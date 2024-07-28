import Carousel from "./carousel";
import ImageSlider from "./image-slider";
import Subscribe from "./subscribe";

const Images = [
  { url: "car1.jpeg", alt: "product 1" },
  { url: "car2.jpeg", alt: "product 2" },
  { url: "car3.jpeg", alt: "product 3" },
  { url: "car4.jpeg", alt: "product 4" },
];

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto  w-full py-20 px-20 flex justify-between items-center max-h-[700px]">
      <div className="" style={{ width: "60%" }}> 
        <Carousel Images={Images} width={600} slidesToShow={1}/>
      </div>
      <div className="flex flex-col gap-4 p-5 ml-10 lg:p-10 ">
        
        <div
          className="py-3 text-5xl lg:text-6xl font-bold "
          style={{ lineHeight: "1.2" }}
        >
          The packet full of health
        </div>  
        
        <p className=" leading-relaxed font-medium text-gray-600">
          Sip the natural goodness of proteins and essentials vitamins with our
          extensively tested unadulterated milk!{" "}
        </p>
        <Subscribe />
        
        
      </div>
    </section>
  );
}
