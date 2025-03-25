import React from 'react'
import { Link } from 'react-router-dom'

const SevicesCard = ({ image, title, description, isImageRight,btnPath }) => {
  return (
    <>
      <div
        className={`flex flex-col md:flex-row items-center  md:items-start gap-10 sm:gap-20 ${isImageRight ? "md:flex-row-reverse" : ""
          }`}
      >
        {/* Image */}
        <img src={image} alt={title} className="flex flex-[50%] sm:w-96 order-2 md:order-1 object-contain" />

        {/* Content */}
        <div className="flex-[50%] order-1 md:order-2 space-y-6">


          {/* Dynamically Styled Title */}
          <h2 className="text-4xl sm:text-3xl md:text-4xl  font-bold  " style={{ fontFamily: 'Cabinet Grotesk', fontWeight: 800,fontSize: '2.5rem' }} >
            {title}
          </h2>
          {description.split("\n\n").map((para, index) => (
          <p key={index} className="text-gray-600 text-lg mt-2">
            {para}
          </p>
        ))}
          {/* <p className="text-gray-600 text-lg mt-2">{btnPath}</p> */}
          <div className='flex justify-center md:justify-start'>
          <Link to={btnPath} 
              onClick={() => window.scrollTo(0, 0)}
          className="  px-8 py-3 bg-gradient-to-r from-[#32e2bc] rounded-sm to-[#94e8d3] text-black font-semibold  shadow-lg hover:shadow-xl transition-all duration-300  ">
            LEARN MORE
          </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default SevicesCard