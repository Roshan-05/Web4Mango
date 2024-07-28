"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductsLandingPage() {
  const [translate, setTranslate] = useState(false);

  useEffect(() => {
    setTranslate(true);
  }, []);

  return (
    <section
      className="h-screen bg-yellow w-full py-20 px-10 flex justify-center items-center gap-8 "
      style={{ maxHeight: 700 }}
    >
      <div className="flex justify-center items-center gap-8 max-w-5xl mx-auto   ">
        <div className="flex flex-col   relative" style={{ width: "45%" }}>
          <div
            className={`left-0 py-3 text-5xl lg:text-6xl font-bold   absolute ${
              translate ? `opacity-100` : `-translate-x-[400px] opacity-0`
            } transition ease-linear duration-500`}
            style={{ lineHeight: "1.2" }}
          >
            Products
          </div>

          <p className="  leading-relaxed font-medium text-gray-600 mt-28">
            Our healthy, fresh and delicious Mangos will make everything better.
            With our assurance of quality abd purity, you can confidently add it
            to your diet and boost your overall health!
          </p>
        </div>
        <div className="relative" style={{ width: "60%" }}>
          <div className="bg-gray-700 flex justify-center items-center  ">
            <Image
              height={550}
              className={`absolute  ${
                translate ? `opacity-100 ` : `translate-x-[400px] opacity-0`
              } transition ease-linear duration-500`}
              width={550}
              src="/car1.jpeg"
              alt="product image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
