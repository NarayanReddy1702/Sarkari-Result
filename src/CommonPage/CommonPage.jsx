import React from 'react'
import Nav from '../Navigation/Nav'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function CommonPage() {
  return (
   <>
   <Nav/>
   <Outlet/>
   <Footer />
   </>
  )
}
