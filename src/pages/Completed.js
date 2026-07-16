import React from "react";
import TaskList from "../components/TaskList";


const Completed = () => {

return (

<div className="mt-10">

<h1 className="text-4xl font-bold text-white">
Completed Tasks ✅
</h1>

<p className="text-blue-200 mt-3">
Your finished work.
</p>

<TaskList onlyCompleted={true}/>

</div>

);

};


export default Completed;