import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

export default function CommonLayout() {
  return (
    <>
      <div>
        <Header/>

        <Outlet/>
        
        <Footer></Footer>
      </div>
    </>
  )
}
