import Carousel from "./carousel";
import ImageSlider from "./image-slider";

const Images = [
  { url: "car1.jpeg", alt: "product 1" },
  { url: "car2.jpeg", alt: "product 2" },
  { url: "car3.jpeg", alt: "product 3" },
  { url: "car4.jpeg", alt: "product 4" },
];

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto bg-slate-600 w-full py-20 px-20 flex justify-between items-center">
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
        
        <div className="mt-5 flex justify-between items-center gap-3 bg-green-500">
          <div className="text-2xl  font-bold bg-white">
            Subscribe Now
          </div>
          <div className="bg-white ">
            <ul className="flex flex-wrap gap-1 justify-end ">
              <li>
                <img
                  className="bg-black rounded-full p-2 w-10"
                  src="playstore.svg"
                  alt="playstore"
                />
              </li>
              <li>
                <img
                  className="bg-black rounded-full p-2 w-10"
                  src="apple-logo.svg"
                  alt="ios download"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
