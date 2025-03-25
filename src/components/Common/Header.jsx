import React from 'react'



const Header = ({image, title, description,lineShow}) => {
  return (
    <>
   <section className="relative   container mx-auto   text-white px-10  py-20  flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover  h-full bg-no-repeat bg-center w-full "
        style={{
          backgroundImage: `url(${image})`,
 
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl space-y-4  px-10 w-full sm:w-[60%] lg:w-[68%] ">
        <h2 className="text-4xl sm:text-6xl font-medium mb-4">
          {title}
        </h2>
        <p className="mt-4 text-gray-300 text-lg max-w-lg">
          {description}
        </p>
        {/* {lineShow && <hr className="w-90 border-t-2  mt-8"/>} */}
        
      </div>
    </section>














{/* <div className="max-w-7xl mx-auto gap-2  lg:px-14 sm:flex-row items-center">

  <div className="w-full sm:w-[60%] lg:w-[68%] order-2 sm:order-1 text-center sm:text-left">
    <h1 className="text-4xl sm:text-6xl font-medium mb-4">{title}</h1>
    <p className="text-lg text-gray-300 mb-6">{description}
    
    </p>
    
  </div>

  
</div> */}

    
    
    </>
  )
}

export default Header


