//feature: if the text is too long then truncate it and show "see more"
//Implement this feature

type feedbackProps = {
    feedback :{
        message : string,
        username: string
    }
}

export default function ComplimentsCard(props:feedbackProps){
    return (
            <div className=" bg-white min-h-96 max-w-[22rem] p-5 translate-x-3">
                <p className="text-center mt-6">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum quasi porro explicabo sit, beatae sint obcaecati deleniti. Dicta repellat nihil cupiditate saepe accusantium sed enim architecto vel, alias officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dolor harum perspiciatis libero, minima necessitatibus expedita culpa aliquam nemo ratione, animi fugit perferendis rerum eum odio nulla iste, sapiente praesentium.
                </p>
                <p className="text-center mt-10">
Akhilesh Jha
                </p>

            </div>

        
    )
}