import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ title, h1, description1, h2, description2, h3, description3, image, isImageRight }) => {
    return (
        <>
            <div
                className={`flex flex-col md:flex-row items-center  md:items-start gap-10 sm:gap-20 ${isImageRight ? "md:flex-row-reverse" : ""
                    }`}
            >
                {/* Image */}
                <img src={image} alt={title} className="flex flex-[50%] sm:w-96 order-2 md:order-1 object-contain" />

                {/* Content */}
                <div className="flex-[50%] order-1 md:order-2 md:space-y-2 xl:space-y-6 space-y-6 md:space-x-1">


                    {/* Dynamically Styled Title */}
                    <h1 className="text-3xl md:text-3xl lg:text-5xl  md:font-semibold font-bold  "  >
                        {title}
                    </h1>
                    <h2 className=" text-xl md:text-md text-gray-800" style={{ fontFamily: 'Cabinet Grotesk', fontWeight: 800, }}>{h1}</h2>
                    {description1?.split("\n\n").map((para, index) => (
                        <p key={index} className="text-gray-600 text-md mt-2">
                            {para}
                        </p>
                    ))}


                    <h2 className="  text-xl md:text-md text-gray-800" style={{ fontFamily: 'Cabinet Grotesk', fontWeight: 800 }}>{h2}</h2>
                    {description2?.split("\n\n").map((para, index) => (
                        <p key={index} className="text-gray-600 text-md mt-2">
                            {para}
                        </p>
                    ))}
                    <h2 className="  text-xl md:text-md text-gray-800" style={{ fontFamily: 'Cabinet Grotesk', fontWeight: 800 }}>{h3}</h2>
                    {description3?.split("\n\n").map((para, index) => (
                        <p key={index} className="text-gray-600 text-md mt-2">
                            {para}
                        </p>
                    ))}
                    <div className='flex justify-center md:justify-start'>
                        <a  href="mailto:your-email@example.com"
                            className="  px-8 py-3 bg-gradient-to-r from-[#32e2bc] rounded-sm to-[#94e8d3] text-black font-semibold  shadow-lg hover:shadow-xl transition-all duration-300  ">
                            Conatct Us
                        </a>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Card

