export default function BulkOrders() {
  return (
    <section className="bg-blue-200 max-w-6xl max-auto rounded-2xl p-6 flex gap-4 justify-center items-center">
      <div className="w-1/2   p-2 rounded-2xl flex justify-center items-center">
        {/* source of the video */}
        <video src="" className="rounded-2xl max-h-64"></video>
      </div>
      <div className="w-1/2   my-4 p-2">
        <p className="text-4xl font-bold"> Bulk Orders</p>
        <p className="text-gray-500 py-3 pt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          sequi nesciunt quam alias, eaque debitis tenetur consectetur cum vitae
          odit enim in atque maxime voluptate accusamus eos accusantium, fugiat
          eveniet?
        </p>
        <button className="bg-white rounded-3xl px-3 text-sm font-semibold py-2">
          Order Now
        </button>
      </div>
    </section>
  );
}
