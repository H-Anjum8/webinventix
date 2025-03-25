import React from 'react'
import headerimg from '../../assets/images/ServiceBgImg.jpg'
import IndustriesHeader from '../../layoutes/IndustriesHeader'
import AutomativeImg from '../../assets/images/Industries/AutomativeImg.jpg'
import FooterCrad from '../../components/Common/FooterCrad'
import ServiceHeaderSection from '../../components/Common/ServiceHeaderSection'
import AI_Card from '../../components/ServicesComponent/AI/AI_Card'
import Card from '../../components/Industries/Card'
import ExpertiseCard from '../../components/Industries/ExpertiseCard'
import FinancialImg from '../../assets/images/Industries/FinancialImg.jpg'
import Financialexpertise from '../../assets/images/Industries/Financialexpertise.jpg'
import CommonCard from '../../components/Common/CommonCard'
import Team from '../../assets/images/Team.jpg'

const Financial = () => {
    const expertiseData = [{
          title: "Intelligent Vehicle Routing for Optimized Fleet Operations",
          subtitle: "Written by a logistics automation expert with deep experience in AI-driven fleet management, this blog explores advanced vehicle routing strategies to reduce operational costs and improve on-time performance. ",
  
          btn: 'READ BLOG POST',
          image:Team,
        }];
     
  const data = [
    {
      title: "AI in Finance: Unlocking Potential with Web Inventix",
      h1: 'Enhanced Fraud Detection and Risk Management',
      description1: "At Web Inventix AI, we leverage AI to enhance financial services in several key areas. Our solutions include real-time fraud detection systems that analyze vast amounts of transaction data to identify patterns and anomalies indicative of fraudulent activity. Additionally, AI is used for risk assessment by evaluating creditworthiness through a broader range of data points, such as social media activity and spending patterns, to make more informed lending decisions. Operational efficiency is also improved by automating routine tasks like data entry and document processing, reducing human error and allowing staff to focus on strategic roles.We further enhance customer experience with AI-powered chatbots and virtual assistants that provide 24/7 support, improving customer engagement and satisfaction. Predictive analytics are utilized for market forecasting to identify trends and potential risks, enabling data-driven strategic decisions. AI systems are also implemented for algorithmic trading, analyzing market data to execute trades more efficiently than human traders.",
      image: FinancialImg,
      isImageRight: false,


    },

  ];
  const ExpertiesData = [
    {
      image: Financialexpertise,
      title: "Artificial Intelligence",
      description:
        "Leverage AI to tailor cross-channel financial campaigns, adapting to customer behavior and preferences. Identify your most valuable customers and develop targeted strategies to effectively engage and retain them.",
      path: '/services/Artificial-Intelligence'

    },
    {
      image: Financialexpertise,
      title: "Computer Vision",

      description:
        "Harness computer vision to automate document processing, detect anomalies in transactions, and enhance security through facial recognition and surveillance. This technology helps streamline operations, reduce errors, and improve compliance.",
      path: '/services/Computer-Vision'
    },
    {
      image: Financialexpertise,
      title: "Machine Learning",
      description:
        "Utilize machine learning to predict trends, detect fraud, and personalize customer experiences. By analyzing financial data, machine learning optimizes risk management and enhances portfolio performance.",
      path: '/services/Machine-Learning'
    },
   ]
  return (
    <>
      {/* ===============Header sections ======== */}

      <section className="  px-0 text-white bg-black w-full ">

        <ServiceHeaderSection

          image={headerimg}
          title='Financial Industry'
          description=' We empower banks, fintechs, and financial institutions with innovative digital solutions. Our expertise streamlines operations, enhances security, and improves customer experiences, driving sustainable growth in a rapidly evolving market.'
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
                {expertiseData?.map((data, index) => (
                    <CommonCard
                        key={index}
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

export default Financial