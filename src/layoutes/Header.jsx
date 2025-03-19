import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Solutions", path: "/solutionspage" },
    { name: "Case Studies", path: "/casestudies" },
    { name: "Blog", path: "/blog" },
  ];
  return (
    <header className=' bg-white z-[100] relative'>
   <nav className=" text-white bg-black  px-2 py-4">
      <div className="w-full mx-auto  xl:px-10 2xl:px-30 flex justify-between items-center">
        {/* Logo */}
        <div className=" text-2xl font-bold flex items-center">
         <img src={Logo} alt='logo' className='w-50 md:w-30 lg:w-40' />
        </div>

        {/* Navigation Links */}
        <ul className="hidden xl:flex space-x-6  text-[#72dac0]">
        {navItems.map((item) => (
          <li key={item.name} className="hover:text-cyan-300 text-2xl xl:text-xl cursor-pointer font-semibold">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
        </ul>
      
        <button className="xl:hidden mr-6 text-white  text-xl  lg:text-3xl  p-2 lg:font-extrabold bg-[#21d4a7] rounded-md " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu className=' ' />}
        </button>
        {/* Contact Button */}
        <button className="bg-[#44c4a4] hidden md:block text-black px-6 py-2 rounded-sm border border-white">
          Contact
        </button>

          {/* Mobile Menu Button */}
         
      </div>
       {/* Mobile Menu Dropdown */}
      {isOpen && (
  <div
  className={`lg:hidden absolute z-[100] top-16 left-0 w-[98%] bg-white shadow-md 
  transition-transform  duration-500 ease-in-out 
  transform origin-top 
  ${isOpen ? "scale-y-100 opacity-100  transition-transform  duration-300 ease-in-out " : "scale-y-0 opacity-0"}`}
>
  <ul className="space-y-1">
    {navItems.map((item) => (
      <li
        key={item.name}
        className={`text-lg px-2 py-1 cursor-pointer transition duration-300 ease-in-out ${
          location.pathname === item.path
            ? "bg-gray-700 text-white" // Active Tab
            : "text-gray-800 hover:bg-gray-200"
        }`}
      >
        <Link to={item.path} onClick={() => setIsOpen(false)}>
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

)}

    </nav>
  </header>
  )
}

export default Header