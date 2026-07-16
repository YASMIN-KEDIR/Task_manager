import React, { useState } from "react";
import TaskForm from "../components/TaskForm";


const CreateTask = () => {

  return (

    <div className="mt-10">

      <h1 className="text-4xl font-bold text-white">
        Create Task
      </h1>


      <div className="mt-8">
<TaskForm />

      </div>


    </div>

  );
};


export default CreateTask;