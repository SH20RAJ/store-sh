import { Footer } from '@/components/sections/footer'
import { Navbar } from '@/components/sections/navbar'
import React from 'react'

export default function layout({ children}) {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}
