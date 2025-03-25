import React from 'react'

const ServiceHeaderSection = ({image, title, description}) => {
  return (
    <section className="relative bg-black  container mx-auto   text-white px-4  py-14  flex items-center">
    {/* Background Image */}
    <div
      className="absolute inset-0  object-cover bg-center h-full bg-no-repeat  w-full "
      style={{
        backgroundImage: `url(${image})`,

      }}
    ></div>

    {/* Content */}
    <div className="relative z-10  w-full px-2 sm:px-14 sm:w-[60%] lg:w-[68%] ">
      <h2 className="text-4xl sm:text-6xl font-medium mb-4">
        {title}
      </h2>
      <p className="mt-4 text-gray-300 text-lg max-w-lg">
        {description}
      </p>
      {/* <hr className=' h-2'></hr> */}
      {/* <div className="border-t border-white w-80 h-4 mx-auto sm:mx-2 my-6"></div>
            <button className="px-6 py-3 cursor-pointer bg-gradient-to-r from-[#32e2bc] to-[#94e8d3] text-black font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
              Contact Us
            </button> */}
         
    </div>
   
  </section>
  )
}

export default ServiceHeaderSection