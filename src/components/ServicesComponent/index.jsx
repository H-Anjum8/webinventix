import React from 'react'

import img1 from '../../assets/images/Services/AI.jpg';
import img2 from '../../assets/images/Services/ComputerVision.jpg';
import img3 from '../../assets/images/Services/DataIntelligence.jpg';
import img4 from '../../assets/images/Services/Enterprise.jpg';
import img5 from '../../assets/images/Services/Automations.jpg';
import img6 from '../../assets/images/Services/MachineLearning.jpg';
import img7 from '../../assets/images/Services/NLP.jpg';
import SevicesCard from './SevicesCard';
import FooterCrad from '../Common/FooterCrad';
import TestimonialSlider from '../Common/TestimonialSlider';

import Header from '../Common/Header';
import { useLocation } from 'react-router-dom';
import ServiceHeader from '../../layoutes/ServiceHeader';
import headerimg from '../../assets/images/ServiceBgImg.jpg'

const ServicesComponent = () => {
    const location = useLocation();
   
    const Sevices = [
        {
            image: img1,
            title: "Artificial Intelligence",
            description: `At Web Inventix AI, we develop game-changing AI solutions that seamlessly integrate with your business vision accelerating sustainable growth with a competitive edge.


            Our AI experts think beyond traditional business solutions. We understand your pain points and offer innovative and efficient AI solutions by working in close collaboration with your team. Our goal? Smarter decisions that optimize your core operations along with a competitive edge, market leadership, and long-term profitability.`,
            isImageRight: true,
            btnPath: '/services/Artificial-Intelligence',
        },
        {
            image: img2,
            title: "Computer Vision & Image Processing",
            description:
                `Leverage the full potential of raw visual data beyond human capabilities. Through advanced computer vision and image processing, our team at Web Inventix AI turns pixels into possibilities giving you actionable intelligence that can transform your business operations.\n\nOur customized solutions interpret, analyze, and offer precise intelligence that can help you enhance quality control, strengthen security, and tap into new revenue opportunities accelerating business profitability. Unlock the full potential of visual data with our deep domain expertise and cutting-edge algorithms and step into an innovative way of leading business with impactful decisions, utmost accuracy, and faster actions`,
            isImageRight: false, // Image on right
            btnPath: '/services/Computer-Vision',
        },
        {
            image: img3,
            title: "Data Intelligence & Analytics",
            description:
                `At Web Inventix AI, our experts analyze and turn your big data into meaningful insights that aid you in developing smart decisions, optimizing core business operations and unveiling new growth opportunities through game-changing Analytical solutions and Data intelligence.\n\nOur predictive analytics and business intelligence identify where you lack in serving customers. By uncovering these patterns, we offer process automation and optimization (to enhance efficiency), customer insights (for personalized experiences), risk management strategies (to strengthen security), and competitive intelligence after a thorough trend analysis. Lead your way to competitive advantage with our expert analysis of merely raw data.`,
            isImageRight: true,
            btnPath: '/services/Data-Intelligent-Analytics',
        },
        {
            image: img4,
            title: "Enterprise AI Automation",
            description:
                `At Web Inventix AI, we empower enterprises to scale smarter with intelligent automation and AI-driven transformation—streamlining complex workflows, reducing costs, and accelerating time-to-value.\n\nOur Enterprise AI & Automation solutions are engineered to integrate seamlessly across your organization, unlocking new levels of efficiency, productivity, and agility. From intelligent process automation to predictive decision-making, we help you future-proof your operations and lead with innovation—at scale and at speed.`,
            isImageRight: false,
            btnPath: '/services/Enterprise-AI-Automation',
        },
        {
            image: img5,
            title: "IoT & Smart Automations",
            description:
                `At Web Inventix AI, we create intelligent ecosystems to enhance efficiency, boost decision making, and transform daily operations through IoT (internet of Things) and smart automation.\n\nFrom healthcare convenience to enhanced security and optimized business productivity, compete like never before with IoT and smart automation. These automated solutions offer you increased efficiency, cost-effectiveness, enhanced customer experience, scalability, and real-time insights to keep you ahead of competitors.`,
            isImageRight: true,
            btnPath: '/blog/view/11',
        },
        {
            image: img6,
            title: "Machine Learning",
            description:
                `Unlock the potential of intelligent decisions and predictive analytics through the use of Machine Learning.\n\nTransform your business goals and excel through our innovative ML that learns, adapts, and offers innovative decisions without any explicit programming. From risk management to personalized experiences and predictive analysis, ML understands your business model and keeps you ahead of competitors with its efficient and precise analysis.`,
            isImageRight: false,
            btnPath: '/services/Machine-Learning',
        },
        {
            image: img7,
            title: "NLP & Language Processing",
            description:
                `Natural Language Processing (NLP) and Language Intelligence solutions can transform your business by allowing AI to understand human language, interpret and respond like a human do.\n\nWith advanced sentiment analysis, NLP offers an intuitive and seamless conversation between humans (customers) and AI-powered chatbots, virtual assistants, and translators. Unlock new possibilities through innovative automated AI responses with a human touch and enjoy a competitive edge and satisfied customers.`,
            isImageRight: true,
            btnPath: '/services/nlp-Language-Processing',
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
            {location.pathname.startsWith("/services") && <ServiceHeader />}
            {/* {location.pathname === "/services" && <ServiceHeader />} */}
            {/* ===============Services sections ======== */}
            <section className="container grid gap-12 xl:mx-auto xl:items-center sm:gap-20 px-6 lg:px-20 py-12">
                {Sevices.map((Sevice, index) => (
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
            
             {/* ===========Testimonial sections ========  */}
             <TestimonialSlider />

            {/* ===========FooterCard sections ========  */}
            <FooterCrad
                title="Partner with us."
                subTitle="Discover How Web Inventix AI Can Help You Solve Your Most Complex Data Science & Machine Learning Challenges."
                description="Partner with us to turn your toughest problems into powerful, data-driven solutions—engineered for impact, scalability, and success."
                buttonText="GET IN TOUCH"
               
                onButtonClick={''}
            />

             

        </>
    )
}

export default ServicesComponent




