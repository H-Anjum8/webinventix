import React from 'react'
import headerimg from '../../assets/images/ServiceBgImg.jpg'
import IndustriesHeader from '../../layoutes/IndustriesHeader'
import HealthCare from '../../assets/images/Healthcare/HealthCare.jpg'
import FooterCrad from '../../components/Common/FooterCrad'
import ServiceHeaderSection from '../../components/Common/ServiceHeaderSection'

import Card from '../../components/Industries/Card'
import ExpertiseCard from '../../components/Industries/ExpertiseCard'
import healthcareImg from '../../assets/images/Healthcare/healthcareImg.jpg'

import CommonCard from '../../components/Common/CommonCard'
import Team from '../../assets/images/Team.jpg'

const Healthcare = () => {

  const Data = [{
    heading:'Healthcare',
    title: "AI and Clinician Burnout: What’s Actually Working, What’s Still a Mess",
    subtitle: "If your staffing model is brittle, if your EHR is ten years behind, if your training loops are non-existent—AI just becomes another expensive bandage.\n\nFix your operations first. Then let AI amplify the upside.",

    btn: 'READ BLOG POST',
    image: Team,
  }];

  const data = [
    {
      title: "Healing with Intelligence: Web Inventix AI in Healthcare",
      h1: 'Enhanced Diagnostic Accuracy and Personalized Medicine',
      description1: "Web Inventix AI can leverage computer vision to analyze medical images more accurately, detecting conditions like tumors or infections earlier and more reliably.\n\nGenerative AI can create personalized treatment plans based on individual patient data, improving the effectiveness of interventions.",
      h2: 'Streamlined Operations and Administrative Efficiency',
      description2: "AI can automate administrative tasks such as medical coding, scheduling, and billing, allowing healthcare professionals to focus on patient care. \n\n analytics can help optimize resource allocation and reduce unnecessary hospitalizations by analyzing healthcare system data.",
      h3: 'Innovative Drug Discovery and Development',
      description3: "Web Inventix AI can accelerate drug discovery by using generative AI to simulate molecular structures and predict their efficacy, leading to faster development of new treatments.\n\nAI-driven predictive analytics can forecast disease progression, enabling proactive interventions and better patient outcomes.",
      image: HealthCare,
      isImageRight: false,


    },

  ];
  const ExpertiesData = [
    {
      image: healthcareImg,
      title: "Artificial Intelligence",
      description:
        "Leverage AI to optimize cross-channel engagement with healthcare providers, adapting to their needs and preferences. Identify your most valuable providers and develop targeted strategies to effectively collaborate and support them.",
      path: '/services/Artificial-Intelligence'

    },
    {
      image: healthcareImg,
      title: "Data Science",

      description:
        "Analyze healthcare provider behaviors and implement tailored segmentation to personalize outreach efforts. Gain insights into provider lifecycle stages, enhancing their experience and optimizing engagement strategies.",
      path: '/services/Data-Intelligent-Analytics'
    },
    {
      image: healthcareImg,
      title: "Machine Learning",
      description:
        "Analyze patient data and implement predictive models to personalize care delivery. Gain insights into disease progression, enhancing treatment outcomes and optimizing healthcare management strategies.",
      path: '/services/Machine-Learning'
    },
  ]
  return (
    <>
      {/* ===============Header sections ======== */}

      <section className="  px-0 text-white bg-black w-full ">

        <ServiceHeaderSection

          image={headerimg}
          title='Healthcare'
          description=' At Web Inventix AI, our healthcare solutions leverage AI to enhance diagnostics, treatment planning, and patient outcomes. We utilize machine learning for personalized medicine, computer vision for image analysis, and AI-driven automation to streamline administrative tasks.'
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
      {/* ===============AI section ======== */}
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
      {/* ==========optuimizatuin section==========  */}
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
        title="Work with us."
        description="Find out how Web Inventix AI can help your team tackle your most challenging AI/ML and automation projects."
        buttonText="GET IN TOUCH"


      />


    </>
  )
}

export default Healthcare




