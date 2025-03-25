import React from 'react'
import headerimg from '../../assets/images/ServiceBgImg.jpg'
import IndustriesHeader from '../../layoutes/IndustriesHeader'
import expertise from '../../assets/images/Industries/expertise.jpg'
import FooterCrad from '../../components/Common/FooterCrad'
import ServiceHeaderSection from '../../components/Common/ServiceHeaderSection'

import Card from '../../components/Industries/Card'
import ExpertiseCard from '../../components/Industries/ExpertiseCard'
import Technology from '../../assets/images/Technology/Technology.jpg'

import CommonCard from '../../components/Common/CommonCard'
import Team from '../../assets/images/Team.jpg'

const TechnologySaas = () => {
  const Data = [{
    heading:'Smart Cities',
    title: "How Smart Cities Are Using AI, ML, and IoT To Build Living Infrastructure",
    subtitle: "Most cities don’t fail because of lack of tools. They fail because implementation is fragmented and leadership treats AI like a procurement task, not an operating model shift.",
    btn: 'READ BLOG POST',
    image: Team,
  }];

  const data = [
    {
      title: "How can AI transform the way technology companies operate",
      description1: "AI can profoundly transform the way technology companies operate by enhancing operational efficiency, driving innovation, and improving decision-making processes. Through AI transformation, businesses can automate administrative tasks, modernize IT processes, and generate code, allowing employees to focus on more strategic and creative roles. AI-powered systems can analyze vast amounts of data, enabling real-time decision-making and optimizing business processes such as planning, inventory management, and quality control. Additionally, AI can facilitate hyperpersonalized customer experiences, improve customer engagement, and enhance data analysis capabilities.",
      image: Technology,
      isImageRight: false,


    },

  ];
  const ExpertiesData = [
    {
      image: expertise,
      title: "Artificial Intelligence",
      description:
        "Our expertise extends beyond mere prediction and inference, focusing on crafting cutting-edge algorithms that learn, adapt, and make decisions in real-time. This enables businesses to drive innovation, enhance operational efficiency, and unlock new opportunities for growth and transformation.",
      path:'/services/Artificial-Intelligence'

    },
    {
      image: expertise,
      title: "Data Science",

      description:
        "Our rigorous approach combines advanced data analysis, visualization, and predictive modeling to uncover hidden patterns and opportunities. By leveraging these capabilities, businesses can drive informed decision-making, optimize operations, and unlock new growth opportunities. ",
      path: '/services/Data-Intelligent-Analytics'
    },
    {
      image: expertise,
      title: "Machine Learning",
      description:
        "Build products and internal tools that learn, predict, and empower your team to grow to the next level. Our team brings cross-domain expertise in areas such as natural language processing, reinforcement learning, and computer vision.",
      path: '/services/Machine-Learning'
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

export default TechnologySaas















