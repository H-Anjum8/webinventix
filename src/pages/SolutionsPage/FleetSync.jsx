import React from 'react'
import expertise from '../../assets/images/Industries/expertise.jpg'
import SolutionExpertiesCard from '../../components/Solutions/SolutionExpertiesCard'
import FooterCrad from '../../components/Common/FooterCrad'
import SolutionFeatureCard from '../../components/Solutions/SolutionFeatureCard'
import Team from '../../assets/images/Team.jpg'
import img1 from '../../assets/images/Solutions/3.jpg'
import img2 from '../../assets/images/Solutions/4.jpg'
import SolutionCard from '../../components/Solutions/SolutionCard'
import SolutionsHeader from '../../layoutes/SolutionsHeader'

const FleetSync = () => {
  const ExpertiesData = [
    {
      image: expertise,
      title: "Intelligent Algorithms",
      description:
        "FleetSync functions by utilizing next-generation intelligent algorithms to optimize travel distances for your fleet of vehicles, guaranteeing the most efficient routes are selected.",
      path: '/services/Artificial-Intelligence'

    },
    {
      image: expertise,
      title: "Customizable Integration",

      description:
        "Adaptable to fit the distinctive requirements of your enterprise, making it appropriate for organizations of all dimensions and industries.",
      path: '/services/Machine-Learning'
    },
    {
      image: expertise,
      title: "Enhanced Service Delivery",
      description:
        "FleetSync facilitates faster deliveries and lowers operational expenses, improving customer loyalty and market competitiveness. ",
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
    ],
  }
  ];

  const solutions = [
    {
      image: img1,
      vertical: 'Route Optimization',
      Category: 'AI & Full-Stack',

      title: 'FleetSync Intelligent Vehicle Routing Software for Optimal Fleet Operations',
      isImageRight: true,
      btnPath: "#"
    },
    {
      image: img2,
      toptitle: 'OPTIMIZING FLEET OPERATION',
      description: 'FleetSync is a sophisticated vehicle routing software solution engineered to revolutionize how organizations manage their fleet operations. By leveraging cutting-edge smart algorithms, FleetSync is designed to address the complex challenge of optimizing travel routes for your vehicle fleet. This delivers substantial advantages, including decreased fuel usage, reduced vehicle maintenance requirements, and significant operational cost reductions. Whether you’re focused on product distribution or service delivery, FleetSync enables you to create routes that are not only more efficient but also dynamically responsive to real-time conditions, ensuring your fleet consistently performs at maximum efficiency.',
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
          <h1 className='text-3xl sm:text-5xl'>How It Works & Benefits For Projects</h1>

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
        {caseStudies.map((data, index) => (
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
        description="Partner with us to turn your toughest problems into powerful, data-driven solutions—engineered for impact, scalability, and success."
        buttonText="GET IN TOUCH"


      />



    </>
  )
}

export default FleetSync




