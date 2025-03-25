import React from 'react'
// import Automotive from '../../assets/images/Industries/Automotive.jpg'
import Automative from '../../assets/images/Industries/Automative.jpg'
import Financial from '../../assets/images/Industries/Financial.jpg'
import Healthcare from '../../assets/images/Industries/Healthcare.jpg'
import Manufacturing from '../../assets/images/Industries/Manufacturing.jpg'
import SupplyChain from '../../assets/images/Industries/Supply-Chain.jpg'
import Sports from '../../assets/images/Industries/Sports.jpg'
import Technology from '../../assets/images/Industries/Technology.jpg'
import Header from '../../components/Common/Header'
import headerimg from '../../assets/images/ServiceBgImg.jpg'
import { useLocation } from 'react-router-dom'
import IndustriesHeader from '../../layoutes/IndustriesHeader'
import SevicesCard from '../../components/ServicesComponent/SevicesCard'
import FooterCrad from '../../components/Common/FooterCrad'
import SolutionCard from '../../components/Solutions/SolutionCard'
import SolutionsHeader from '../../layoutes/SolutionsHeader'

const SolutionsPage = () => {
  const location = useLocation();
  const Industries = [
    {
      image: Automative,
      vertical: 'FinTech',
      Category: 'Computer Vision & Mobile App',
      title: 'BioSentinal',
      subtitle: "Online Security with Computer Vision-Based Liveness Detection",
      description: `BioSentinal is an advanced computer vision-based security solution designed to prevent impersonation and unauthorized access through real-time liveness detection. \n\nUsing cutting-edge AI, BioSentinal analyzes facial expressions, eye movements, and other behavioral cues to ensure that only genuine, live users interact with digital platforms—strengthening authentication without adding complexity.`,
      isImageRight: false,
      btnPath: '/solutionspage/BioSentinal',
    },
    {
      image: Financial,
      vertical: 'Route Optimization',
      Category: 'AI & Full-Stack',
      title: 'FleetSync',
      subtitle: "Smart Vehicle Routing Software for Maximized Fleet Efficiency",
      description: `FleetSync is an advanced vehicle routing software designed to optimize fleet operations and drive efficiency.\n\n Powered by intelligent algorithms, it tackles the complexities of route planning, minimizing travel distances, reducing fuel consumption, and extending vehicle lifespan—all while cutting operational costs.\n\n 
     Whether managing deliveries or field services, FleetSync enables your fleet to adapt in real time, ensuring optimal performance at all times.`,
      isImageRight: true, // Image on right
      btnPath: '/solutionspage/FleetSync',
    },
    {
      image: Healthcare,
      vertical: 'Security',
      Category: 'Computer Vision, Desktop & Web App',
      title: 'GeoSentinal',
      subtitle: "AI-Powered Virtual Geo-Fencing for Asset Protection",
      description:
        `GeoSentinal is an advanced AI-powered virtual geo-fencing solution designed to revolutionize asset protection. \n\nUsing cutting-edge deep learning technology, GeoSentinal creates smart security perimeters that detect and respond to unauthorized access in real time.\n\n
Unlike traditional monitoring systems, it eliminates false alarms by accurately distinguishing between authorized and unauthorized individuals—ensuring security teams focus only on genuine threats.`,
      isImageRight: true,
      btnPath: '/solutionspage/GeoSentinal',
    },
    {
      image: Manufacturing,
      vertical: 'DataVision',
      Category: ' Face Recognition & Desktop App',
      title: 'VisionTrack',
      subtitle: 'Enhancing Video Analysis for Your Projects',
      description:
        `VisionTrack is a powerful computer vision-based video analysis solution that streamlines the process of identifying specific individuals or objects within vast amounts of video footage.\n\nUsing advanced n-shot models, it efficiently scans datasets, detects designated subjects, and delivers fast, accurate insights—eliminating the need for time-consuming manual review.\n\n
        Ideal for security surveillance, content creation, and event management, VisionTrack empowers teams with scalable, AI-driven video analysis, making complex tasks simpler, faster, and more precise.`,
      isImageRight: false,
      btnPath: '/solutionspage/VisionTrack',
    },

  ];
  return (
    <>
      {/* ===============Header sections ======== */}

      <section className="  px-0 text-white bg-black w-full ">

        <Header

          image={headerimg}
          title='Web Inventix AI Solutions'
          description='We provide a robust, trusted platform that powers the design, build, and deployment of next-generation AI, machine learning, and automation solutions—enabling you to innovate with confidence and scale with ease.'

        />

      </section>
      {/* ==========servie navbar============ */}
      {location.pathname.startsWith("/solutionspage") && <SolutionsHeader />}

      {/* ===============Industries sections ======== */}
      <section className="container grid gap-12 xl:mx-auto xl:items-center sm:gap-20 px-6 lg:px-20 py-12">
        {Industries.map((data, index) => (
          <SolutionCard
            key={index}
            image={data.image}
            title={data.title}
            subtitle={data.subtitle}
            vertical={data.vertical}
            Category={data.Category}
            description={data.description}
            isImageRight={data.isImageRight}
            btnPath={data.btnPath}
          />
        ))}
      </section>
      {/* ===============Industries sections ======== */}
      <FooterCrad
        title="Work with us."
        description="Partner with us to turn your toughest problems into powerful, data-driven solutions—engineered for impact, scalability, and success."
        buttonText="GET IN TOUCH"


      />

    </>
  )
}

export default SolutionsPage



