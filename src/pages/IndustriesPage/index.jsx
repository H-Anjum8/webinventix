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



const IndustriesPage = () => {
  const location = useLocation();
  const Industries = [
    {
      image: Automative,
      title: "Automotive",
      description: `We believe in driving innovation that redefines the automotive landscape. From implementing advanced behavioral monitoring for child protection to seamlessly integrating ML into digital platforms, our seasoned team delivers high-impact, tailored solutions. By harnessing deep expertise in machine learning, we help automotive leaders streamline operations, elevate experiences, and accelerate transformative growth across the industry.`,
      isImageRight: true,
      btnPath: '/industries/Automotive',
    },
    {
      image: Financial,
      title: "Financial",
      description: `Financial We empower financial leaders with the strategic insights and cutting-edge technologies they need to stay ahead in a rapidly evolving landscape. Our team leverages advanced analytics and machine learning to enhance risk management, streamline operations, and strengthen compliance. By harnessing the power of data-driven strategies, we help financial organizations optimize decision-making, boost profitability, and deliver exceptional experiences that build lasting trust and value.`,
      isImageRight: false, // Image on right
      btnPath: '/industries/Financial',
    },
    {
      image: Healthcare,
      title: "Healthcare",
      description:
        `We embolden healthcare and pharmaceutical innovators to elevate patient safety and efficacy with data-driven precision. By harnessing advanced machine learning techniques, we proactively detect prescription fraud, tailor outreach for healthcare providers, and spearhead research into next-generation therapeutics. Our holistic approach ensures organizations stay agile, resilient, and at the cutting edge of patient-centric care.`,
      isImageRight: true,
      btnPath: '/industries/Healthcare',
    },
    {
      image: Manufacturing,
      title: 'Manufacturing',
      description:
        `We enable manufacturers to seize new possibilities with cutting-edge machine learning and AI solutions. From advanced computer vision for the food industry to real-time sensor analytics on production lines, we drive enhanced efficiency, improve product quality, and unlock transformative growth for businesses across the manufacturing landscape.`,
      isImageRight: false,
      btnPath: '/industries/Manufacturing',
    },
    {
      image: SupplyChain,
      title: "Supply Chain",
      description:
        `At Web Inventix AI, we unlock next-level efficiency and agility across the entire supply chain. By fusing advanced analytics with real-time insights, we optimize routes, inventory management, streamline logistics, and reduce operational risks. Our intelligent solutions empower businesses to adapt swiftly to market changes, bolster resilience, and accelerate growth in a constantly evolving global landscape.`,
      isImageRight: true,
      btnPath: '/industries/Supply-Chain',
    },
    {
      image: Sports,
      title: "Sports",
      description:
        `Web Inventix delivers innovative software solutions tailored for the sports and lifestyle industry, combining user-centric design with cutting-edge technology. Our services include custom mobile and web applications for fitness tracking, sports training, and wellness, as well as seamless integration with wearable devices for real-time performance and health data. We develop IoT-powered solutions for smart gyms and equipment, along with AI-driven analytics to enhance training outcomes, engagement, and personalization. `,
      isImageRight: false,
      btnPath: '/industries/Sports',
    },
    {
      image: Technology,
      title: "Technology and SaaS",
      description:
        `We redefine the boundaries of innovation for technology and software. From safeguarding children through sophisticated behavioral monitoring to embedding advanced machine learning in web and mobile platforms, our deep expertise in custom ML solutions propels digital transformation. We empower industry leaders to reimagine operations, accelerate growth, and drive unprecedented value in an ever-evolving tech landscape.`,
      isImageRight: true,
      btnPath: '/industries/Technology-and-SaaS',
    },
  ];
  return (
    <>
      {/* ===============Header sections ======== */}

      <section className="  px-0 text-white bg-black w-full ">

        <Header

          image={headerimg}
          title='Intelligence Powered by Expertise'
          description=' With a blend of cross-industry expertise, innovative perspectives, and AI excellence, we devise intelligent systems for seamless core operations and growth. Unlock the power of AI, where automation meets innovation, and lead the business world beyond the conventional norms.'

        />

      </section>
      {location.pathname.startsWith("/industries") && <IndustriesHeader />}

      {/* ===============Industries sections ======== */}
      <section className="container grid gap-12 xl:mx-auto xl:items-center sm:gap-20 px-6 lg:px-20 py-12">
        {Industries.map((Sevice, index) => (
          <SevicesCard
            key={index}
            image={Sevice.image}
            title={Sevice.title}
            description={Sevice.description}
            isImageRight={Sevice.isImageRight}
            btnPath={Sevice.btnPath}
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

export default IndustriesPage