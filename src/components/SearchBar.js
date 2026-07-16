import React from "react";


const SearchBar = ({search,setSearch})=>{


return (

<input

type="text"

placeholder="🔍 Search tasks..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="
w-full
bg-white/10
border
border-white/20
rounded-xl
px-5
py-3
text-white
placeholder-blue-200
outline-none
focus:ring-2
focus:ring-cyan-400
"

/>

);

};


export default SearchBar;