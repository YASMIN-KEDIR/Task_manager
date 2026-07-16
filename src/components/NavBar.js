import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {

  return (

    <nav className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-white">
        📝 TaskFlow
      </h1>


      <div className="flex gap-6">

        <NavLink 
          to="/"
          className="text-blue-100 hover:text-cyan-400"
        >
          Dashboard
        </NavLink>


        <NavLink 
          to="/tasks"
          className="text-blue-100 hover:text-cyan-400"
        >
          Tasks
        </NavLink>


        <NavLink 
          to="/completed"
          className="text-blue-100 hover:text-cyan-400"
        >
          Completed
        </NavLink>


      </div>


    </nav>

  );
};


export default Navbar;