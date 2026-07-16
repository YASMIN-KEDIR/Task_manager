import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks } from "../services/api";


const Dashboard = () => {

  const navigation = useNavigate();

  const [tasks, setTasks] = useState([]);


  const redirecttotask = () => {
    navigation("/tasks");
  };


  useEffect(() => {

    const fetchTasks = async () => {

      try {

        const response = await getTasks();

        setTasks(response.data);

      } catch (error) {

        console.log("Error fetching tasks:", error);

      }

    };


    fetchTasks();

  }, []);



  // Card calculations

  const totalTasks = tasks.length;


  const inProgressTasks = tasks.filter(
    task => task.status === "IN_PROGRESS"
  ).length;


  const completedTasks = tasks.filter(
    task => task.status === "COMPLETED"
  ).length;


  const urgentTasks = tasks.filter(
    task => task.priority === "HIGH" || task.priority === "URGENT"
  ).length;



  return (

    <div className="mt-10">


      <h1 className="text-5xl font-bold text-white">
        Good morning 👋
      </h1>


      <p className="text-blue-200 mt-3 text-lg">
        Organize your work and stay productive.
      </p>



      <div className="grid md:grid-cols-4 gap-6 mt-10">



        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">

          <p className="text-blue-200">
            Total Tasks
          </p>

          <h2 className="text-4xl text-white font-bold mt-3">
            {totalTasks}
          </h2>

        </div>




        <div className="bg-blue-500/20 rounded-3xl p-6">

          <p className="text-blue-200">
            In Progress
          </p>

          <h2 className="text-4xl text-white font-bold mt-3">
            {inProgressTasks}
          </h2>

        </div>





        <div className="bg-green-500/20 rounded-3xl p-6">

          <p className="text-green-200">
            Completed
          </p>

          <h2 className="text-4xl text-white font-bold mt-3">
            {completedTasks}
          </h2>

        </div>





        <div className="bg-red-500/20 rounded-3xl p-6">

          <p className="text-red-200">
            Urgent
          </p>

          <h2 className="text-4xl text-white font-bold mt-3">
            {urgentTasks}
          </h2>

        </div>


      </div>





      <div className="mt-12 bg-white/10 rounded-3xl p-8">


        <h2 className="text-2xl font-bold text-white">
          Quick Actions
        </h2>



        <button
          onClick={redirecttotask}
          className="mt-5 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl"
        >
          + Create New Task

        </button>
        <p>To check tasks</p>


      </div>



    </div>

  );
};


export default Dashboard;