//make a new carousel cal the card carousel that would be used

import ComplimentsCarousel from "./compliments-carousel";

export default function Compliments(){
    const compliments = [
        {message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum quasi porro explicabo sit, beatae sint obcaecati deleniti. Dicta repellat nihil cupiditate saepe accusantium sed enim architecto vel, alias officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dolor harum perspiciatis libero, minima necessitatibus expedita culpa aliquam nemo ratione, animi fugit perferendis rerum eum odio nulla iste, sapiente praesentium.", username:"Akhilesh Jha"},
        {message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum quasi porro explicabo sit, beatae sint obcaecati deleniti. Dicta repellat nihil cupiditate saepe accusantium sed enim architecto vel, alias officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dolor harum perspiciatis libero, minima necessitatibus expedita culpa aliquam nemo ratione, animi fugit perferendis rerum eum odio nulla iste, sapiente praesentium.", username:"Akhilesh Jha"},
        {message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum quasi porro explicabo sit, beatae sint obcaecati deleniti. Dicta repellat nihil cupiditate saepe accusantium sed enim architecto vel, alias officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dolor harum perspiciatis libero, minima necessitatibus expedita culpa aliquam nemo ratione, animi fugit perferendis rerum eum odio nulla iste, sapiente praesentium.", username:"Akhilesh Jha"},
        {message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum quasi porro explicabo sit, beatae sint obcaecati deleniti. Dicta repellat nihil cupiditate saepe accusantium sed enim architecto vel, alias officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dolor harum perspiciatis libero, minima necessitatibus expedita culpa aliquam nemo ratione, animi fugit perferendis rerum eum odio nulla iste, sapiente praesentium.", username:"Akhilesh Jha"}
    ]

    return (
        <section className="h-screen max-h-[700px] max-w-7xl mx-auto bg-yellow w-full py-14 box-border">
            <div className="bg-red-700 text-center w-full px-96 min-w-72 py-2">
                <p className="text-5xl font-bold bg-green-500 mb-6"
            style={{ lineHeight: "1.2" }}>
Creamy Compliments 
                </p>
                <p className="text-line font-semibold">
We're proud of our product, and we're really excited when they get a feedback from the customers.
                </p>
            </div>
            <div className="h-[32rem] pt-12 bg-red-500">
<ComplimentsCarousel feedback={compliments}/>
            </div>

        </section>
    )
}