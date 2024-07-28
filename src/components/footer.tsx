export default function Footer() {
  return (
    <div className="bg-yellow py-10">
      <section className="bg-gray-500 mx-10 mb-10 p-1">
        <div className="   grid grid-cols-5 gap-5 place-items-center">
          <div className="col-span-2 bg-slate-600 p-2">
            <div className="p-2">
              <p>logo</p>
            </div>
            <div className="p-2">
              <p className="text-sm">
                We have a vision of setting a new benchmark in the milk industry
                with superior quality dairy products, a sustainable ecosystem
                and a thriving relation with our farmers.
              </p>
            </div>
          </div>
          <div className="col-span-2 bg-slate-600">
            <div>
              <nav className="">
                <ul className="grid grid-cols-2 gap-3 font-semibold text-sm">
                  <li>Home</li>
                  <li>Know Your Milk</li>
                  <li>Products</li>
                  <li>Shop</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="bg-slate-600 gap-3 mr-5 p-2">
            <p className="text-xl font-thin">Follow Us</p>
            <div className="grid grid-cols-3 gap-5">
              <div>logo</div>
              <div>logo</div>
              <div>logo</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="  py-3 my-3 ">
          <div className="border-2 border-line  "></div>
        </div>
      </section>
      <section className="bg-gray-500 mx-10 mt-10 p-1 text-xs flex justify-between">
        <div>
          <div>@2024 Web4Mango All rights reserved</div>
        </div>
        <div>
          <ul className="flex gap-2">
            <li>Terms and Conditions</li>
            <li>|</li>
            <li>Refund Policy</li>
            <li>|</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
