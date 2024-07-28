import Image from "next/image";

export default function CustomerCare() {
  return (
    <section className="bg-green-200 max-w-6xl mx-auto rounded-2xl p-2 px-10">
      <div className="bg-red-300 my-6 p-2 mx-28 px-20 text-center">
        <p className="text-4xl font-bold">Customer Care</p>
        <p className="text-gray-500 py-3 pt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>
      <div className="bg-red-400 flex justify-between text-sm font-semibold">
        {/* section for the three contacts  */}
        <div className="flex border-2 bg-white py-2 min-w-64 rounded-3xl justify-center ">
          <div className="flex bg-green-300 px-10 ">
            <Image src="/car1.jpeg" alt="car logo" width={20} height={20} />
            +91 0000000000
          </div>
        </div>
        <div className="flex border-2 bg-white py-2 min-w-64 rounded-3xl justify-center ">
        <div className="flex bg-green-300 px-10 ">
            <Image src="/car1.jpeg" alt="phone logo" width={20} height={20} />
            +91 0000000000
          </div>
        </div>
        <div className="flex border-2 bg-white py-2 min-w-64 rounded-3xl justify-center ">
        <div className="flex bg-green-300 px-10 ">
            <Image src="/car1.jpeg" alt="mail logo" width={20} height={20} />
            example@web4mango.com
          </div>
        </div>
      </div>
      <div className=" bg-red-300 my-6 p-2 mx-28 px-16 text-center">
        <p className="text-gray-500 py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ex,
          assumenda
        </p>
      </div>
    </section>
  );
}
