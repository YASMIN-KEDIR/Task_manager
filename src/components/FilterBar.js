import React from "react";


const FilterButtons=({filter,setFilter})=>{


const buttons=[
"ALL",
"URGENT",
"HIGH",
"MEDIUM",
"LOW"
];


return(

<div className="flex gap-3 mt-5 flex-wrap">


{
buttons.map(btn=>(

<button

key={btn}

onClick={()=>setFilter(btn)}

className={`
px-5 py-2 rounded-full
transition
${
filter===btn
?
"bg-cyan-500 text-white"
:
"bg-white/10 text-blue-200"
}
`}

>

{btn}

</button>

))
}


</div>

);


};


export default FilterButtons;