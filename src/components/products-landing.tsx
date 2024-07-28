"use client";

import { useEffect, useState } from "react";

export default function ProductsLandingPage() {
  const [translate, setTranslate] = useState(false);

  useEffect(() => {
    setTranslate(true);
  });

  return (
    <section
      className="h-screen bg-yellow w-full py-20 px-10 flex justify-center items-center gap-8 "
      style={{ maxHeight: 700 }}
    >
      <div className="flex justify-center items-center gap-8 max-w-5xl mx-auto bg-red-500 ">
        <div className="flex flex-col bg-red-400 relative" style={{ width: "45%" }}>
          <div
            className={`left-0 py-3 text-5xl lg:text-6xl font-bold bg-green-500 absolute ${
              translate ? `opacity-100` : `-translate-x-[400px] opacity-0`
            } transition ease-linear duration-500`}
            style={{ lineHeight: "1.2" }}
          >
            Products
          </div>

          <p className="bg-green-500 leading-relaxed font-medium text-gray-600 mt-28">
            Our healthy, fresh and delicious Mangos will make everything better.
            With our assurance of quality abd purity, you can confidently add it
            to your diet and boost your overall health!
          </p>
        </div>
        <div className="relative" style={{ width: "60%" }}>
          <div className="bg-gray-700 flex justify-center items-center  ">

          <img className={`absolute  ${
              translate ? `opacity-100 ` : `translate-x-[400px] opacity-0`
            } transition ease-linear duration-500`} width={550} src="car1.jpeg" alt="product image" />
          </div>
        </div>
      </div>
    </section>
  );
}
