import React from "react";

const AI_Card = ({ title, h1,description1,h2,description2,h3,description3, image, isImageRight }) => {
  return (
    <div
    className={`flex flex-col md:flex-row items-center  md:items-start gap-10 sm:gap-20 ${isImageRight ? "md:flex-row-reverse" : ""
      }`}
  >
    {/* Image */}
    <img src={image} alt={title} className="flex flex-[50%] sm:w-96 order-2 md:order-1 object-contain" />

    {/* Content */}
    <div className="flex-[50%] order-1 md:order-2 space-y-6 md:space-y-1">


      {/* Dynamically Styled Title */}
      <h1 className="text-lg  md:text-sm  font-bold text-green-600 "  >
        {title}
      </h1>
      <h2 className=" text-2xl md:text-2xl" style={{ fontFamily: 'Cabinet Grotesk', fontWeight: 800,}}>{h1}</h2>
      {description1.split("\n\n").map((para, index) => (
          <p key={index} className="text-gray-600 text-sm mt-2">
            {para}
          </p>
        ))}
      
      {/* <p  className="text-gray-600 text-lg mt-2">
        {description1}
      </p> */}
      
      <h2 className=" text-2xl md:text-2xl "  style={{ fontFamily: 'Cabinet Grotesk', fontWeight: 800 }}>{h2}</h2>
      <p  className="text-gray-600 text-sm mt-2">
        {description2}
      </p>
      <h2 className=" text-2xl md:text-2xl"  style={{ fontFamily: 'Cabinet Grotesk', fontWeight: 800 }}>{h3}</h2>
      <p  className="text-gray-600 text-sm  mt-2">
        {description3}
      </p>
      
    
    </div>
  </div>

  );
};

export default AI_Card;