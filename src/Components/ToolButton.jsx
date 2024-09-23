import React from 'react'

const ToolButton = ({ tool, label }) => {
    return (
      <button className="bg-gray-600 hover:bg-gray-500 p-2 rounded">
        {label}
      </button>
    );
  };
  

export default ToolButton
