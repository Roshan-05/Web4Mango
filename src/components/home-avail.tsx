import Carousel from "./carousel";

const logos = [
  { url: "amazon-logo.png", alt: "amazon logo" },
  { url: "bigbasket-logo.jpeg", alt: "bigbasket logo" },
  { url: "freshToHome-logo.jpeg", alt: "freshToHome logo" },
  { url: "milkbasket-logo.png", alt: "milkbasket logo" },
];

export default function HomeAvail() {
  return (
    <section className="-translate-y-1/2 max-w-7xl mx-auto w-full  ">
      <div className="w-1/3 mx-auto bg- flex justify-center text-2xl font-bold py-2 bg-custom-gray rounded">
        Also available on
      </div>
      <div className=" mx-20 py-10 bg-white px-20 rounded-3xl shadow-2xl">
        <Carousel Images={logos} width={10} slidesToShow={4} />
      </div>
    </section>
  );
}
