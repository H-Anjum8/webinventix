import React from 'react';

// import backimg from '../../assets/images/headerimg.jpg'
import headerimg1 from '../../assets/images/AboutHeader.jpg'
import image from '../../assets/images/img.png'

import FeatureCard from '../../components/HomeComponnets/FeatureCard';
import img4 from '../../assets/images/4.jpeg'
import img5 from '../../assets/images/5.jpeg'
import img6 from '../../assets/images/6.jpeg'

import OurTeam from '../../components/Common/OurTeam';
import ServiceHeaderSection from '../../components/Common/ServiceHeaderSection';
import FooterCrad from '../../components/Common/FooterCrad';



const Index = () => {
  const features = [
    {
      image: image,
      title: "How We Work",
      description:
        "We start by understanding your actual workflows—the ones buried under manual steps, brittle integrations, and legacy tools. From there, we design solutions that strip out friction, not just add features.\n\n\nWe validate everything. Data, logic, outcomes. No black boxes, no hand-waving. If something’s off, we surface it early. If there’s risk, we quantify it. If a path is unworkable, we don’t force it.\n\nOur teams work fast because our process is lean. No bloat, no excess layers, no vague roadmaps. Just sharp tools, tight communication, and a focus on impact.\n\nWe operate with transparency at every step. You’ll always know where things stand, what’s being built, and what’s blocking momentum. That’s how we keep trust high and rework low.\n\nWhat sets us apart isn’t language—it’s posture. We operate like operators, not consultants. That’s what our clients come back for.",
      isImageRight: true,
    },

  ];


  const teamMembers = [
    {
      name: "Dan Gratton",
      title: "CHIEF EXECUTIVE OFFICER",
      image: "dan-gratton.jpg",
      description:
        "Dan Gratton is a globally experienced executive... (Add full bio here)",
    },
    {
      name: "Dr. Ghazanfar Monir",
      title: "TECHNICAL DIRECTOR",
      image: "ghazanfar-monir.jpg",
      description:
        "Dr. Monir received his doctorate in Signal Processing... (Add full bio here)",
    },
    {
      name: "Dr. Husain Parvez",
      title: "TECHNICAL DIRECTOR",
      image: "husain-parvez.jpg",
      description:
        "Dr. Husain Parvez holds a PhD and MS degree in Computer Science... (Add full bio here)",
    },
  ];




  return (
    <>
      {/* =============== Hero Section =============== */}

      {/* <ServiceHeader/> */}

      <section className="  px-0 text-white py-20 bg-black HeadrImg1 w-full ">

        <ServiceHeaderSection

          image={headerimg1}
          title='Artificial Intelligence'
          description=' At Web Inventix AI, we leverage cutting-edge AI to drive growth and innovation. Our team crafts tailored solutions to transform operations, boost customer engagement, and maximize profitability.
   By partnering with us, you’ll gain a trusted ally committed to unlocking new levels of efficiency and competitive advantage through the power of artificial intelligence.'

        />

      </section>





      {/* ===============AImi section ======== */}

      <div className='bg-white'>
        <div className="bg-white text-black container mx-auto gap-2 px-6 lg:px-14 flex flex-col sm:flex-row items-center py-12 ">
          {/* Flex Container for Row Layout */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Introduction Section */}
            <section className="flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                AI, ML, Automation Engineers
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                Web Inheritzi AI builds systems that make operations faster, smarter, and less dependent on human intervention. We design machine-inherent and automation solutions that integrate seamlessly through the mobile. Our focus is on creating Azure systems that solve operational drag and drive measurable output. Our engineers and ML specialists bring cross-sector expertise, deploying drones and automation layers where they make the most impact within time-sensitive workflows.
              </p>
              <p className="text-base sm:text-lg text-black font-semibold">
                We don’t sell tools. We solve infrastructure problems.
              </p>

              {/* Contact Button */}
              <div className="pt-6">
                <button className="bg-[#32e2bc] hover:bg-black text-black hover:text-white font-semibold px-6 py-3 rounded-sm transition duration-300">
                  Contact Us
                </button>
              </div>
            </section>

            {/* Vision Section */}
            <section className="flex-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Our Vision</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                We see automation as infrastructure. Not a novelty. Not a tool. It’s the backbone of modern enterprise execution. The goal isn’t just efficiency—it’s throughput, scale, and resilience. We anticipate intelligent systems that integrate clearly into the existing stack, without disruption or chaos.
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Every build is purpose-fit. No generic software. No repetitive playbooks. Custom architecture, tailored to business logic, built to scale.
              </p>
            </section>
          </div>
        </div>
      </div>


      {/* 
      {/* ===============Feature section ======== */}
      <div className='bg-white'>
        <section className=" container mx-auto gap-2 px-6 lg:px-14 flex flex-col sm:flex-row items-center py-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              isImageRight={feature.isImageRight}
            />
          ))}
        </section>
      </div>

      {/*team  */}

      <OurTeam />



      {/* section */}

      <div className="bg-white text-black py-12 ">
        {/* Heading Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-25 ">Where do you want to start?</h1>
        </section>

        {/* Grid Section */}
        <div className='container mx-auto gap-2 px-6 lg:px-14 flex flex-col sm:flex-row items-center  '>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Optimize & Automate */}
            <div className="bg-white p-6 rounded-lg ">
              <img src={img4} alt="Optimize & Automate" className=" w-23 h-23 rounded-t-lg mb-8 " />
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Optimize & Automate</h2>
              <p className="text-gray-700">
                Streamline operations, eliminate inefficiencies, and scale with AI-driven automation. Replace manual work with intelligent systems that drive measurable results.
              </p>
            </div>

            {/* Strategy & Execution */}
            <div className="bg-white p-6 rounded-lg ">
              <img src={img5} alt="Strategy & Execution" className="w-23 h-23 rounded-t-lg mb-8 " />
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Strategy & Execution</h2>
              <p className="text-gray-700">
                From concept to deployment, we help businesses integrate AI and machine learning with precision—so you see real impact, not just hype.
              </p>
            </div>

            {/* Custom AI Solutions */}
            <div className=" p-6 rounded-lg ">
              <img src={img6} alt="Custom AI Solutions" className="w-23 h-23 rounded-t-lg mb-8  bg-white" />
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Custom AI Solutions</h2>
              <p className="text-gray-700">
                Every business is unique. We design and develop AI-driven tools tailored to your industry, workflows, and growth goals. Let’s build your competitive edge.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ===============Footer Card section ======== */}
      <FooterCrad
        title="Work with us."
        description="We’re seeking motivated and fast-learning professionals across various disciplines to join our team. Whether you’re a data scientist, engineer, sales expert, or marketing innovator, we invite you to be part of our collaborative and forward-thinking environment. If you’re passionate about driving growth, innovation, and success, we want to hear from you!"
        buttonText="Apply Now"
        showLine={true}
      //  onButtonClick={() => alert("Button Clicked!")}

      />
    </>
  );
};

export default Index;