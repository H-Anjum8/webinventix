import React from 'react'
import headerimg from '../../assets/images/ServiceBgImg.jpg'
import IndustriesHeader from '../../layoutes/IndustriesHeader'
import AutomativeImg from '../../assets/images/Industries/AutomativeImg.jpg'
import FooterCrad from '../../components/Common/FooterCrad'
import ServiceHeaderSection from '../../components/Common/ServiceHeaderSection'

import Card from '../../components/Industries/Card'
import ExpertiseCard from '../../components/Industries/ExpertiseCard'
import expertiesImg from '../../assets/images/Industries/expertise.jpg'

const Automotive = () => {
     
   
    //  const Data = [{
    //    heading:'Healthcare',
    //    title: "AI and Clinician Burnout: What’s Actually Working, What’s Still a Mess",
    //    subtitle: "If your staffing model is brittle, if your EHR is ten years behind, if your training loops are non-existent—AI just becomes another expensive bandage.\n\nFix your operations first. Then let AI amplify the upside.",
   
    //    btn: 'READ BLOG POST',
    //    image: Team,
    //  }];
   
     const data = [
       {
         title: "Building the transport vehicle of tomorrow",
         h1: 'Enhanced Vehicle Design and Manufacturing',
         description1: "At Web Inventix AI, we leverage AI to enhance various aspects of the automotive industry. Our solutions include generative design, which uses AI to create more durable and sustainable parts, improving vehicle functionality and aesthetics. Additionally, AI-powered computer vision is implemented for quality control, detecting defects during assembly to maintain high manufacturing standards and reduce manual intervention. Predictive maintenance is also optimized using AI to analyze machinery data, predict potential failures, and minimize downtime, thereby optimizing production efficiency.",
         image: AutomativeImg,
         isImageRight: false,
   
   
       },
   
     ];
    const ExpertiesData = [
        {
            image: expertiesImg,
            title: "Computer Vision",

            description:
                "Utilize cutting-edge computer vision to develop applications that interpret the environment by detecting, segmenting, and tracking objects.",
            path: '/services/Computer-Vision'
        },
        {
            image: expertiesImg,
            title: "Deep Learning",
            description:
                "Utilize state-of-the-art deep learning frameworks and robust machine vision systems for accurate classification, recognition, tracking, and detection.",
            path: '/services/Machine-Learning'
        },
        {
            image: expertiesImg,
            title: "Artificial Intelligence",
            description:
                "Utilize state-of-the-art artificial intelligence models and robust computational systems for accurate decision-making, pattern recognition, learning, and optimization.",
            path: '/services/Artificial-Intelligence'

        }]
    return (
        <>
            {/* ===============Header sections ======== */}

            <section className="  px-0 text-white bg-black w-full ">

                <ServiceHeaderSection

                    image={headerimg}
                    title='Automotives'
                    description=' Automotives At Web Inventix AI, we empower automotive companies to stay ahead with solutions like multi-camera object tracking, behavior identification, and process optimization. Our on-board AI solutions help build the next generation of vehicles.'
                // lineShow={true}
                />

            </section>
            {/* ==========Industries navbar============ */}
            {location.pathname.startsWith("/industries") && <IndustriesHeader />}

            {/* ===========Contetnt  section =========== */}
            <section className="container grid gap-12  my-20 xl:mx-auto xl:items-center sm:gap-20 px-6 lg:px-20 py-12">
                {data?.map((e) => (
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
            {/* ===============expertise section ======== */}
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
           
            {/* ===============Industries sections ======== */}
            <FooterCrad
                title="Work with us."
                description="Partner with us to turn your toughest problems into powerful, data-driven solutions—engineered for impact, scalability, and success."
                buttonText="GET IN TOUCH"


            />

        </>
    )
}

export default Automotive