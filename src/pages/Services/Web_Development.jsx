import React from 'react'
import ServiceHeader from '../../layoutes/ServiceHeader'
import headerimg from '../../assets/images/ServiceBgImg.jpg'
import { useLocation } from 'react-router-dom';

import ServiceHeaderSection from '../../components/Common/ServiceHeaderSection';
import Team from '../../assets/images/Team.jpg'
import AIimage from '../../assets/images/Services/AIimage.jpg'
import AI_Card from '../../components/ServicesComponent/AI/AI_Card';
import Technology from '../../components/Common/Technology';
import CommonCard from '../../components/Common/CommonCard';
import TestimonialSlider from '../../components/Common/TestimonialSlider';
import FooterCrad from '../../components/Common/FooterCrad';

const Web_Development = () => {
  const aiSolutions = [
    {
      title: "Web, App and mobile Solutions",
      h1: 'Custom Solutions',
      description1: "Development services relate to the full-cycle process of designing, deploying, and supporting organizations’ digital products. Our full stack development service, offered at Web Inventix AI, unites the convenience of the front design with powerful performance on the back end of the web application. By using innovative technology and applying the best practices of agile methodologies, we create robust, secure, and efficient digital products that contribute to business success.",
      h2: 'Web App Development',
      description2: "Custom web app development is a process that develops browser-based software applications that meet unique business requirements. Front-end and back-end software development is an element of it as well as web application development in.NET and in Python to build strong mobile applications. Many contemporary web applications are as functional as traditional desktop applications while remaining highly streamlined and easy to navigate.",
      image: AIimage,
      isImageRight: true,

    },
    
  
  ];
  const ebookData = [{
    heading: "Applying Generative AI",
    title: "From Pilot to Production",
    subtitle:'Applying Generative AI in Business Workflows',
    callToAction:
      "f your AI strategy has more sizzle than substance, it’s time to stop shopping for tools and start mapping actual outcomes.",
    btn: 'READ BLOG POST',
    image:Team,
  }];


  const location = useLocation();
  return (
    <>
      {/* <ServiceHeader/> */}
      <section className="  px-0 text-white bg-black w-full ">

        <ServiceHeaderSection

          image={headerimg}
          title='Web, Mobile & SaaS Development'
          description=' Empower your business with cutting-edge web, mobile, and SaaS development solutions. From responsive websites to feature-rich mobile apps and scalable SaaS platforms, we deliver innovative technology tailored to your needs—driving efficiency, engagement, and growth.

'

        />

      </section>


      {location.pathname.startsWith("/services") && <ServiceHeader />}

      {/* ===========AI solution section =========== */}
      <section className="container grid gap-12 xl:mx-auto xl:items-center sm:gap-20 px-6 lg:px-20 py-12">
        {aiSolutions.map((e) => (
          <AI_Card
            key={e.id}
            title={e.title}
            h1={e.h1}
            description1={e.description1}
            h2={e.h2}
            description2={e.description2}
            
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
          <CommonCard
            key={index}
            heading={data.heading}
            title={data.title}
         subtitle={data.subtitle}
            callToAction={data.callToAction}
            btn={data.btn}
            image={data.image}

          />
        ))}
      </section>
        {/* ===============Carousel section ======== */}
        <TestimonialSlider />
        {/* ===============Footer Card section ======== */}\
        <FooterCrad
         title="Partner with us."
         description="Discover how Web Inventix AI can enable your team to overcome even the most demanding AI/ML and automation challenges."
         buttonText="GET IN TOUCH"
         showLine={true}
        //  onButtonClick={() => alert("Button Clicked!")}
        
        />

    </>
  )
}

export default Web_Development