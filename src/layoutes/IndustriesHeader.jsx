import React from 'react'
import { Link } from 'react-router-dom'

const IndustriesHeader = () => {
     
    const navItems = [
     
        { name: "Automotive", path: "/industries/Automotive" },
        { name: "Financial", path: "/industries/Financial" },
        { name: "Healthcare", path: "/industries/Healthcare" },
        { name: "Manufacturing", path: "/industries/Manufacturing" },
        { name: "SupplyChain", path: "/industries/Supply-Chain" },
        { name: "Technology ", path: "/industries/Technology-and-SaaS" },
        { name: "Sports", path: "/industries/Sports" },
      
      
          ]
  return (
  <>
  <nav className=" text-white px-2 bg-black py-4">
      <div className="container mx-auto  xl:px-10  ">
        
        {/* Navigation Links */}
        <ul className="grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-4 place-items-center  bg-black px-6 text-white">
        {navItems.map((item) => (
          <li key={item.name} className="hover:text-[#32e2bc] hover:underline text-base cursor-pointer ">
          <Link
                to={item.path}
                className={`px-3 py-2 text-sm font-semibold transition duration-200 ease-in-out ${
                  location.pathname === item.path ? "text-[#32e2bc] border-b-2 border-[#32e2bc]" : "text-white hover:text-[#32e2bc]"
                }`}
              >
                {item.name}
              </Link>
            
          </li>
        ))}
        </ul>
      
          
      </div>
      

    </nav>
  
  </>
  )
}

export default IndustriesHeader