import { Link } from "react-router-dom";
import backimg from '../../assets/images/casestudybg.jpg'
import C1 from '../../assets/images/C1.jpg'
import C2 from '../../assets/images/C2.jpg'
import C3 from '../../assets/images/C3.jpg'
import CaseStudyCard from "../../components/CaseStudy/CaseStudyCard";

const blogs = [
  {
    id: 1,
    title: "Optimizing Fleet Operations:",
    image: C1,
    description:"A Case Study in Logistics Optimization",
  },
  {
    id: 2,
    title: "Implementing Advanced Proctoring Technology",
    image: C2,
    description:"At a High-Volume Student Testing Center",
  },
  {
    id: 3,
    title: "Rethinking E-Commerce Engagement with ",
    image: C3,
    description:"An AI Voice Agent Solution",
  },
];

const CaseStudies = () => {
  return (
    <>

    

<section className="relative py-20 overflow-hidden">
  {/* Background Image Container */}
  <div className="absolute inset-0 object-cover " style={{ backgroundImage: `url(${backimg})` }}></div>

  {/* Black Overlay for Opacity Effect */}
  <div className="absolute inset-0 bg-black opacity-70"></div>

  {/* Content */}
  <div className="container mx-auto text-left sm:px-4 font-inter text-white relative z-10">
    <div className=" px-2 md:px-40">

    <h2 className="text-4xl sm:text-5xl font-bold mb-4">Work</h2>
    <p className="text-lg md:text-xl sm:w-[80%] lg:w-[60%] ">
      At Web Inventix AI, we help companies harness the power of artificial intelligence and machine learning to drive 
      smarter decisions, streamline operations, and accelerate business growth.
    </p>
    </div>
    
  </div>
</section>





    <section className="container mx-auto py-16 px-4  text-center">
       <h2 className=" text-3xl sm:text-5xl font-bold mb-4">Case Studies</h2>
     <p className="text-lg text-gray-600   text-center">
       Interested in learning more about the type of work we do?    
     </p>
     <p className="text-lg text-gray-600  mb-8 text-center">
      Check out some of our case studies.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4  lg:px-20">
        {blogs.map((blog) => (
          
         <CaseStudyCard
         key={blog.id}
                id={blog.id}
                title={blog.title}
                image={blog.image}
                description={blog.description}
         
         />
        
        ))}
      </div>
    </section>
    </>
  );
};

export default CaseStudies;




