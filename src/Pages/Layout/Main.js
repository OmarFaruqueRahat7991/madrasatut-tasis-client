import React from 'react'

import { Outlet } from 'react-router'
import { Navbar } from '../Shared/Navbar/Navbar'
import { Footers } from '../Shared/Footers/Footers'


export const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footers></Footers>
    </div>
  )
}
