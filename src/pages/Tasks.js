import React, { useState } from "react";
import TaskList from "../components/TaskList";

const Tasks = () => {

  const [refresh, setRefresh] = useState(false);

  return (
    <div className="mt-10">

      <h1 className="text-4xl font-bold text-white">
        My Tasks
      </h1>

      <div className="mt-8">
        <TaskList 
          refresh={refresh}
        />
      </div>

    </div>
  );
};

export default Tasks;