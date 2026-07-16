import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import CreateTask from "./pages/CreateTask"
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Completed from "./pages/Completed";
import Today from "./pages/Today";

function App() {

return (

<BrowserRouter>

<div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-6">

<div className="max-w-7xl mx-auto">


<NavBar />

<Routes>

  <Route path="/today" element={<Today/>}/>

<Route path="/" element={<Dashboard/>}/>

<Route path="/tasks" element={<Tasks/>}/>

<Route path="/completed" element={<Completed/>}/>

<Route  path="/tasks/create" element={<CreateTask />}  />


</Routes>


</div>

</div>

</BrowserRouter>

);

}


export default App;