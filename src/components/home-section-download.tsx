import Image from "next/image";

export default function HomeSectionDownloadPage() {
  return (
    <section
      className="h-screen max-w-7xl mx-auto bg-blue-200 w-full py-20 px-16 flex justify-center items-center gap-8 "
      style={{ maxHeight: 700 }}
    >
      <div className="flex justify-between items-center gap-12">
        <div
          className="flex flex-col gap-4 bg-red-400 "
          style={{ width: "45%" }}
        >
          <div
            className="py-3 text-5xl lg:text-5xl font-bold bg-green-500"
            style={{ lineHeight: "1.2" }}
          >
            Download App
          </div> 
          <div className="leading-relaxed font-medium text-gray-600">
        <p className="font-bold">A one-stop destination for all your needs!</p>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, itaque autem. Labore sit repellat iusto assumenda sequi. Inventore possimus iure earum atque. Molestias doloribus eius laboriosam tempore unde. Fuga, quam?
          </p>
          </div>
          <div>
          <ul className="flex flex-wrap gap-3  ">
              <div className="bg-black rounded-3xl px-2 flex justify-center items-center h-10">
                <Image
                  width={20}
                  height={20}
                  className="px-2 w-10"
                  src="playstore.svg"
                  alt="playstore"
                /> 
                <span className="text-white">Google Play</span>
              </div>
              <div className="bg-black rounded-3xl px-2 flex justify-center items-center">
                <Image
                  width={20}
                  height={20}
                  className=" px-2 w-10"
                  src="/apple-logo.svg"
                  alt="ios download"
                />
                 <span className="text-white">Apple Store</span>
              </div>
            </ul>
          </div>
        </div>
        <div style={{ width: "60%" }}>
          <Image
                  
                  height={20} width={700} src="/car1.jpeg" alt="product image" />
        </div>
      </div>
    </section>
  );
}
