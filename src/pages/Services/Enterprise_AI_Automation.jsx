import React from 'react'
import headerimg from '../../assets/images/ServiceBgImg.jpg'
import Header from '../../components/Common/Header';
import AI_Card from '../../components/ServicesComponent/AI/AI_Card';
import AIimage from '../../assets/images/Services/AIimage.jpg'
import Technology from '../../components/Common/Technology';
import Team from '../../assets/images/Team.jpg'
import TestimonialSlider from '../../components/Common/TestimonialSlider';
import FooterCrad from '../../components/Common/FooterCrad';
import { useLocation } from 'react-router-dom';
import ServiceHeader from '../../layoutes/ServiceHeader';
import ServiceHeaderSection from '../../components/Common/ServiceHeaderSection';
const Enterprise_AI_Automation = () => {
  const location = useLocation();
  const aiSolutions = [
    {
      title: "Enterprise-scale AI Automations",
      h1: 'Automations you can build upon',
      description1: "At Web Inventix AI, we view Enterprise AI Automation as a transformative force that goes beyond mere efficiency gains. Our solutions integrate advanced machine learning, data analytics, and automation tools into existing processes, empowering organizations for the future. By combining human expertise with AI-driven insights, our technology enables teams to make faster and more accurate data-backed decisions while automating time-consuming tasks. This not only improves day-to-day operations but also fosters innovation across the organization.\n\nOur Enterprise AI Automation approach is tailored to meet unique challenges and goals, whether enhancing predictive maintenance in supply chains or streamlining customer interactions. We design robust, scalable, and adaptable solutions that help clients stay ahead of industry shifts and competitive pressures. Our end-to-end support involves close collaboration with leadership and technical teams from discovery to post-deployment optimization, ensuring measurable value at every stage. Our mission is to help forward-thinking enterprises evolve, transform, and thrive through cutting-edge automation services.",
     
      image: AIimage,
      isImageRight: true,

    },
   
  ];
  const ebookData = [{
       
        title: "The Future of Infrastructure and Operations: 6 Strategic Trends for 2025",
        callToAction:
        "Written by a seasoned enterprise technology strategist, this blog reveals how emerging trends will shape infrastructure and operations in 2025. ",
        btn: 'READ BLOG POST',
        image:Team,
      }];
  return (

    <>
       
     {/* ===============Header sections ======== */}

     <section className="  px-0 text-white bg-black w-full ">

     <ServiceHeaderSection
     
       image={headerimg}
       title='Enterprise AI Automation'
       description=' Experience a new era of operational excellence with our Enterprise AI Automation solutions. We blend intelligent technologies, streamlined workflows, and actionable insights to help your organization scale smarter, faster. '
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
         image={e.image}
         isImageRight={e.isImageRight}
     
     
       />
     ))
     
     
     }
     
     </section>
     {/* ==========Technology===========  */}
     <Technology />
    
     {/* ===============Carousel section ======== */}
     <TestimonialSlider  />
     {/* ===============Footer Card section ======== */}\
     <FooterCrad
      title="Partner with us."
      description="Partner with us to turn your toughest problems into powerful, data-driven solutions—engineered for impact, scalability, and success."
      buttonText="GET IN TOUCH"
      showLine={true}
     //  onButtonClick={() => alert("Button Clicked!")}
     
     />
       
       
       
       </>
  )
}

export default Enterprise_AI_Automation