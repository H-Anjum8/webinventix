import React from 'react'
import Header from '../../components/Common/Header'
import headerimg from '../../assets/images/ServiceBgImg.jpg'
import AI_Card from '../../components/ServicesComponent/AI/AI_Card'
import AIimage from '../../assets/images/Services/AIimage.jpg'
import AIimage1 from '../../assets/images/Services/AIimage1.jpg'
import Technology from '../../components/Common/Technology'
import CommonCard from '../../components/Common/CommonCard'
import TestimonialSlider from '../../components/Common/TestimonialSlider'
import FooterCrad from '../../components/Common/FooterCrad'
import Team from '../../assets/images/Team.jpg'
import { useLocation } from 'react-router-dom'
import ServiceHeader from '../../layoutes/ServiceHeader'
import ServiceHeaderSection from '../../components/Common/ServiceHeaderSection'
const Computer_Vision = () => {
  const location = useLocation();
  const aiSolutions = [
    {
      title: "Computer Vision Applications",
      h1: 'Object Detection and Tracking',
      description1: "At Web Inventix AI, we specialize in developing  innovative Computer Vision applications that cater to diverse business needs. Our expertise includes Object Detection and Tracking, which involves identifying and localizing objects in images and videos. This technology is crucial for applications like autonomous vehicles, surveillance systems, sports analytics, and retail, enhancing safety and efficiency. Additionally, we utilize Image Classification to assign labels to images based on their content, which is beneficial for content filtering, automated tagging, and medical imaging diagnosis.\n\nWe also focus on Facial Recognition, leveraging sophisticated algorithms to identify and verify individuals, which is useful in access control systems, surveillance, and personalized marketing. Our Image Segmentation capabilities divide images into meaningful regions, essential for medical imaging, autonomous navigation, and content editing. Furthermore, our Video Analytics solutions extract insights from video streams, enabling tasks such as object tracking, activity recognition, and crowd monitoring. These technologies are applied in security surveillance, retail analytics, sports, and traffic monitoring to provide actionable intelligence and enhance decision-making processes.",
      h2: 'Video Analytics',
      description2: "Video analytics harnesses the power of computer vision to extract valuable insights and information from video streams. We leverage video analytics solutions to perform various tasks such as object tracking, activity recognition, crowd monitoring, and behavior analysis. This technology is applicable in settings such as security surveillance, retail analytics, sports, and traffic monitoring to provide actionable intelligence and enhance decision-making processes.",

      image: AIimage,
      isImageRight: true,

    },
    {
      title: "Computer Vision Approaches",
      h1: 'Applications Across Industries',
      description1: "At Web Inventix AI, our image processing and computer vision capabilities span multiple industries, driving innovation and efficiency. In healthcare, we enable medical image analysis for disease detection and treatment planning. In security, our solutions enhance real-time surveillance by recognizing and tracking objects or individuals. Automotive applications include driver assistance systems and autonomous vehicle perception.",
      h2: 'Precision and Accuracy',
      description2: "Our computer vision algorithms are designed to deliver high precision and accuracy in visual data interpretation. This reduces errors and enables reliable decision-making, ensuring that businesses can trust the insights derived from visual data.",
      image: AIimage1,
      isImageRight: false,


    },
  ];

   const ebookData = [{
     
      title: "Guarding the Digital Gates: How Computer Vision Liveliness Detection Secures Modern Identity",
      learnPoints: [
        "You’ll uncover how computer vision verifies genuine human presence.",
        "You’ll explore real-world methods to seamlessly integrate liveliness detection.",
        "You’ll learn best practices in maintaining both security and user convenience."
      ],
      btn: 'READ BLOG POST',
      image:Team,
    }];
  return (
    <>
      {/* ===============Header sections ======== */}

      <section className="  px-0 text-white bg-black w-full ">

        <ServiceHeaderSection

          image={headerimg}
          title='Computer Vision Image Processing'
          description=' We harness visual data through advanced image processing and computer vision, specializing in image recognition, object detection, video analytics, and facial recognition. We leverage computer vision to enhance decision-making, drive automation, and foster innovation.'
          lineShow={true}
        />

      </section>
       {/* ==========servie navbar============ */}
    {location.pathname.startsWith("/services") && <ServiceHeader />}
      {/* ===============Content sections ======== */}

      <section className="container grid gap-12 xl:mx-auto xl:items-center sm:gap-20 px-6 lg:px-20 py-12">
        {aiSolutions.map((e) => (
          <AI_Card
            key={e.id}
            title={e.title}
            h1={e.h1}
            description1={e.description1}
            h2={e.h2}
            description2={e.description2}
            image={e.image}
            isImageRight={e.isImageRight}


          />
        ))


        }

      </section>
        {/* ==========Technology===========  */}
        <Technology />
      {/* ==========Statup==========  */}
      <section className="bg-black text-white mb-16 ">
        {ebookData?.map((data, index) => (
          <CommonCard
            key={index}
           
            title={data.title}
            learnPoints={data.learnPoints}
            callToAction={data.callToAction}
            btn={data.btn}
            image={data.image}

          />
        ))}
      </section>
        {/* ===============Carousel section ======== */}
        <TestimonialSlider />
        {/* ===============Footer Card section ======== */}\
        <FooterCrad
         title="Partner with us."
         description="Find out how we can help you tackle your most challenging AI, automation and machine learning projects."
         buttonText="GET IN TOUCH"
         showLine={true}
        //  onButtonClick={() => alert("Button Clicked!")}
        
        />

    </>


   
  )
}

export default Computer_Vision