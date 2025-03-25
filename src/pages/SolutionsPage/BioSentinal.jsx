import React from 'react'
import expertise from '../../assets/images/Industries/expertise.jpg'
import SolutionExpertiesCard from '../../components/Solutions/SolutionExpertiesCard'
import FooterCrad from '../../components/Common/FooterCrad'
import SolutionFeatureCard from '../../components/Solutions/SolutionFeatureCard'
import Team from '../../assets/images/Team.jpg'
import img1 from '../../assets/images/Solutions/1.png'
import img2 from '../../assets/images/Solutions/2.png'
import SolutionCard from '../../components/Solutions/SolutionCard'
import SolutionsHeader from '../../layoutes/SolutionsHeader'
const BioSentinal = () => {
  const ExpertiesData = [
    {
      image: expertise,
      title: "Artificial Intelligence",
      description:
        "Optimize cross-functional supply chain operations by leveraging artificial intelligence to adapt and respond to changing market conditions. Determine which logistics pathways are most efficient and how to best allocate resources to meet demand, ensuring streamlined operations and enhanced customer satisfaction.",
      path: '/services/Artificial-Intelligence'

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
  
    const caseStudies = [{
      heading: "Featured Articles",
         image: Team,
      items: [
        {
          feature_id: "01",
          title: "Implementing Advanced Proctoring Technology at a High-Volume Student Testing Center",
          link: "#",
          
        },
        {
          feature_id: "02",
          title: "AI and Clinician Burnout: What’s Actually Working, What’s Still a Mess",
          link: "#",
       
        },
      ],}
    ];
    const solutions = [
        {
          image: img1,
          vertical: 'FinTech',
          Category: 'Computer Vision & Mobile App',
          
          title: 'BioSentinal – Online Security with Computer Vision-Based Liveness Detection',
          isImageRight: true,
          btnPath: "#"
        },
        {
          image: img2,
          toptitle:'Built for real world problems',
          description: 'With BioSentinal, businesses can fortify their online security while ensuring a frictionless user experience—combining AI intelligence with effortless protection.\n\nBioSentinel is an innovative computer vision-based application designed to bolster online security by verifying the liveliness of users. This cutting-edge technology utilizes computer vision algorithms to assess user activity and ensure that the person interacting with a digital platform is indeed present and actively engaged.\n\n By analyzing facial expressions, eye movements, or other behavioral cues in real-time, this system offers a robust solution for preventing unauthorized access and enhancing the security of online interactions.',
          isImageRight: true,
          // btnPath: '/solutionspage/BioSentinal',
        },
        
      ];

  return (
    <>
      {/* ==========servie navbar============ */}
      {location.pathname.startsWith("/solutionspage") && <SolutionsHeader />}
    <section className="container grid gap-12 xl:mx-auto xl:items-center sm:gap-20 px-6 lg:px-20 py-12">
        {solutions.map((data, index) => (
          <SolutionCard
            key={index}
            image={data.image}
            title={data.title}
            toptitle={data.toptitle}
            vertical={data.vertical}
            Category={data.Category}
           description={data.description}
            isImageRight={data.isImageRight}
            btnPath={data.btnPath}
          />
        ))}
      </section>
      {/* ==============Expertiees section ======== */}
      <section className="text-black py-12 md:relative ">
        <div className="container flex flex-col space-y-3 justify-center text-center items-center text-black  mx-auto ">
          <h1 className='text-3xl sm:text-5xl'>Key Benefits for Online Security</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-4  ">
            {ExpertiesData.map((feature, index) => (

              <SolutionExpertiesCard
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
      {/* ==========feature section==========  */}
      <section className="bg-black my-20 text-white  ">
             {caseStudies.map((data,index) => (
          <SolutionFeatureCard
          key={index}
          heading={data.heading}
         items={data.items}

          image={data.image}
           

          />
        ))}
      </section>
    
      {/* ===============Footer sections ======== */}
      <FooterCrad
        title="Partner with us."
        description="Find out how Web Inventix AI can help your team tackle your most challenging AI/ML and automation projects."
        buttonText="GET IN TOUCH"


      />



    </>
  )
}

export default BioSentinal