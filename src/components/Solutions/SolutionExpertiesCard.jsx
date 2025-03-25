
import React from 'react'
import { Link } from 'react-router-dom'
const SolutionExpertiesCard = ({image,title,description,path}) => {
  return (
    <>
            <div  className=" space-y-8 flex flex-col justify-center items-center rounded-lg  sm:h-[600px] md:h-[800px] lg:h-[650px]  text-center p-4">
                            <img
                                src={image}
                                alt={title}
                                className="w-[50%] h-48  object-cover"
                            />
                            <h1 className="text-3xl sm:text-3xl font-semibold mt-4 text-black">
                                {title}
                            </h1>
                           
                            <p className=" text-md mt-2  text-black">{description}</p>
                            {/* <div className="flex justify-center items-center">
                                <Link to={path}
                                    onClick={() => window.scrollTo(0, 0)}
                                    className="px-6   md:absolute   py-3 cursor-pointer  text-[#32e2bc]  ">
                                    LEARN MORE
                                </Link>
                            </div> */}
                        </div>



        </>
  )
}

export default SolutionExpertiesCard




