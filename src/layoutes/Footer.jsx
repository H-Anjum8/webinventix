import React from 'react'
import footer from '../../src/assets/images/logo.png'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-1">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start space-y-8 md:text-left">
      
      {/* Logo Section */}
      <Link to="/"  onClick={() => window.scrollTo(0, 0)}  className="flex flex-col items-center ">
        <img src={footer} alt="WebInventix Logo" className=" w-[80%]" />
      </Link>

      {/* Navigation Links */}
      <div className="sm:grid sm:grid-cols-2 text-md gap-6  ">
        <div className="font-semibold flex flex-col space-y-6 ">
          <Link to='/services'  onClick={() => window.scrollTo(0, 0)} >Services</Link>
          <Link to='/industries'  onClick={() => window.scrollTo(0, 0)} >Industries</Link>
          <Link to="/solutionspage"  onClick={() => window.scrollTo(0, 0)} >Solutions</Link>
          
        </div>
        <div className="font-semibold flex flex-col space-y-6  ">
        <Link to="/blog"  onClick={() => window.scrollTo(0, 0)} >Blog</Link>
          <Link to="/casestudies"  onClick={() => window.scrollTo(0, 0)} >Case Studies</Link>
          <Link to="/"  onClick={() => window.scrollTo(0, 0)} >Contact Us</Link>
         
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-sm space-y-2">
        <p>© 2025 Web Inventix AI</p>
        <p>180 John St. Toronto, Canada. M5T 1X5</p>
        <p>1-437-296-0277</p>
        <p>info@webinventix.ai</p>
        {/* Social Media Icons */}
      <div className="flex justify-start gap-4 mt-3">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-[#32e2bc] text-2xl hover:text-white" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-[#32e2bc] text-2xl hover:text-white" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-[#32e2bc] text-2xl hover:text-white" />
        </a>
      </div>
      </div>

    </div>
  </footer>
  )
}

export default Footer