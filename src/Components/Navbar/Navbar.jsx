import React from 'react';
import { FaPencilAlt, FaSquare, FaCircle, FaArrowRight, FaFont, FaFilePdf } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <NavButton icon={<FaPencilAlt />} label="Draw" />
          <NavButton icon={<FaSquare />} label="Rectangle" />
          <NavButton icon={<FaCircle />} label="Circle" />
          <NavButton icon={<FaArrowRight />} label="Arrow" />
          <NavButton icon={<FaFont />} label="Text" />
        </div>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center"
          onClick={() => exportToPDF()}
        >
          <FaFilePdf className="mr-2" /> Export as PDF
        </button>
      </div>
    </nav>
  );
};

const NavButton = ({ icon, label }) => {
  return (
    <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 p-2 rounded-md">
      {icon}
      <span>{label}</span>
    </button>
  );
};

// Dummy function to demonstrate PDF export
const exportToPDF = () => {
  console.log("Exporting as PDF...");
};

export default Navbar;
