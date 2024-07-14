import React from "react";

export default function Navbar() {
  return (
    <div className="bg-green-400">

    <div className=" px-10 py-1 flex justify-between relative bg-gray-500">
        <div className="absolute left-1/2 translate-y-1/2">
            logo
        </div> 
      <div>
        <ul className="flex gap-4 bg-yellow ">
          <li className="bg-red-500 py-4 px-4 hover:border-b-4 border-line">
            Home
          </li>
          <li className="py-4 px-4 hover:border-b-4 border-line">Products</li>
          <li className="py-4 px-4 hover:border-b-4 border-line">
            Know Your Milk
          </li>
          <li className="py-4 px-4 hover:border-b-4 border-line">Shop</li>
        </ul>
      </div>

      <div>
        <ul className="flex gap-4 bg-yellow ">
          <li className="bg-red-500 py-4 px-4 hover:border-b-4 border-line">
            We Care
          </li>
          <li className='bg-red-500 py-4 px-4 hover:border-b-4 border-line'>About</li>
          <li className='bg-red-500 py-4 px-4 hover:border-b-4 border-line'>Best Practices</li>
          <li className='bg-red-500 py-4 px-4 hover:border-b-4 border-line'>My Account</li>
          <li className='bg-red-500 py-4 px-4 hover:border-b-4 border-line flex'>
            🛒 
            <div className=" -translate-y-2"><span className="bg-yellow 
            rounded-full p-1 text-sm ">0</span>
                </div>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}
