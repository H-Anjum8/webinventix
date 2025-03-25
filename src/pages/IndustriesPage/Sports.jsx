import React from 'react'
import headerimg from '../../assets/images/ServiceBgImg.jpg'
import IndustriesHeader from '../../layoutes/IndustriesHeader'
import ManufactureImg from '../../assets/images/manufacturing/ManufactureImg.jpg'
import FooterCrad from '../../components/Common/FooterCrad'
import ServiceHeaderSection from '../../components/Common/ServiceHeaderSection'

import Card from '../../components/Industries/Card'
import ExpertiseCard from '../../components/Industries/ExpertiseCard'
import Sport from '../../assets/images/Industries/Sport.jpg'

import CommonCard from '../../components/Common/CommonCard'
import Team from '../../assets/images/Team.jpg'


const Sports = () => {
  const Data = [{
    heading:'Smart Cities',
    title: "From Data to Dominance: The Role of Machine Learning in Modern Sports",
    subtitle:'At Web Inventix AI, we help sports organizations unlock the full potential of machine learning—combining historical broadcast data with custom-built camera systems to deploy powerful computer vision solutions. From real-time performance analysis to enhanced game strategy, we’re reshaping the future of sports through intelligent technology.',
    btn: 'READ BLOG POST',
    image: Team,
  }];

  const data = [
    {
      title: "Artificial Intelligence in sports and wellness",
      description1: "AI can profoundly transform the way technology companies operate by enhancing operational efficiency, driving innovation, and improving decision-making processes. Through AI transformation, businesses can automate administrative tasks, modernize IT processes, and generate code, allowing employees to focus on more strategic and creative roles. AI-powered systems can analyze vast amounts of data, enabling real-time decision-making and optimizing business processes such as planning, inventory management, and quality control. Additionally, AI can facilitate hyperpersonalized customer experiences, improve customer engagement, and enhance data analysis capabilities.Web Inventix delivers innovative software solutions tailored for the sports and lifestyle industry, combining user-centric design with cutting-edge technology. Our services include custom mobile and web applications for fitness tracking, sports training, and wellness, as well as seamless integration with wearable devices for real-time performance and health data. We develop IoT-powered solutions for smart gyms and equipment, along with AI-driven analytics to enhance training outcomes, engagement, and personalization. Our platforms also feature robust booking systems and social community tools like challenges, leaderboards, and activity feeds to drive retention and user loyalty.\n\nWeb Inventix offers end-to-end development — from concept to launch — backed by scalable architecture and strict compliance with industry standards like GDPR and HIPAA. Our multidisciplinary team delivers secure, high-performance solutions for fitness platforms, sports clubs, nutrition tracking apps, and outdoor activity brands. ",
      image: Sport,
      isImageRight: false,


    },

  ];
  const ExpertiesData = [
    {
      image: ManufactureImg,
      title: "Computer Vision",
      description:
        "Harness advanced computer vision technology with Web Inventix Sports AI to accurately detect, track, and analyze player movements in real time—turning raw performance into actionable insights",
      path:'/services/Computer-Vision'

    },
    {
      image: ManufactureImg,
      title: "Predictive Analytics",

      description:
        "Unlock peak performance with Web Inventix—powered by advanced analytics and data science that reveal what truly drives results. Transform raw data into actionable insights. ",
      path: '/services/Data-Intelligent-Analytics'
    },
    {
      image: ManufactureImg,
      title: "Custom Apps",
      description:
        "At Web Inventix AI Sports, we design custom solutions—from intelligent camera systems to advanced tracking technology and dynamic applications that visualize and analyze performance data in real time.",
      path: '/services/Web-Mobile-SaaS-Development'
    },
  ]
  
  return (
    <>
    {/* ===============Header sections ======== */}

    <section className="  px-0 text-white bg-black w-full ">

      <ServiceHeaderSection

        image={headerimg}
        title='Technology & Software'
        description='At Web Inventix AI, we empower technology companies to revolutionize their operations through cutting-edge AI solutions. Our expertise spans a wide range of applications, from enhancing child safety through advanced behavioral monitoring to integrating machine learning into web and mobile applications. '
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

export default Sports
















