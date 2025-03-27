import React, { useEffect, useState } from 'react'
import headerImg from '../../assets/images/HeadrImg.jpg'
import FeatureCard from './FeatureCard';
import img1 from '../../assets/images/FeatureImage1.png'
import img2 from '../../assets/images/FeatureImage2.png'
import img3 from '../../assets/images/FeatureImage3.png'

import AiImg1 from '../../assets/images/Ai_Image1.png'
import AiImg2 from '../../assets/images/Ai_Image2.png'
import AiImg3 from '../../assets/images/Ai_Image3.png'
import Team from '../../assets/images/Team.jpg'
import TestimonialSlider from '../Common/TestimonialSlider';
import Technology from '../Common/Technology';
import CommonCard from '../Common/CommonCard';
import { Link } from 'react-router-dom';







const Home = () => {
  const handleClick = () => {
    // Open in same tab as fallback
    window.location.href = 'https://calendly.com/webinventix-ai';
  };


  const features = [
    {
      image: img1,
      title: "Innovating with AI-Powered Solutions",
      description:
        "At Web Inventix AI, we help businesses design, engineer, and deploy cutting-edge AI and machine learning solutions. Our custom-built platforms accelerate development, enabling companies to scale and integrate AI-driven automation in record time.",
      isImageRight: true,
    },
    {
      image: img2,
      title: "Diverse Industry Expertise",
      description:
        "We bring deep experience working with organizations of all sizes—from startups to Fortune 500 enterprises—across industries such as technology, healthcare, finance, retail, energy, automotive, gaming, and beyond. Our cross-industry insights empower businesses to leverage AI for maximum impact.",
      isImageRight: false, // Image on right
    },
    {
      image: img3,
      title: "Driven by Advanced AI & Data Science",
      description:
        "Our team of expert data scientists, engineers, and AI specialists drive innovation through research-backed methodologies and state-of-the-art technologies. With a focus on automation, machine learning, and scalable AI architectures, we design, build, and deploy intelligent solutions tailored to your business needs.",
      isImageRight: true,
    },
  ];


  const aiFeatures = [
    {
      image: AiImg1,
      title: "Enterprise AI",
      subtitle: "Cut Waste. Speed Decisions",
      description:
        "AI isn’t about dashboards—it’s about execution. We build automation systems that think in real time, so you can. Predictive models, next-best actions, and workstreams get baked into your workflows. No more guessing. No more delay.",
      path: '/services/Enterprise-AI-Automation'
    },
    {
      image: AiImg2,
      title: "Machine Learning",
      subtitle: "Real-Time Intelligence",
      description:
        "We deploy machine learning pipelines where they actually matter—in production, at scale, with complex automation. It’s just math and algorithms that don’t break under pressure. Data flows. It’s insights live. Go, get smarter.",
      path: '/services/Machine-Learning'
    },
    {
      image: AiImg3,
      title: "Computer Vision",
      subtitle: "Turn Visual Data Into Decisions",
      description:
        "We build systems that see what your teams miss. Object tracking, behavioral analysis, automated decision-making—deployed fast, integrated faster. Computers who don’t just detect—do. End-to-end AI from robotics to manufacturing lines.",
      heading3: ' What You’ll Learn Inside:',

      endline: ' Get your free copy now and start transforming your operations from the inside out.',
      path: '/services/Computer-Vision'

    },
  ];
  const ebookData = [{
    heading: "READY TO HARNESS AI FOR REAL BUSINESS IMPACT?",
    title: "From AI Hype to Operational Reality",
    subtitle: "Unlock Practical Strategies to Drive Real Business Impact",
    description:
      "If you're serious about transforming operations – not just talking about it – this free eBook is your starting point.",
    learnTitle: "What You’ll Learn Inside:",
    learnPoints: [
      "Pinpoint hidden operational blockers that are draining time, money, and momentum",
      "Build a sustainable, scalable AI roadmap without drowning in tech jargon",
      "Embed AI into day-to-day workflows to boost productivity, accuracy, and speed",
      "Drive intelligent change – without disrupting what’s already working",
    ],
    callToAction:
      "Get your free copy now and start transforming your operations from the inside out.",
    image: Team,
  }];

  return (
    <>
      {/* ===============Hero section ======== */}
      <section className=" bg-black  text-white py-20 sm:pt-30 sm:pb-70 flex items-center">

        <div className="relative container mx-auto h-[500px] sm:h-[600px] flex items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center "
            style={{
              backgroundImage: `url(${headerImg})`
            }}
          ></div>

          {/* Content Inside */}
          <div className="relative z-10 w-full sm:w-[60%] lg:w-[68%] text-center sm:text-left px-6">
            <h1 className=" sm:text-6xl md:text-5xl text-2xl font-medium mb-4">
              Artificial Intelligence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32e2bc] to-[#94e8d3] drop-shadow-lg">
                Development
              </span>
              Company
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              At our core, we are your trusted partner in AI innovation. Our singular mission is to create intelligent solutions that deliver lasting, profitable impact for your business.
            </p>
            <div className="border-t border-white w-40 h-2 mx-auto sm:mx-2 my-6"></div>
            {/* <Link to='/' className="px-6 py-3 cursor-pointer bg-gradient-to-r from-[#32e2bc] to-[#94e8d3] text-black font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
              BOOK A CALL
            </Link> */}
            {/* <button onClick={() => window.open("https://calendly.com/your-link", "_blank")} className="px-6 py-3 cursor-pointer bg-gradient-to-r from-[#32e2bc] to-[#94e8d3] text-black font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
              BOOK A CALL
            </button> */}

            <button
              onClick={handleClick}
              className="px-6 py-3 bg-gradient-to-r from-[#32e2bc] to-[#94e8d3] text-black font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
            >
              BOOK A CALL
            </button>


          </div>
        </div>


      </section>

      {/* ===============About us section ======== */}
      <div className="bg-white py-16  px-0 md:px-6 lg:px-8">
        <div className="max-w-7xl  mx-auto  ">

          <div className="  items-start text-start md:text-center p-8 rounded-lg ">
            <span className='text-[#32e2bc] pb-4'>ABOUT US</span>
            <h1 className=" text-3xl md:text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 ">
              Web Inventix AI
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 ">
              <strong>TL;DR:</strong> We build AI systems that reduce friction, cut waste, and deliver measurable results—without adding complexity.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              At Web Inventix AI, we help enterprises deploy AI where it actually works—in operations, not just slide decks. Our focus is practical AI: automation that reduces overhead, analytics that improve decisions, and systems that scale without bloating the tech stack.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We work alongside enterprise teams to integrate AI into real workflows. That means designing systems that don’t disrupt existing infrastructure but sharpen it. Whether it’s machine learning, NLP, IoT, automations or predictive models, everything we build is grounded in measurable impact—faster decisions, leaner processes, better outcomes.
            </p>
            <p className="text-lg text-gray-700 mb-6 ">
              Our team of over 50 engineers, data scientists, and AI architects delivers tailored solutions across sectors like finance, logistics, healthcare, e-commerce, and enterprise SaaS. No templated platforms, no one-size-fits-all frameworks—just purpose-built systems that drive results without creating more complexity.
            </p>
            <p className="text-lg text-gray-700 mb-6 ">
              We build AI that works in the real world.
            </p>
            <div className='flex justify-center'>
              <Link to='/about' className=" cursor-pointer px-8 py-3 bg-gradient-to-r from-[#32e2bc] rounded-sm to-[#94e8d3] text-black font-semibold  shadow-lg hover:shadow-xl transition-all duration-300  ">
                LEARN MORE
              </Link>
            </div>

          </div>

        </div>
      </div>
      {/* ===============Feature section ======== */}
      <section className="container grid gap-12 xl:mx-auto xl:items-center sm:gap-20 px-6 lg:px-20 py-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            description={feature.description}
            isImageRight={feature.isImageRight}
            highlightWords={["AI-Powered", "Expertise", "Advanced"]} // Words to highlight
          />
        ))}
      </section>

      {/* ===============Technology section ======== */}
      <Technology />
      {/* ===============Team section ======== */}
      <section className=" text-white  py-4 ">
        {ebookData?.map((data, index) => (
          <CommonCard
            key={index}
            heading={data.heading}
            title={data.title}
            subtitle={data.subtitle}
            description={data.description}
            learnTitle={data.learnTitle}
            learnPoints={data.learnPoints}
            callToAction={data.callToAction}
            image={data.image}
            IsBtn={false}

          />
        ))}
      </section>
      {/* ===============Growth section ======== */}
      <section className=" container bg-amber-300 mx-auto text-white text-center py-10 my-10 "

        style={{
          background: "radial-gradient(circle, rgba(5,44,34,0.9) 0%, black 80%)"
        }}
      >
        <div

          className="max-w-md  py-20  sm:max-w-full xl:max-w-6xl mx-auto space-y-2 flex flex-col  items-center justify-center">
          <p className="text-green-400 font-semibold uppercase tracking-wide text-sm">
            What We Do
          </p>
          <h1 className="text-4xl w-70 md:w-80 lg:w-[70%] sm:text-4xl md:text-5xl mt-2">
            AI-Powered Innovation for Business Growth
          </h1>
          <p className="text-gray-300 text-[16px] px-2 sm:w-[40%]  lg:w-[55%] font-semibold sm:text-lg mt-4 leading-relaxed">
            Web Inventix AI delivers advanced platforms for faster AI adoption,
            efficient machine learning development, and deeper data science insights.
            Businesses reduce time-to-market, improve operational efficiency,
            and scale innovation across teams and systems.
          </p>
        </div>
      </section>

      {/* ===============AI section ======== */}
      <section className="bg-white py-6 md:relative ">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 bg-">
            {aiFeatures.map((feature, index) => (
              <div key={index} className=" space-y-4   rounded-lg bg-white sm:h-[600px] md:h-[800px] lg:h-[650px]  text-center p-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <h1 className="text-3xl font-semibold mt-4 text-gray-800">
                  {feature.title}
                </h1>
                <h3 className="font-bold md:font-medium text-lg text-[#32e2bc]  mt-2 ">
                  {feature.subtitle}
                </h3>
                <p className=" text-lg mt-2 mb-8">{feature.description}</p>
                <div className="flex justify-center items-center">
                  <Link to={feature.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className="px-6   md:absolute md:bottom-14  py-3 cursor-pointer bg-gradient-to-r from-[#32e2bc] to-[#94e8d3] text-black font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
                    LEARN MORE
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============Carousel section ======== */}
      <TestimonialSlider />
      {/* ===============GET IN Touch section ======== */}
      <section className="relative py-20 overflow-hidden">
        {/* Pseudo-Element for Background Image */}

        {/* Content */}
        <div className="container mx-auto text-center px-4 font-inter text-white relative z-10">
          <p className="text-4xl sm:text-5xl px-6 font-semibold text-black mb-6">
            Work with Web Inventix AI
          </p>
          <p className="mb-14 text-lg font-Poppins text-black md:w-[50%] text-center md:text-xl max-w-2xl mx-auto">
            Find out how we can help you tackle your most challenging AI, data science, and machine learning projects.
          </p>

          <a href="mailto:your-email@example.com" style={{ fontFamily: 'Cabinet Grotesk', fontWeight: 800, }}
            className="px-6 py-5 bg-gradient-to-r from-[#32e2bc] to-[#94e8d3] text-black font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
            <span>GET IN TOUCH</span>
          </a>
        </div>
      </section>
    </>
  )
}

export default Home










