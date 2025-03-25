import React from 'react'
import expertise from '../../assets/images/Industries/expertise.jpg'
import SolutionExpertiesCard from '../../components/Solutions/SolutionExpertiesCard'
import FooterCrad from '../../components/Common/FooterCrad'
import SolutionFeatureCard from '../../components/Solutions/SolutionFeatureCard'
import Team from '../../assets/images/Team.jpg'
import img1 from '../../assets/images/Solutions/7.jpg'
import img2 from '../../assets/images/Solutions/8.jpg'
import SolutionCard from '../../components/Solutions/SolutionCard'
import SolutionsHeader from '../../layoutes/SolutionsHeader'

const VisionTrack = () => {
  const ExpertiesData = [
    {
      image: expertise,
      title: "Object Detection ",
      description:
        "Effortless Object & Person Detection – Quickly identifies subjects in video footage, saving time and resources.",
      path: '/services/Artificial-Intelligence'

    },
    {
      image: expertise,
      title: "Enterprise Scale",

      description:
        "Accessible & Scalable – Designed for both technical and non-technical users, with an intuitive interface and powerful backend.",
      path: '/services/Machine-Learning'
    },
    {
      image: expertise,
      title: "Customizable",
      description:
        "Versatile Across Industries – Supports security, media production, event monitoring, and more. ",
      path: '/services/Machine-Learning'
    },
  ]
  
  const solutions = [
    {
      image: img1,
      vertical: ' DataVision ',
      Category: ' Face Recognition & Desktop App',

      title: 'VisionTrack – Enhancing Video Analysis for Your Projects',
      isImageRight: true,
      btnPath: "#"
    },
    {
      image: img2,
      toptitle: 'ANALYZE VIDEO CONTENT WITH UNMATCHED EFFICIENCY',
      title1:'By leveraging AI-powered recognition and a user-friendly interface, VisionTrack ensures seamless and efficient video analysis for a variety of industries.',
      description: 'VisionTrack is a cutting-edge computer vision and full-stack development product designed to streamline the process of identifying specific individuals or objects in lengthy video footage. By employing customizable n-shot models, the system efficiently scans entire video datasets and accurately detects instances where the designated subject appears. This innovative solution saves substantial time and effort in projects involving video analysis, making it particularly valuable for tasks such as security surveillance, content creation, and event management.\n\nWith its scalable architecture, user-friendly interface, and robust backend, VisionTrack empowers projects by enhancing efficiency, increasing accuracy, and simplifying the complex task of sifting through extensive video content, ultimately delivering a significant boost in productivity and outcomes for a wide range of applications.',
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
        <h1 className='text-3xl sm:text-5xl'>Key Benefits for Video-Driven Projects</h1>

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
   

    {/* ===============Footer sections ======== */}
    <FooterCrad
      title="Partner with us."
      description="Partner with us to turn your toughest problems into powerful, data-driven solutions—engineered for impact, scalability, and success."
      buttonText="GET IN TOUCH"


    />



  </>
  )
}

export default VisionTrack














