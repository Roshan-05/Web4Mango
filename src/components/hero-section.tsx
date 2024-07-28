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
    <section className="max-w-7xl mx-auto bg-slate-600 w-full py-20 px-20 flex justify-between items-center max-h-[700px]">
      <div className="" style={{ width: "60%" }}> 
        <Carousel Images={Images} width={600} slidesToShow={1}/>
      </div>
      <div className="flex flex-col gap-4 p-5 ml-10 lg:p-10 bg-red-400">
        
        <div
          className="py-3 text-5xl lg:text-6xl font-bold bg-green-500"
          style={{ lineHeight: "1.2" }}
        >
          The packet full of health
        </div>  
        
        <p className="bg-green-500 leading-relaxed font-medium text-gray-600">
          Sip the natural goodness of proteins and essentials vitamins with our
          extensively tested unadulterated milk!{" "}
        </p>
        <Subscribe />
        
        
      </div>
    </section>
  );
}
