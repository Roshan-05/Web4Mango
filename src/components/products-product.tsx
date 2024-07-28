import Subscribe from "./subscribe";

export default function ProductsProduct() {
  return (
    <section className="max-w-7xl mx-auto  w-full py-20 px-20 flex justify-between items-center max-h-[700px]">
      <div className="" style={{ width: "60%" }}>
        <img className={``} width={700} src="car1.jpeg" alt="product image" />
      </div>
      <div
        className="flex flex-col gap-4 p-5 ml-10 lg:p-10 "
        style={{ width: "40%" }}
      >
        <div
          className="py-3 text-4xl lg:text-5xl font-bold "
          style={{ lineHeight: "1.2" }}
        >
          Fresh Mango
        </div>

        <p className=" leading-relaxed font-medium text-gray-600">
        The mango, often hailed as the "king of fruits," is a tropical delight. Sweet, juicy, and packed with vitamins, it's a summer staple. From its vibrant green unripe state to the golden perfection of ripeness, mangoes offer a burst of flavor.
        </p>
        <Subscribe />
      </div>
    </section>
  );
}
