import React, { useState } from "react";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";


const Tasks = () => {

  const [refresh,setRefresh] = useState(false);


  const handleTaskCreated = () => {
    setRefresh(!refresh);
  };


  return (

    <div className="mt-10">


      <h1 className="text-4xl font-bold text-white">
        My Tasks
      </h1>


      <p className="text-blue-200 mt-2">
        Create, manage and track your tasks.
      </p>



      <div className="mt-8">

        <TaskForm 
          onTaskCreated={handleTaskCreated}
        />

      </div>



      <div className="mt-10">

        <TaskList 
          refresh={refresh}
        />

      </div>


    </div>

  );
};


export default Tasks;