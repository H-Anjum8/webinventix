import React from 'react'
import Header from '../../components/Common/Header'
import headerimg from '../../assets/images/ServiceBgImg.jpg'
import AIimage from '../../assets/images/Services/AIimage.jpg'
import Team from '../../assets/images/Team.jpg'
import AI_Card from '../../components/ServicesComponent/AI/AI_Card'
import Technology from '../../components/Common/Technology'
import CommonCard from '../../components/Common/CommonCard'
import TestimonialSlider from '../../components/Common/TestimonialSlider'
import FooterCrad from '../../components/Common/FooterCrad'
import { useLocation } from 'react-router-dom'
import ServiceHeader from '../../layoutes/ServiceHeader'
import ServiceHeaderSection from '../../components/Common/ServiceHeaderSection'
const Data_Intelligent_Analytics = () => {
  const location = useLocation();
  const aiSolutions = [
    {
      title: "Our Experience",
      h1: 'Empowering Innovation. Amplifying Impact',
      description1: "At Web Inventix AI, our team of PhD-trained data scientists leverages specialized expertise to design and deploy custom algorithmic solutions across a broad range of industries.",
      h2: 'Data Science at scale',
      description2: "Elevate your decision-making process with our Data Science & Intelligent Analytics services at Web Inventix AI. We transform raw data into actionable insights, empowering you to spot trends, predict outcomes, and make stronger strategic moves—driving exponential growth for your business.Using the latest machine learning techniques and predictive models, our team uncovers hidden patterns that unlock new revenue streams. By blending innovation and agility, we deliver solutions that not only simplify complex data challenges but also expand your competitive edge.Count on Web Inventix AI to turn overwhelming volumes of information into purposeful intelligence that guides your organization forward. Our end-to-end approach ensures your data is not just seen, but understood, fueling smarter decisions and long-term success.",

      image: AIimage,
      isImageRight: true,

    },

  ];
  const ebookData = [{

    title: "The Future of Infrastructure and Operations: 6 Strategic Trends for 2025",
    callToAction:
      "Written by a seasoned enterprise technology strategist, this blog reveals how emerging trends will shape infrastructure and operations in 2025. ",
    btn: 'READ BLOG POST',
    image: Team,
  }];
  return (
    <>
      {/* ===============Header sections ======== */}

      <section className="  px-0 text-white bg-black w-full ">

        <ServiceHeaderSection

          image={headerimg}
          title='Data Science & Intelligent Analytics'
          description=' By leveraging cutting-edge data science and intelligent analytics, we empower organizations to make informed decisions and drive strategic growth. Our expertise ensures that data-driven strategies are seamlessly integrated into core business operations.'
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
      <TestimonialSlider />
      {/* ===============Footer Card section ======== */}\
      <FooterCrad
        title="Partner with us."
        description="Discover how Web Inventix AI enables your team to overcome your most demanding AI/ML and automation challenges."
        buttonText="GET IN TOUCH"
        showLine={true}
      //  onButtonClick={() => alert("Button Clicked!")}

      />



    </>
  )
}

export default Data_Intelligent_Analytics