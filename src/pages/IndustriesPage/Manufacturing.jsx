import React from 'react'
import headerimg from '../../assets/images/ServiceBgImg.jpg'
import IndustriesHeader from '../../layoutes/IndustriesHeader'
import Manufactur from '../../assets/images/manufacturing/Manufacturing.png'
import FooterCrad from '../../components/Common/FooterCrad'
import ServiceHeaderSection from '../../components/Common/ServiceHeaderSection'

import Card from '../../components/Industries/Card'
import ExpertiseCard from '../../components/Industries/ExpertiseCard'
import ManufactureImg from '../../assets/images/manufacturing/ManufactureImg.jpg'

import CommonCard from '../../components/Common/CommonCard'
import Team from '../../assets/images/Team.jpg'

const Manufacturing = () => {
  const Data = [{
   
    title: "AI Implementation",
    subtitle: "Where Most Teams Stall and Why Yours Doesn’t Have to",
    description:'If you’re tired of strategy decks that never hit execution, or platforms that don’t stick, it’s time to rethink how you’re implementing AI.',
    btn: 'READ BLOG POST',
    image: Team,
  }];

  const data = [
    {
      title: "AI For Manufacturing",
      description1: "We enable manufacturers to transform their operations by harnessing the power of machine learning and AI. As manufacturers face increasing demands to deliver high-quality products while reducing costs, integrating AI-driven solutions can significantly enhance efficiency, customer satisfaction, and operational uptime.\n\nOur expertise in AI and machine learning enables manufacturers to rapidly build and integrate innovative solutions, positioning them as industry leaders in their respective sectors. By leveraging AI, manufacturers can optimize production processes, improve quality control, and enhance predictive maintenance, ultimately driving business growth and competitiveness.",
      image: Manufactur,
      isImageRight: true,


    },

  ];
  const ExpertiesData = [
    {
      image: ManufactureImg,
      title: "Computer Vision",
      description:
        "Enableyour production line with intelligent vision. Web Inventix AI enables real-time object detection, defect segmentation, and precision tracking—automating quality control and streamlining workflows with unmatched speed and accuracy.",
      path: '/services/Computer-Vision'

    },
    {
      image: ManufactureImg,
      title: "Deep Learning",

      description:
        "Supercharge your factory floor with deep learning. Web Inventix AI applies advanced neural networks for real-time classification, defect detection, and object tracking—driving smarter decisions and continuous operational improvement.",
      path: '/services/Machine-Learning'
    },
    {
      image: ManufactureImg,
      title: "Data Architecture",
      description:
        "Accelerate innovation with scalable ML pipelines. Web Inventix AI engineers robust data architectures that seamlessly integrate into software and systems—turning raw factory data into real-time intelligence and actionable outcomes.",
      path: '/services/Data-Intelligent-Analytics'
    },
  ]
  const useCases = [
    {
      title: "Predictive Maintenance",
      description:
        "Slash downtime and repair costs with intelligent asset monitoring. Web Inventix AI uses real-time sensor data and machine learning to anticipate failures, optimize maintenance schedules, and keep operations running seamlessly."
    },
    {
      title: "Supply Chain Optimization",
      description:
        "Eliminate guesswork across your supply chain. Our AI-driven forecasts combine historical patterns, trends, and external variables to streamline logistics, reduce delays, and protect your bottom line from supplier disruptions."
    },
    {
      title: "Quality Inspection and Monitoring",
      description:
        "Automate precision at scale. Web Inventix AI powers real-time defect detection through computer vision, surpassing human accuracy—ensuring only flawless products reach your customers, while reducing waste and inspection costs."
    }
  ];
  
  return (
    <>
    {/* ===============Header sections ======== */}

    <section className="  px-0 text-white bg-black w-full ">

      <ServiceHeaderSection

        image={headerimg}
        title='Manufacturing'
        description=' Web Inventix AI helps the manufacturing industry by enhancing efficiency with AI-driven predictive maintenance, quality control, and generative design for sustainable and durable product development. Our solutions unlock smarter production, reduced waste, and faster time-to-market.'
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
     {/* =============Usecase section ======== */}
    <div className="max-w-6xl mx-auto p-8 py-5 sm:py-20">
      <h2 className="text-4xl sm:text-6xl  text-center mb-4 sm:mb-8">Use Cases</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => (
          <div key={index} className="text-left">
            <h3 className=" text-2xl sm:text-3xl pr-10 text-gray-600 font-semibold mb-2">{useCase.title}</h3>
            <p className="text-gray-600">{useCase.description}</p>
          </div>
        ))}
      </div>
    </div>
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
          description={data.description}
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

export default Manufacturing







