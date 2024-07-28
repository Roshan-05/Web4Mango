import Image from "next/image";
import NutritionalBenefitsValues from "./nutritional-benefits-value";
import Subscribe from "./subscribe";

const nutrientValues = [
    {name:'Total Energy', value:'296KCal'},
    {name:'Carbohydrate', value:'2.0g'},
    {name:'Protein', value:'18g'},
    {name:'Fat', value:'24g*'}


]

export default function NutritionalBenefits() {
  return (
    <section className="max-w-7xl mx-auto bg-pink-600 w-full py-20 px-20 flex justify-between items-center max-h-[700px]">
      <div className="" style={{ width: "50%" }}>
        <Image height={700} className={``} width={700} src="/car1.jpeg" alt="product image" />
      </div>

      <div
        className="flex flex-col gap-4 p-5 ml-10 lg:p-10 bg-red-400"
        style={{ width: "50%" }}
      >
        <div
          className="py-3 text-4xl lg:text-5xl font-bold bg-green-500"
          style={{ lineHeight: "1.2" }}
        >
          Nutritional Benefits
        </div>

        <p className="bg-green-500 leading-relaxed font-medium text-gray-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam exercitationem dolorem delectus nemo animi soluta
        </p>
        <div className="leading-relaxed">
            <p className="font-semibold">Nutritional Benefits</p>
            <p className="text-gray-600 font-light text-sm">*Minimum guaranteed values*</p>
        </div>

        <div className="">
            <NutritionalBenefitsValues nutrientValues={nutrientValues} />
        </div>
        
      </div>
    </section>
  );
}
