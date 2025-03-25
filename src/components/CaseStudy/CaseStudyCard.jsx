import React from 'react'
import { Link } from 'react-router-dom'

const CaseStudyCard = ({id,title,image,description}) => {

  return (
   <>
     
     <Link to={`/casestudies/View/${id}`} key={id} className="block">
            <div className="relative group">
              <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
               <div className="absolute inset-0 bg-black opacity-50"></div>
             
              <div className="absolute inset-0  font-semibold bg-black/40  flex mb-4 flex-col  items-start p-4 justify-end rounded-lg  ">
             <p className="text-white text-md lg:text-xl xl:text-2xl  text-start lg:w-[100%] ">{title}</p>
             <p className="text-[#3adeb5] text-md  lg:text-xl xl:text-2xl text-start lg:w-[100%]">{description}</p>
           </div>
           
            
        
            </div>
          </Link>
         
   
   </>
  )
}

export default CaseStudyCard