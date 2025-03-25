import React from 'react'
import headerimg from '../../assets/images/ServiceBgImg.jpg'
import IndustriesHeader from '../../layoutes/IndustriesHeader'
import expertise from '../../assets/images/Industries/expertise.jpg'
import FooterCrad from '../../components/Common/FooterCrad'
import ServiceHeaderSection from '../../components/Common/ServiceHeaderSection'

import Card from '../../components/Industries/Card'
import ExpertiseCard from '../../components/Industries/ExpertiseCard'
import SuplyChain from '../../assets/images/SupplyChain/SuplyChain.jpg'

import CommonCard from '../../components/Common/CommonCard'
import Team from '../../assets/images/Team.jpg'

const Supply_Chain = () => {
  const Data = [{
   
    title: "Intelligent Vehicle Routing for Optimized Fleet Operations",
    subtitle: "In a world where delivery speed, cost control, and customer satisfaction are non-negotiable, fleet managers face an increasingly complex challenge: how to move smarter, not just faster.\n\nFrom demand prediction and real-time traffic adaptation to predictive maintenance and sustainability gains, this blog breaks down how modern logistics leaders are using AI to solve the Vehicle Routing Problem (VRP) at scale.",
    btn: 'READ BLOG POST',
    image: Team,
  }];

  const data = [
    {
      title: "AI For Manufacturing",
      description1: "We enable manufacturers to transform their operations by harnessing the power of machine learning and AI. As manufacturers face increasing demands to deliver high-quality products while reducing costs, integrating AI-driven solutions can significantly enhance efficiency, customer satisfaction, and operational uptime.\n\nOur expertise in AI and machine learning enables manufacturers to rapidly build and integrate innovative solutions, positioning them as industry leaders in their respective sectors. By leveraging AI, manufacturers can optimize production processes, improve quality control, and enhance predictive maintenance, ultimately driving business growth and competitiveness.",
      image: SuplyChain,
      isImageRight: false,


    },

  ];
  const ExpertiesData = [
    {
      image: expertise,
      title: "Artificial Intelligence",
      description:
        "Optimize cross-functional supply chain operations by leveraging artificial intelligence to adapt and respond to changing market conditions. Determine which logistics pathways are most efficient and how to best allocate resources to meet demand, ensuring streamlined operations and enhanced customer satisfaction.",
      path:'/services/Artificial-Intelligence'

    },
    {
      image: expertise,
      title: "Deep Learning",

      description:
        "Improve supply chain efficiency and gain insights into operational dynamics by analyzing logistical behaviors and understanding key stages within the supply chain lifecycle. This helps in predicting demand, optimizing inventory management, and enhancing overall operational performance.",
      path: '/services/Machine-Learning'
    },
    {
      image: expertise,
      title: "Machine Learning",
      description:
        "Our integrated platforms help businesses harness the full potential of smart devices, sensors, and automated systems to drive operational efficiency, predictive insights, and responsive decision-making. We assist in optimizing supply chain planning by synthesizing vast amounts of data to anticipate demand shifts and routes. ",
      path: '/services/Machine-Learning'
    },
  ]
  
  
  return (
    <>
    {/* ===============Header sections ======== */}

    <section className="  px-0 text-black w-full ">

      <ServiceHeaderSection

        image={headerimg}
        title='Supply Chain'
        description=' Web Inventix AI helps the supply chain industry by enhancing efficiency with AI-driven demand forecasting, inventory optimization, and intelligent route planning for resilient, cost-effective, and agile logistics operations. Our solutions unlock end-to-end visibility, reduce disruptions, and accelerate delivery performance.'
      // lineShow={true}
      />

    </section>
    {/* ==========servie navbar============ */}
    {location.pathname.startsWith("/industries") && <IndustriesHeader />}

    {/* ===========Contetnt  section =========== */}
    <section className="container grid gap-12  my-20 xl:mx-auto xl:items-center sm:gap-20 px-6 lg:px-20 py-12">
      {data.map((e) => (
        <Card
          key={e.id}
          title={e.title}
          h1={e.h1}
          description1={e.description1}
          
          image={e.image}
          isImageRight={e.isImageRight}


        />
      ))


      }

    </section>
     
    {/* ==============Expertiees section ======== */}
    <section className="bg-black py-12 md:relative ">
      <div className="container flex flex-col space-y-3 justify-center text-center items-center text-white  mx-auto ">
      <h1 className='text-3xl sm:text-5xl'>Our Expertise</h1>
      <p className='text-lg sm:w-[50%] px-5'>Leveraging broad industry experience, we design, develop, and implement tailored AI/ML and automation solutions.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-4  ">
          {ExpertiesData.map((feature, index) => (

            <ExpertiseCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              path={feature.path}

            />

          ))}
        </div>
      </div>
    </section>
    {/* ==========optuimizatoin section==========  */}
    <section className="bg-black my-20 text-white  ">
      {Data?.map((data, index) => (
        <CommonCard
          key={index}
          heading={ data.heading}
          title={data.title}
          subtitle={data.subtitle}
          btn={data.btn}
          image={data.image}
          IsBtn={true}

        />
      ))}
    </section>

    {/* ===============Industries sections ======== */}
    <FooterCrad
      title="Partner with us."
      description="Find out how Web Inventix AI can help your team tackle your most challenging AI/ML and automation projects."
      buttonText="GET IN TOUCH"


    />


  </>
  )
}

export default Supply_Chain











