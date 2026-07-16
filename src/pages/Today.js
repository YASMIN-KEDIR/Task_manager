import React from "react";
import TaskList from "../components/TaskList";

const Today = () => {

return (

<div className="mt-10">

<h1 className="text-4xl font-bold text-white">
Today's Tasks 📅
</h1>

<p className="text-blue-200 mt-3">
Focus on what needs to be done today.
</p>

<TaskList onlyToday={true}/>

</div>

);

};


export default Today;