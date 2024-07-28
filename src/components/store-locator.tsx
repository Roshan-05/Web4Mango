import StoreLocatorCard from "./store-locator-card";

export default function StoreLocator(){
    return (
        <section className="h-screen max-w-7xl mx-auto  w-full bg-red-400 py-20 px-20 flex flex-col gap-8 " style={{maxHeight:700}}>
            <div className=" text-5xl  font-bold bg-green-500"
            >
Store Locator
            </div>
            <div>
<StoreLocatorCard />
            </div>
        </section>
    )
}