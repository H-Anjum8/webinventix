import React from 'react'
import ServiceHeader from '../../layoutes/ServiceHeader'
import headerimg1 from '../../assets/images/Services/HeaderImg.jpg'
import { useLocation } from 'react-router-dom';
import Header from '../../components/Common/Header';
import ServiceHeaderSection from '../../components/Common/ServiceHeaderSection';
import Team from '../../assets/images/Team.jpg'
import AIimage from '../../assets/images/Services/AIimage.jpg'
import AIimage1 from '../../assets/images/Services/AIimage1.jpg'
import AI_Card from '../../components/ServicesComponent/AI/AI_Card';
import Technology from '../../components/Common/Technology';
import CommonCard from '../../components/Common/CommonCard';
import TestimonialSlider from '../../components/Common/TestimonialSlider';
import FooterCrad from '../../components/Common/FooterCrad';
const Artificial_Intelligence = () => {

  const aiSolutions = [
    {
      title: "ARTIFICIAL INTELLIGENCE SOLUTIONS",
      h1: 'Custom Artificial Intelligence Models',
      description1: "At Web Inventix, we drive strategic growth with bespoke AI models that deliver real-time, actionable insights. Our team of seasoned data scientists, many holding PhDs, collaborates with you to uncover how artificial intelligence can streamline operations, increase efficiency, and reduce overhead—setting the stage for long-term success.",
      h2: 'Predictive Analytics',
      description2: "Empower your organization to forecast trends and make informed decisions with greater accuracy. By leveraging advanced machine learning algorithms, our experts sift through large datasets to pinpoint key patterns and emerging opportunities, helping you navigate the future with confidence.",
      h3: 'Intelligent Automation',
      description3: "Eliminate bottlenecks and expedite processes by automating repetitive, resource-intensive tasks. Web Inventix tailors intelligent automation solutions across diverse sectors, freeing your team to focus on strategic initiatives and high-impact projects that drive sustainable growth.",
      image: AIimage,
      isImageRight: true,

    },
    {
      title: "Where We Excel",
      h1: 'AI Implementation',
      description1: "We guide you through every step of the AI journey—from initial testing to seamless deployment and ongoing maintenance. By integrating AI solutions into your existing infrastructure, we ensure measurable results, robust performance, and a fully optimized system aligned with your strategic goals.",
      h2: 'Computer Vision',
      description2: "Leverage the potential of computer vision to streamline operations and enhance user experiences. Whether it’s object detection, image analytics, or high-level data extraction, our team crafts tailor-made solutions that optimize workflows, reduce costs, and deliver real-time insights for impactful decision-making.",
      h3: 'Natural Language Processing (NLP)',
      description3: "At Web Inventix, we harness the transformative power of NLP to revolutionize how businesses engage with language-based technologies. From intuitive chatbots and intelligent voice assistants to in-depth text analytics, our cross-industry expertise ensures your organization gains strategic value and efficiency from custom NLP solutions.",
      image: AIimage1,
      isImageRight: false,
      

    },
  ];
  const ebookData = [{
    heading: "Customized Solutions Tailored To Your Needs",
    title: "From startups to industry leaders, we're ready to skyrocket your business results",

    callToAction:
      "Web Inventix AI tailors AI solutions to meet unique business needs by following a client-centric approach that involves understanding each business’s specific challenges, goals, and objectives.",
    btn: 'BOOK A DISCOVERY CALL',
    image:Team,
  }];


  const location = useLocation();
  return (
    <>
      {/* <ServiceHeader/> */}
    
      <section className="  px-0 text-white bg-black HeadrImg1 w-full ">

        <ServiceHeaderSection

          image={headerimg1}
          title='Artificial Intelligence'
          description=' At Web Inventix AI, we leverage cutting-edge AI to drive growth and innovation. Our team crafts tailored solutions to transform operations, boost customer engagement, and maximize profitability.
           By partnering with us, you’ll gain a trusted ally committed to unlocking new levels of efficiency and competitive advantage through the power of artificial intelligence.'

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
          <CommonCard
            key={index}
            heading={data.heading}
            title={data.title}

            callToAction={data.callToAction}
            btn={data.btn}
            image={data.image}

          />
        ))}
      </section>
        {/* ===============Carousel section ======== */}
        <TestimonialSlider />
        {/* ===============Footer Card section ======== */}
        <FooterCrad
         title="Work with us."
         description="Discover how Web Inventix AI can enable your team to overcome even the most demanding AI/ML and automation challenges."
         buttonText="GET IN TOUCH"
         showLine={true}
        //  onButtonClick={() => alert("Button Clicked!")}
        
        />

    </>

  )
}

export default Artificial_Intelligence



