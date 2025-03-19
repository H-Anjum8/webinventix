import React from "react";

const FeatureCard = ({ image, title, description ,isImageRight}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center md:items-start gap-10 sm:gap-20 ${
        isImageRight ? "md:flex-row-reverse" : ""
      }`}
    >
       
             {/* Image */}
      <img src={image} alt={title} className="flex flex-[50%]  sm:w-96   order-2 md:order-1  object-contain " />
     
     

      {/* Content */}
      <div className="flex-[50%]  order-1 md:order-2 space-y-3">
        <div className="w-20 h-[2px] bg-green-500 mb-3"></div> 
        <h2 className="text-4xl sm:text-5xl font-normal">{title}</h2>
        <p className="text-gray-600 text-lg mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
