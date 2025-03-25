import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom';
import ServiceHeader from './ServiceHeader';


const MainLayout = ({ children }) => {
  // const location = useLocation();
  return (
    
   <div  >
    <Header />
    
{/* Service Header (Only on Service Page & Its Sub-Pages) */}
{/* {location.pathname.startsWith("/services") && <ServiceHeader />} */}
    <main>{children}</main>
    <Footer />
   </div>
    
  )
}

export default MainLayout
