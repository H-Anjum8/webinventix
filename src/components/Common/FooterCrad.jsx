import React from 'react'
import bgImg from '../../assets/images/footerCard.jpg'

const FooterCrad = ({ title,  subTitle,  description, 
    buttonText, 
    showLine ,
    onButtonClick }) => {
  return (
    <>
     <section 
      className="relative px-4 sm:px-20 "
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className='  flex flex-col md:flex-row   items-center justify-center  sm:gap-6 lg:px-20 py-16'>

       
      {/* Left Side - Title */}
      <h2 className="text-4xl sm:text-4xl font-bold mb-4 w-70  text-black" style={{ fontFamily: 'Cabinet Grotesk', fontWeight: 800, }}>
        {title}
      </h2>

      {/* Right Side - Text & Button */}
      <div className="sm:max-w-lg text-left ">
      {/* {showLine && <hr className="w-60 border-t-2  mb-4" />} */}
        <p className="text-md font-semibold text-green-500 mb-2">
          {subTitle}
        </p>
        <p className="text-gray-700  sm:w-[400px] mb-10">
          {description}
        </p>
        <a
         href="mailto:your-email@example.com"
          className="px-8 mt-10 py-2  cursor-pointer bg-gradient-to-r from-[#32e2bc] rounded-sm to-[#a3e4d4] text-black font-semibold  shadow-lg hover:shadow-xl transition-all duration-300 "
         
        >
          {buttonText}
        </a>
      </div>
      </div>
    </section>
    
    </>
  )
}

export default FooterCrad


