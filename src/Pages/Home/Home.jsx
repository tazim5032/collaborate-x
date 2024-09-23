import React from 'react'
import TopBar from './TopBar'

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      {/* <div className="flex flex-1">
        <SlidesPanel />
        <div className="flex-1">{children}</div>
        <UsersPanel />
      </div> */}
    </div>
  )
}

export default Home
