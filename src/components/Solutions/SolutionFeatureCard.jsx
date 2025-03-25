import React from 'react'

const SolutionFeatureCard = ({ image, title, link, heading, items, id }) => {
    
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
                <h2 className="text-2xl sm:text-5xl md:text-4xl lg:text-4xl  font-semibold ">
                        {heading}
                    </h2>
                    <ul className="space-y-4">
                        {items?.map((item) => (
                            <li key={item.feature_id} className="flex flex-col items-start space-x-4">
                                <div className=' flex gap-2 space-y-2'>
                                <span className="font-bold text-lg">{item.feature_id}</span>
                                <p >
                                    {item.title}
                                </p>
                                </div>
                                
                                <a href={item.link} className="text-sm mt-4 px-6 hover:underline">
                                    Read the blog
                                </a>
                            </li>
                        ))}
                    </ul>
                    
    





                   
                </div>
            </section>


            {/* <div key={id} className="flex flex-col space-y-2">
                    <h1 className='text-3xl sm:text-5xl'>Key Benefits for Online Security</h1>
                    <div className=' flex text-white '>
                        <span className="font-bold">{id}</span>
                        <h3 className="text-sm font-semibold">{title}</h3>
                    </div>

                    <a href={link} className="text-sm text-gray-400 uppercase underline">
                        See Case Study
                    </a>
                </div> */}






        </>
    )
}

export default SolutionFeatureCard








