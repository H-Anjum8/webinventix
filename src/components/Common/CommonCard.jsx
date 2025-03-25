import React from 'react'

const CommonCard = ({ heading, title, subtitle, description, learnTitle, IsBtn, learnPoints, callToAction, image

}) => {
    return (
        <>
           

            <section className="relative  bg-amber-400 2xl:bg-amber-800 mx-auto py-20 text-white sm:px-4 sm:py-4 md:px-0 md:py-0 lg:px-20 lg:py-4 sm:h-screen lg:h-[600px]  flex items-center ">
                {/* Background Image */}
                <div
                    className="absolute  inset-0 bg-cover 2xl:object-contain  bg-no-repeat bg-center w-full"
                    style={{
                        backgroundImage: `url(${image})`
                    }}
                ></div>

                {/* Content */}
                <div className="relative py-4 z-10 max-w-[90%] lg:max-w-[40%] space-y-2 sm:space-y-5 sm:w-[70%] lg:w-[60%] px-6 sm:px-4 bg-black sm:bg-black/50 backdrop-blur-md rounded-md">
                    <p className="text-[#5de0c0] text-sm font-semibold uppercase">
                        {heading}
                    </p>
                    <h2 className="text-2xl sm:text-5xl md:text-4xl lg:text-4xl  font-semibold ">
                        {title}
                    </h2>
                    {subtitle?.split("\n\n").map((para, index) => (
                        <p key={index} className="text-md font-semibold ">
                            {para}
                        </p>
                    ))}
                   

                    <p className="text-md ">
                        {description}
                    </p>
                    <h1 className="font-bold  text-xl text-[#5de0c0]">
                        {learnTitle}
                    </h1>

                    <ul className="list-disc text-gray-300 ml-5  sm:space-y-2 mt-6 text-sm pl-6 pr-4">
                        {learnPoints?.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                    <h1 className=" text-md sm:text-xl font-semibold">
                        {callToAction}
                    </h1>

                    {IsBtn && <div className=" flex justify-center md:justify-start">
                        <a
                            href="#"
                            className="bg-[#32e2bc] text-blue-950 font-semibold py-3 px-12 hover:bg-green-600 transition duration-300"
                        >
                            READ BLOG POST
                        </a>
                    </div>}
                </div>
            </section>




        </>
    )
}

export default CommonCard

