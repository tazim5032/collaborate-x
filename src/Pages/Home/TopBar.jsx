import React from 'react'
import ToolButton from '../../Components/Toolbutton'

const TopBar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex items-center space-x-4">
    <ToolButton tool="draw" label="Draw" />
    <ToolButton tool="rectangle" label="Rectangle" />
    <ToolButton tool="circle" label="Circle" />
    <ToolButton tool="arrow" label="Arrow" />
    <ToolButton tool="text" label="Text" />
    <ToolButton tool="export" label="Export PDF" />
  </div>
  )
}

export default TopBar
