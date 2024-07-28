type nutritionalValues ={
    nutrientValues:{
        name:string,
        value:string
    }[]
}

export default function NutritionalBenefitsValues(props:nutritionalValues){
    return (
    <div>
        
        {
            props.nutrientValues.map(({name, value}, index)=>(
                <div key={index} className="grid grid-cols-3 text-gray-600 leading-relaxed border-gray-600 border-b-2 py-2 px-4">
                    <p className="col-span-2">{name}</p>
                    <p className="font-bold">{value} </p>
    
                </div>
            ))
        }
    </div>
)
    
}