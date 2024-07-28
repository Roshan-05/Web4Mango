import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-white max-w-[90rem] mx-auto">
      <div className=" px-10 py-1 flex justify-between relative ">
        <div className="absolute left-1/2 translate-y-1/2">logo</div>
        <div className="text-sm ">
          <ul className="flex gap-3  ">
            <li className=" py-4 px-4 hover:border-b-4 border-line">
              <Link href="/">Home</Link>
            </li>
            <li className="py-4 px-4 hover:border-b-4 border-line"><Link href="/products">Products</Link></li>
            <li className="py-4 px-4 hover:border-b-4 border-line">
            <Link href="/know-your-mango">Know Your Mango</Link>
            </li>
            <li className="py-4 px-4 hover:border-b-4 border-line"><Link href="/shop">Shop</Link></li>
          </ul>
        </div>

        <div className="text-sm ">
          <ul className="flex gap-3  ">
            <li className=" py-4 px-4 hover:border-b-4 border-line">
            <Link href="/we-care">We Care</Link>
            </li>
            <li className=" py-4 px-4 hover:border-b-4 border-line">
            <Link href="/about">About</Link>
            </li>
            <li className=" py-4 px-4 hover:border-b-4 border-line">
            <Link href="/practices">Best Practices</Link>
            </li>
            <li className=" py-4 px-4 hover:border-b-4 border-line">
            <Link href="/login">My Account</Link>
            </li>
            <li className=" py-4 px-4 hover:border-b-4 border-line flex">
              🛒
              <div className=" -translate-y-2">
                <span
                  className="bg-yellow 
            rounded-full p-1 text-sm "
                >
                  0
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
