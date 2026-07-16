import React, { useState, useEffect } from 'react';
import { getTasks } from '../services/api';
import TaskItem from './TaskItem';
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'

const TaskList = ({ refresh, onlyCompleted=false }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search,setSearch] = useState("");
  const [filter,setFilter] = useState("ALL");


  useEffect(() => {
    loadTasks();
  }, [refresh]);

  const loadTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading tasks:', error);
      setLoading(false);
    }
  };

  if (loading) return <div><p className="text-white">Loading...</p></div>;

   let filteredTasks = tasks;

   if(onlyCompleted){
    filteredTasks = filteredTasks.filter(
      task => task.status === "COMPLETED"
    );
  }


  // Search
  filteredTasks = filteredTasks.filter(task =>
    task.title
    .toLowerCase()
    .includes(search.toLowerCase())
  );


  // Priority filter
  if(filter !== "ALL"){

    filteredTasks = filteredTasks.filter(
      task => task.priority === filter
    );

  }


  // Urgent first
  filteredTasks.sort((a,b)=>{

    const priority={
      URGENT:4,
      HIGH:3,
      MEDIUM:2,
      LOW:1
    };


return priority[b.priority]-priority[a.priority];

});

return (

<div>


<SearchBar 
 search={search}
 setSearch={setSearch}
/>


<FilterBar
 filter={filter}
 setFilter={setFilter}
/>



<h2 className="text-3xl text-white font-bold mt-8">
Tasks ({filteredTasks.length})
</h2>


<div className="grid md:grid-cols-2 gap-6 mt-6">


{
filteredTasks.map(task=>(

<TaskItem
key={task.id}
task={task}
onTaskUpdated={loadTasks}
/>

))
}


</div>


</div>

);

};

export default TaskList;