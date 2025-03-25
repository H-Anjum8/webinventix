import React from "react";

const FeatureCard = ({ image, title, description, isImageRight, highlightWords = [] }) => {
  return (
    <div
    className={`flex flex-col md:flex-row items-center  md:items-start gap-10 sm:gap-10 lg:gap-20 ${
      isImageRight ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* Image */}
    <img
      src={image}
      alt={title}
      className="flex flex-[50%] sm:w-96 order-2 md:order-1 object-contain"
    />
  
    {/* Content */}
    <div className="flex-[50%] order-1 md:order-2 space-y-3 flex flex-col justify-center">
      {/* Dynamically Styled Title */}
      <h2 className="text-4xl sm:text-5xl font-bold">
        {title.split(" ").map((word, index) => (
          <span
            key={index}
            className={
              highlightWords.includes(word)
                ? "text-transparent bg-clip-text bg-gradient-to-r from-black to-[#32e2bc] drop-shadow-lg"
                : ""
            }
          >
            {word}{" "}
          </span>
        ))}
      </h2>
  
      {/* Description */}
      <p className="text-gray-600 text-lg mt-2">{description}</p>
    </div>
  </div>
  );
};

export default FeatureCard;
