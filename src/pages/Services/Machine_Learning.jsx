import React from 'react'
import Header from '../../components/Common/Header'
import headerimg from '../../assets/images/ServiceBgImg.jpg'
import AIimage from '../../assets/images/Services/AIimage.jpg'
import Team from '../../assets/images/Team.jpg'
import AI_Card from '../../components/ServicesComponent/AI/AI_Card'
import Technology from '../../components/Common/Technology'

import TestimonialSlider from '../../components/Common/TestimonialSlider'
import FooterCrad from '../../components/Common/FooterCrad'
import { useLocation } from 'react-router-dom'
import ServiceHeader from '../../layoutes/ServiceHeader'
import ServiceHeaderSection from '../../components/Common/ServiceHeaderSection'

const Machine_Learning = () => {
  const location = useLocation();
  const aiSolutions = [
    {
      title: "Machine Learning",
      h1: 'Machine Learning Solutions for Smarter, Faster Innovation',
      description1: "At Web Inventix, we design, build, and deploy cutting-edge machine learning (ML) solutions that drive business growth, optimize operations, and create intelligent, data-driven products. From ML infrastructure and pipelines to customer-facing AI applications, we help businesses unlock the full potential of machine learning.",
      h2: 'Machine Learning Engineering & Deployment',
      description2: "We specialize in deploying scalable, production-ready ML solutions across cloud, on-premise, and edge computing environments. Whether integrating ML into your existing infrastructure or developing a new AI-powered product, our team ensures a seamless and secure implementation.",
      h3: 'Machine Learning Strategy',
      description3: "Our ML consulting experts develop tailored machine learning roadmaps to help businesses integrate AI-powered decision-making into their operations. We analyze your specific goals and industry challenges to provide actionable recommendations, ensuring that machine learning delivers real impact.",

      image: AIimage,
      isImageRight: true,

    },

  ];
  const ebookData = [{

    title: "Large and small, Almost Anything is Possible",
    heading1: 'Startups ',
    description1: "Bring your groundbreaking ideas to life with minimal overhead and maximum efficiency. Spend less time raising money and more time achieving product-market fit.",
    heading2: 'Established Companies',
    description2: "Streamline operations or create new revenue streams with custom-built applications tailored to your needs.",
    heading3: 'Agencies ',
    description3: "Leverage Archie’s AI toolset to enhance your operations. Work with the Archie team to build your client backends and full-stack applications.",

    btn: 'Book A CALL',
    image: Team,
  }];
  return (
    <>
      {/* ===============Header sections ======== */}

      <section className="  px-0 text-white bg-black w-full ">

        <ServiceHeaderSection

          image={headerimg}
          title='Machine Learning'
          description=' Our team of machine learning engineers can help identify the right solutions for your business by analyzing your unique challenges, data, and goals. We design tailored models, optimize workflows, and implement scalable systems to drive innovation, improve decision-making, and deliver measurable results.'
        // lineShow={true}
        />

      </section>
       {/* ==========servie navbar============ */}
    {location.pathname.startsWith("/services") && <ServiceHeader />}
      {/* ===============Content sections ======== */}

      <section className="container grid gap-12 xl:mx-auto xl:items-center sm:gap-20 px-6 lg:px-20 py-12">
        {aiSolutions.map((e) => (
          <AI_Card
            key={e.id}
            title={e.title}
            h1={e.h1}
            description1={e.description1}
            h2={e.h2}
            description2={e.description2}
            h3={e.h3}
            description3={e.description3}
            image={e.image}
            isImageRight={e.isImageRight}


          />
        ))


        }

      </section>
      {/* ==========Technology===========  */}
      <Technology />
      {/* ==========Statup==========  */}
      <section className="bg-black text-white mb-16 ">
        {ebookData?.map((data, index) => (
          <div key={index} className="max-w-6xl xl:max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-4 ">
          {/* Left Content */}
          <div className=' order-2 sm:order-1 px-6 sm:pl-20    space-y-6 py-20 '>
              
             
          <h2 className="text-2xl  sm:text-5xl font-semibold mt-2">
                        {data.title}
                    </h2>
              <h1>{data.heading1}</h1>
              
              <p className="text-lg mt-4">
                  {data.description1}
              </p>
              <h1>{data.heading2}</h1>
              
              <p className="text-lg mt-4">
                  {data.description2}
              </p>
              <h1>{data.heading3}</h1>
              
              <p className="text-lg mt-4">
                  {data.description3}
              </p>
              
             

              {/* Call to Action Button */}
              <div className="mt-6 flex justify-center md:justify-start">
                  <a
                      href="#"
                      className="bg-[#32e2bc] text-blue-950 font-semibold py-3 px-12  hover:bg-green-600 transition duration-300"
                  >
                     {data.btn}
                  </a>
              </div>
          </div>

          {/* Right Image */}
          <div className='order-1 sm:order-2 '>
              <img
                  src={Team}
                  alt="Business Meeting"
                  className="w-full h-full sm:h-[800px] object-cover "
              />
          </div>
      </div>
        ))}
      </section>
      {/* ===============Carousel section ======== */}
      <TestimonialSlider />
      {/* ===============Footer Card section ======== */}\
      <FooterCrad
        title="Work with us."
        description="Find out how Web Inventix AI can help your team tackle your most challenging AI/ML and automation projects."
        buttonText="GET IN TOUCH"
        showLine={true}
      //  onButtonClick={() => alert("Button Clicked!")}

      />



    </>
  )
}

export default Machine_Learning