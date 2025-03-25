import React from 'react'
import footer from '../../src/assets/images/logo.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-1">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start space-y-8 md:text-left">
      
      {/* Logo Section */}
      <div className="flex flex-col items-center ">
        <img src={footer} alt="WebInventix Logo" className=" w-[80%]" />
      </div>

      {/* Navigation Links */}
      <div className="sm:grid sm:grid-cols-2 text-md gap-6  ">
        <div className="font-semibold space-y-6 ">
          <p >Services</p>
          <p>Industries</p>
          <p>Solutions</p>
        </div>
        <div className="font-semibold space-y-6  ">
          <p >Blog</p>
          <p>Case Studies</p>
          <p>Contact Us</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-sm space-y-2">
        <p>© 2025 Web Inventix AI</p>
        <p>180 John St. Toronto, Canada. M5T 1X5</p>
        <p>1-437-296-0277</p>
        <p>info@webinventix.ai</p>
      </div>

    </div>
  </footer>
  )
}

export default Footer