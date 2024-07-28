import Image from "next/image";

export default function HeroSectionInfo() {
  return (
    <section
      className="h-screen max-w-7xl mx-auto bg-light-yellow w-full py-20 px-20 flex justify-center items-center gap-8 "
      style={{ maxHeight: 700 }}
    >
      <div className="flex justify-center items-center gap-8 -translate-y-10">
        <div
          className="flex flex-col gap-4 bg-red-400 "
          style={{ width: "45%" }}
        >
          <div
            className="py-3 text-5xl lg:text-6xl font-bold bg-green-500"
            style={{ lineHeight: "1.2" }}
          >
            Your dairy dose of happiness.
          </div>

          <p className="bg-green-500 leading-relaxed font-medium text-gray-600">
            Our health is something that we never want to compromise on and
            Web4Mango helps you with wholesome dairy products for a balanced
            diet.
          </p>
        </div>
        <div style={{ width: "60%" }}>
          <Image width={700} height={700} src="/car1.jpeg" alt="product image" />
        </div>
      </div>
    </section>
  );
}
