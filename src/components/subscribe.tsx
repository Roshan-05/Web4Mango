export default function Subscribe(){
    return (
        <>
        <div className="mt-5 flex justify-between items-center gap-3 ">
          <div className="text-2xl  font-bold bg-white">
            Subscribe Now
          </div>
          <div className="bg-white ">
            <ul className="flex flex-wrap gap-1 justify-end ">
              <li>
                <img
                  className="bg-black rounded-full p-2 w-10"
                  src="playstore.svg"
                  alt="playstore"
                />
              </li>
              <li>
                <img
                  className="bg-black rounded-full p-2 w-10"
                  src="apple-logo.svg"
                  alt="ios download"
                />
              </li>
            </ul>
          </div>
        </div>
        </>
    )
}