//feature: if the text is too long then truncate it and show "see more"
//Implement this feature

import './style.css'

export default function StoreLocatorCard() {
  return (
    <div className="bg-zinc-100 hover:bg-zinc-200 cursor-pointer max-w-[22rem] min-h-96 p-4 text-line flex flex-col justify-between">
      <div className="flex flex-col justify-center items-center">
        <div
          className=" bg-orange-400 w-14 h-14 p-3 text-2xl font-bold rounded-full flex justify-center mt-2 mb-5
         "
        >
          0
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-lg font-bold mb-8 bg-green-400">Deepthi Super Market(KondaPur)</p>
          <p className="bg-green-400" >
          <img className="inline" src="pin-drop-small.png" alt="image of the drop location"/>Inside Sky Lounge, Hitex Road, Shilpa Hills, Kohtaguda, hyderabad,
            Telangana 500084
          </p>
        </div>
    
      </div>
      {/* <div className="border border-line  "></div> */}
      <div className="text-blue-400 border-t-2 border-line py-4 flex justify-center items-center hover:text-black">Get Directions</div>
    </div>
  );
}
