import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { IoMdAdd } from "react-icons/io";

const Root = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="flex flex-1">
        <div className="w-32 flex flex-col items-center">
            <button>
                <IoMdAdd className="text-4xl"></IoMdAdd>
            </button>
        </div>
        <div className="flex-1 border-4">
          <Outlet></Outlet>
        </div>
        <p>User Section</p>
      </div>
    </div>
  );
};

export default Root;
