import React from 'react'
import { Footer } from '../Shared/Footer/Footer'

import { Outlet } from 'react-router'
import { Navbar } from '../Shared/Navbar/Navbar'


export const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
