import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks } from "../services/api";



const Dashboard = () => {

  const navigation = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
const [tableTitle, setTableTitle] = useState("All Tasks");
const [isModalOpen, setIsModalOpen] = useState(false);


  const redirecttotask = () => {
    navigation("/tasks/create");
  };
const showAllTasks = () => {
  setFilteredTasks(tasks);
  setTableTitle("All Tasks");
  setIsModalOpen(true);
};

const showInProgress = () => {
  setFilteredTasks(
    tasks.filter(task => task.status === "IN_PROGRESS")
  );
  setTableTitle("In Progress Tasks");
  setIsModalOpen(true);
};

const showCompleted = () => {
  setFilteredTasks(
    tasks.filter(task => task.status === "COMPLETED")
  );
  setTableTitle("Completed Tasks");
  setIsModalOpen(true);
};

const showUrgent = () => {
  setFilteredTasks(
    tasks.filter(
      task =>
        task.priority === "HIGH" ||
        task.priority === "URGENT"
    )
  );
  setTableTitle("Urgent Tasks");
  setIsModalOpen(true);
};


  useEffect(() => {

    const fetchTasks = async () => {

      try {

        const response = await getTasks();

      setTasks(response.data);
setFilteredTasks(response.data);

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



        <div  onClick={showAllTasks} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">

          <p   className="text-blue-200">
            Total Tasks
          </p>

          <h2 className="text-4xl text-white font-bold mt-3">
            {totalTasks}
          </h2>

        </div>




        <div onClick={ showInProgress } className="bg-blue-500/20 rounded-3xl p-6">

          <p className="text-blue-200">
            In Progress
          </p>

          <h2 className="text-4xl text-white font-bold mt-3">
            {inProgressTasks}
          </h2>

        </div>





        <div onClick={showCompleted} className="bg-green-500/20 rounded-3xl p-6">

          <p className="text-green-200">
            Completed
          </p>

          <h2 className="text-4xl text-white font-bold mt-3">
            {completedTasks}
          </h2>

        </div>





        <div  onClick={showUrgent} className="bg-red-500/20 rounded-3xl p-6">

          <p className="text-red-200">
            Urgent
          </p>

          <h2 className="text-4xl text-white font-bold mt-3">
            {urgentTasks}
          </h2>

        </div>


      </div>





      <div className="mt-12 bg-white/10 rounded-3xl p-8">


       



        <div className="flex justify-center mt-6">
  <button
    onClick={redirecttotask}
    className="w-64 bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg py-4 rounded-2xl border-2 border-cyan-300 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
  >
    + Create New Task
  </button>
</div>
    


      </div>
{isModalOpen && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

    <div className="bg-slate-900 w-11/12 max-w-5xl rounded-2xl shadow-2xl p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-white">
          {tableTitle}
        </h2>

        <button
          onClick={() => setIsModalOpen(false)}
          className="text-white text-3xl hover:text-red-400"
        >
          &times;
        </button>

      </div>

      <div className="overflow-x-auto max-h-[500px]">

        <table className="w-full text-white">

          <thead className="bg-slate-800 sticky top-0">

            <tr>

              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Priority</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Due Date</th>

            </tr>

          </thead>

          <tbody>

            {filteredTasks.length > 0 ? (

              filteredTasks.map(task => (

                <tr
                  key={task.id}
                  className="border-b border-slate-700 hover:bg-slate-800"
                >

                  <td className="p-3">{task.title}</td>

                  <td className="p-3">
                    {task.priority}
                  </td>

                  <td className="p-3">
                    {task.status}
                  </td>

                  <td className="p-3">
                    {task.dueDate}
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="4"
                  className="text-center p-8 text-gray-400"
                >
                  No tasks found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>

  </div>
)}
    </div>

  );
};


export default Dashboard;