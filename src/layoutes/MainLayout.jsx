import React from 'react'
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({ children }) => {
  return (
    
   <div  className={`antialiased overflow-x-hidden w-full h-full flex flex-col`}>
    <Header />
    <main>{children}</main>
    <Footer />
   </div>
    
  )
}

export default MainLayout
