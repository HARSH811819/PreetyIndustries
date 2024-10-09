import React from 'react'
import { Outlet } from 'react-router-dom'
import {HeaderNav,Footer} from "../index.js"
function Layout() {
  return (
    <>
    {/* <Banner/> */}
  
      {/* <HeaderNav/> */}
      <HeaderNav/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
