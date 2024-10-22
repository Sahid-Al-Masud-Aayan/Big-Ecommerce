import React from 'react'
import Navbar2 from '../Components/Navbar2'
import { Outlet } from 'react-router-dom'

const LayoutTwo = () => {
  return (
    <div>
      <Navbar2/>
      <Outlet/>
    </div>
  )
}

export default LayoutTwo
