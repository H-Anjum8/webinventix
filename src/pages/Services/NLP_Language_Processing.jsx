import React from 'react'
import headerimg from '../../assets/images/ServiceBgImg.jpg'
import Header from '../../components/Common/Header';
import AI_Card from '../../components/ServicesComponent/AI/AI_Card';
import AIimage from '../../assets/images/Services/AIimage.jpg'
import Team from '../../assets/images/Team.jpg'
import TestimonialSlider from '../../components/Common/TestimonialSlider';
import FooterCrad from '../../components/Common/FooterCrad';
import CommonCard from '../../components/Common/CommonCard';
import { useLocation } from 'react-router-dom';
import ServiceHeader from '../../layoutes/ServiceHeader';
import Technology from '../../components/Common/Technology';
import ServiceHeaderSection from '../../components/Common/ServiceHeaderSection';

const NLP_Language_Processing = () => {
  const location = useLocation();
   const aiSolutions = [
        {
          title: "Natural Language Processing",
          h1: 'Custom NLP Solutions for Your Business',
          description1: "At Web Inventix AI, we offer custom NLP solutions that support a variety of applications, including text categorization, data extraction, entity recognition, sentiment analysis, text generation, and language translation. These AI-powered capabilities help organize and classify content efficiently, identify key information from documents, detect and label important terms, understand customer emotions, automate content creation, and enable multilingual communication. \n\nWe work closely with your team to integrate these NLP capabilities into a custom-built solution tailored to your business needs. With extensive experience across diverse industries such as education, technology, and pharmaceuticals, we specialize in scalable NLP solutions. By leveraging cutting-edge deep learning and efficient processing pipelines, we transform natural language data into actionable business value, helping businesses achieve their unique goals and challenges.",
      
          image: AIimage,
          isImageRight: false,
    
        },
       
      ];
      const ebookData = [{
           
            title: "Voice of the Future. Understanding AI Voice Agents",
            callToAction:
            "For AI and technology leaders, the time to act is now. Embrace AI voice agents as part of your digital transformation strategy. ",
            btn: 'READ ARTICLE',
            image:Team,
          }];
  return (
    <>
       
    {/* ===============Header sections ======== */}

    <section className="  px-0 text-white bg-black w-full ">

    <ServiceHeaderSection
    
      image={headerimg}
      title='Natural Language Processing'
      description=' We create advanced NLP solutions that turn unstructured text into actionable insights. Leveraging deep learning, we help businesses analyze, categorize, and extract meaning from text data to improve automation, decision-making, and customer engagement. '
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
     {/* ==========Statup==========  */}
     <section className="bg-black text-white mb-16 ">
        {ebookData?.map((data, index) => (
          <CommonCard
            key={index}
           
            title={data.title}
           
            callToAction={data.callToAction}
            btn={data.btn}
            image={data.image}

          />
        ))}
      </section>
   
    {/* ===============Carousel section ======== */}
    <TestimonialSlider  />
    {/* ===============Footer Card section ======== */}\
    <FooterCrad
     title="Partner with us."
     description="Discover how Web Inventix AI can help you tackle your most challenging AI/ML and automation projects."
     buttonText="GET IN TOUCH"
     showLine={true}
    //  onButtonClick={() => alert("Button Clicked!")}
    
    />
      
      
      
      </>
  )
}

export default NLP_Language_Processing