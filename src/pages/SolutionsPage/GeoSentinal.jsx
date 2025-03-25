import React from 'react'
import expertise from '../../assets/images/Industries/expertise.jpg'
import SolutionExpertiesCard from '../../components/Solutions/SolutionExpertiesCard'
import FooterCrad from '../../components/Common/FooterCrad'
import SolutionFeatureCard from '../../components/Solutions/SolutionFeatureCard'
import Team from '../../assets/images/Team.jpg'
import img1 from '../../assets/images/Solutions/5.jpg'
import img2 from '../../assets/images/Solutions/6.jpg'
import SolutionCard from '../../components/Solutions/SolutionCard'
import SolutionsHeader from '../../layoutes/SolutionsHeader'

const GeoSentinal = () => {
  const ExpertiesData = [
    {
      image: expertise,
      title: "Intelligent Detection ",
      description:
        "GeoSentinel’s deep learning capabilities differentiate between authorized personnel and potential intruders, significantly decreasing unnecessary alerts.",
      path: '/services/Artificial-Intelligence'

    },
    {
      image: expertise,
      title: "Resource Efficiency",

      description:
        "By eliminating the need for continuous surveillance, GeoSentinel enhances resource distribution, reducing overall security expenditures.",
      path: '/services/Machine-Learning'
    },
    {
      image: expertise,
      title: "Enhanced Service Delivery",
      description:
        "GeoSentinel strengthens asset security, decreases incident response duration, and improves overall security operations, reinforcing your protective infrastructure. ",
      path: '/services/Machine-Learning'
    },
  ]
  const caseStudies = [{
    heading: "Featured Blog Articles",
    image: Team,
    items: [
      {
        feature_id: "01",
        title: "IThe Internet of Things (IoT) Empowering Enterprise Transformation",
        link: "#",

      },
      {
        feature_id: "02",
        title: "The Future of Infrastructure and Operations: 6 Strategic Trends for 2025 Enterprise Success",
        link: "#",

      },
    ],
  }
  ];

  const solutions = [
    {
      image: img1,
      vertical: ' Security ',
      Category: 'Computer Vision, Desktop App & Web App',

      title: 'GeoSentinal- AI Powered Virtual Geo-fencing for Asset Protection',
      isImageRight: true,
      btnPath: "#"
    },
    {
      image: img2,
      toptitle: 'TRANSFORM IMAGES INTO INTELLIGENCE',
      title1:'GeoSentinal operates by creating virtual boundaries around specific areas, effectively defining restricted zones using Virtual Geo-fencing technology.',
      description: 'GeoSentinal is an innovative asset protection solution that harnesses the power of Artificial Intelligence (AI) and Virtual Geo-fencing technology. This cutting-edge system is designed to elevate asset security to new levels of efficiency and effectiveness. At its core, GeoSentinal employs state-of-the-art deep learning technology, which means it has the ability to generate alarms exclusively when a person enters a restricted zone.\n\nThis represents a significant advancement in asset protection, as it drastically reduces false alarms and ensures that security teams are alerted only when there’s a genuine intrusion, allowing for a more targeted and responsive approach to safeguarding valuable assets.',
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
          title1={data.title1}
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

export default GeoSentinal









