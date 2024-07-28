"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductCard() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(!isHovered);
  };

  const handleMouseLeave = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="  flex flex-col gap-2 p-2 rounded-lg shadow-md max-w-80 m-40">
      <div className=" relative group overflow-y-hidden ">
        <Image
          src="/car1.jpeg"
          alt="Product Image"
          width={390}
          height={200}
          className=" rounded-md object-cover group-hover:scale-y-[.9] group-hover:-translate-y-3 transition ease-in-out opacity-100  group-hover:opacity-75"
        />
        <div className="absolute left-0 w-full group-hover:-translate-y-12  duration-500">
          <div className="bg-yellow flex justify-around py-3">
            {isHovered ? (
              <Image
                src="/fast-cart-white.png"
                width={25}
                height={25}
                alt="shopping cart"
                onMouseLeave={handleMouseLeave}
              />
            ) : (
              <Image
                src="/fast-cart-black.png"
                width={25}
                height={25}
                alt="shopping cart"
                onMouseEnter={handleMouseEnter}
              />
            )}
            {/* <p>icon2</p> */}
          </div>
        </div>
      </div>
      {/* cart and add options when the mouse hovers on the image */}

      <div className="flex flex-col justify-between items-center  ">
        <h3 className="text-lg font-semibold "> Product Name</h3>
        <div className="flex items-center gap-2">
          <div className="flex gap-4 ">
            <p className="text-md font-semibold line-through text-gray-500">
              149.99
            </p>
            <p className="text-md font-semibold">99.99</p>
            <p className="text-md font-semibold">-29%</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 gap-4">
          <button className="bg-yellow px-3 text-sm font-semibold py-2">
            Add to Cart
          </button>
          <button className="bg-yellow px-3 text-sm font-semibold py-2">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
