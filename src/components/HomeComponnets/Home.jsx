import React from 'react'
import headerImg from '../../assets/images/HeadrImg.png'
import FeatureCard from './FeatureCard';
import img1 from '../../assets/images/FeatureImage1.jpg'
import img2 from '../../assets/images/FeatureImage2.png'
import img3 from '../../assets/images/FeatureImage3.png'
import techimg1 from '../../assets/images/logo-corenlp.png'
import techimg2 from '../../assets/images/logo-gpt-4.png'
import techimg3 from '../../assets/images/logo-langchain.png'
import techimg4 from '../../assets/images/logo-pytorch.svg'
import techimg5 from '../../assets/images/logo-tensorfloww.png'
import techimg6 from '../../assets/images/logo-nltk.png'
import AiImg1 from '../../assets/images/Ai_Image1.png'
import AiImg2 from '../../assets/images/Ai_Image2.png'
import AiImg3 from '../../assets/images/Ai_Image3.jpg'
import Team from '../../assets/images/Team.png'
import TestimonialSlider from './TestimonialSlider';
import bgImg from '../../assets/images/TouchIn.png'



const Home = () => {
  const features = [
    {
      image: img1,
      title: "Innovating with AI-Powered Solutions",
      description:
        "At Web Inventix AI, we help businesses design, engineer, and deploy cutting-edge AI and machine learning solutions. Our custom-built platforms accelerate development, enabling companies to scale and integrate AI-driven automation in record time.",
      isImageRight: false,
    },
    {
      image: img2,
      title: "Diverse Industry Expertise",
      description:
        "We bring deep experience working with organizations of all sizes—from startups to Fortune 500 enterprises—across industries such as technology, healthcare, finance, retail, energy, automotive, gaming, and beyond. Our cross-industry insights empower businesses to leverage AI for maximum impact.",
      isImageRight: true, // Image on right
    },
    {
      image: img3,
      title: "Driven by Advanced AI & Data Science",
      description:
        "Our team of expert data scientists, engineers, and AI specialists drive innovation through research-backed methodologies and state-of-the-art technologies. With a focus on automation, machine learning, and scalable AI architectures, we design, build, and deploy intelligent solutions tailored to your business needs.",
      isImageRight: false,
    },
  ];
  const technologies = [
    { name: "CoreNLP", image: techimg1 },
    { name: "GPT-4", image: techimg2 },
    { name: "LangChain", image: techimg3 },
    { name: "PyTorch", image: techimg4 },
    { name: "TensorFlow", image: techimg5 },
    { name: "NLTK", image: techimg6 },
  ];
  const aiFeatures = [
    {
      image: AiImg1,
      title: "Enterprise AI",
      subtitle: "Cut Waste. Speed Decisions",
      description:
        "AI isn’t about dashboards—it’s about execution. We build automation systems that think in real time, so you can. Predictive models, next-best actions, and workstreams get baked into your workflows. No more guessing. No more delay.",
    },
    {
      image: AiImg2,
      title: "Machine Learning",
      subtitle: "Real-Time Intelligence",
      description:
        "We deploy machine learning pipelines where they actually matter—in production, at scale, with complex automation. It’s just math and algorithms that don’t break under pressure. Data flows. It’s insights live. Go, get smarter.",
    },
    {
      image: AiImg3,
      title: "Computer Vision",
      subtitle: "Turn Visual Data Into Decisions",
      description:
        "We build systems that see what your teams miss. Object tracking, behavioral analysis, automated decision-making—deployed fast, integrated faster. Computers who don’t just detect—do. End-to-end AI from robotics to manufacturing lines.",
    },
  ];
  return (
    <>
      {/* ===============Hero section ======== */}
      <section className="relative bg-black z-0 text-white py-20 sm:pt-30 sm:pb-70 flex items-center">
        <div className="container mx-auto gap-2 px-6 lg:px-14 flex flex-col sm:flex-row items-center">
          {/* Left Side (Text) */}
          <div className=" w-full sm:w-[60%] lg:w-[68%] order-2 sm:order-1   text-center sm:text-left">
            <h1 className="text-4xl sm:text-6xl font-medium mb-4">
              Artificial Intelligence <br /> Development Company
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              At our core, we are your trusted partner in AI innovation. Our
              singular mission is to create intelligent solutions that deliver
              lasting, profitable impact for your business.
            </p>
            <div className="border-t border-white w-40 sm:w-40 h-2 mx-auto sm:mx-2 my-6"></div>
            <button className="bg-[#5de0c0] hover:bg-black text-black hover:border-white hover:border-2 hover:text-white font-semibold px-10 py-3 rounded-sm transition duration-300">
              BOOK A CALL
            </button>
          </div>

          {/* Right Side (Circuit-like Graphics) */}
          <div className="w-full sm:w-[40%] lg:w-[42%] mb-10 sm:mb-2  order-1 sm:order-2 flex justify-center sm:mt-10 lg:mt-0">
            <div className="relative">
              <img src={headerImg} alt='headerImg' className=' w-50 lg:w-90' />

            </div>
          </div>
        </div>
      </section>

            {/* ===============About us section ======== */}
      <div className="bg-white py-16  px-0 md:px-6 lg:px-8">
      <div className="max-w-7xl  mx-auto  ">
       
        <div className=" bg-gray-100  items-start text-start md:text-center p-8 rounded-lg ">
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
         <button className="  bg-[#32e2bc] text-black p-3  hover:bg-white  max-w-2xs px-9 py-3 text-xl md:text-xl    transition duration-300  ">
          LEARN MORE
        </button>
         </div>
          
        </div>
        
      </div>
    </div>
      {/* ===============Feature section ======== */}
      <section className=" container grid gap-12  xl:mx-auto xl:items-center sm:gap-20 px-6 lg:px-20 py-12">
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

      {/* ===============Technology section ======== */}
      <section className="container mx-auto py-12 text-center">
        <h1 className="text-4xl font-semibold mb-8 px-6">Technologies We Use</h1>
        <div className=" grid grid-cols-2 sm:grid-cols-6  place-items-center  ">
          {technologies.map((tech, index) => (
            <img key={index} src={tech.image} alt={tech.name} className=" w-26 h-12 object-contain" />
          ))}
        </div>
      </section>
      {/* ===============Team section ======== */}
      <section className="bg-black text-white  ">
        <div className="max-w-6xl xl:max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-4 ">
          {/* Left Content */}
          <div className=' order-2 sm:order-1 px-6 sm:pl-20   space-y-6 py-8 xl:py-20'>
            <p className="text-[#5de0c0] text-sm  font-semibold uppercase">
              Ready to harness AI for real business impact?
            </p>
            <h2 className="text-2xl  sm:text-5xl font-semibold mt-2">
              From AI Hype to  Operational Reality
            </h2>
            <h2 className="text-2xl font-semibold mt-4 ">
              Unlock Practical Strategies to Drive Real Business Impact
            </h2>
            <p className="text-lg mt-4">
              If you're serious about transforming operations — not just talking about it —
              this free eBook is your starting point.
            </p>
            <h1 className=' font-bold mt-4 text-xl'>
              What You’ll Learn Inside:</h1>
            <div className="mt-6 text-xl pl-6 pr-4">
              <p className=""><span className="w-2 h-2 bg-white rounded-full inline-block mr-1 mt-1"></span> Pinpoint hidden operational blockers that are draining time, money, and momentum</p>
              <p className=""><span className="w-2 h-2 bg-white rounded-full inline-block mr-1 mt-1"></span> Build a sustainable, scalable AI roadmap without drowning in tech jargon</p>
              <p className=""><span className="w-2 h-2 bg-white rounded-full inline-block mr-1 mt-1"></span> Embed AI into day-to-day workflows to boost productivity, accuracy, and speed</p>
              <p className=""><span className="w-2 h-2 bg-white rounded-full inline-block mr-1 mt-1"></span> Drive intelligent change — without disrupting what’s already working</p>
            </div>

            <h1 className="mt-6 text-xl font-semibold">
              Get your free copy now and start transforming your operations from the inside out.
            </h1>

            {/* Call to Action Button */}
            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href="#"
                className="bg-[#5de0c0] text-blue-950 font-semibold py-3 px-12  hover:bg-green-600 transition duration-300"
              >
                BOOK A CALL
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className='order-1 sm:order-2'>
            <img
              src={Team}
              alt="Business Meeting"
              className="w-full sm:h-[800px] object-cover xl:object-contain"
            />
          </div>
        </div>
      </section>
      {/* ===============Growth section ======== */}
      <section className=" container mx-auto text-white text-center py-10 px-6 ">
        <div className="max-w-md bg-black  py-20 sm:max-w-full xl:max-w-6xl mx-auto space-y-2 flex flex-col px-8 items-center justify-center">
          <p className="text-green-400 font-semibold uppercase tracking-wide text-sm">
            What We Do
          </p>
          <h1 className="text-4xl md:w-80 lg:w-[70%] sm:text-4xl md:text-5xl mt-2">
            AI-Powered Innovation for Business Growth
          </h1>
          <p className="text-gray-300 text-[16px] sm:w-[40%]  lg:w-[55%] font-semibold sm:text-lg mt-4 leading-relaxed">
            Web Inventix AI delivers advanced platforms for faster AI adoption,
            efficient machine learning development, and deeper data science insights.
            Businesses reduce time-to-market, improve operational efficiency,
            and scale innovation across teams and systems.
          </p>
        </div>
      </section>

      {/* ===============AI section ======== */}
      <section className="bg-white py-12 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="bg-white space-y-4  rounded-lg overflow-hidden text-center p-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <h1 className="text-3xl font-semibold mt-4 text-gray-800">
                  {feature.title}
                </h1>
                <h3 className="font-bold md:font-medium text-lg text-gray-800  mt-2 ">
                  {feature.subtitle}
                </h3>
                <p className=" text-lg mt-2">{feature.description}</p>
                <a href="#" className="text-green-500 font-semibold mt-4 inline-block">
                  LEARN MORE
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============Carousel section ======== */}
      <TestimonialSlider/>
   {/* ===============GET IN Touch section ======== */}
   <section className="relative py-20 overflow-hidden">
      {/* Pseudo-Element for Background Image */}
      <div
        className="absolute  inset-0 bg-contain bg-center  opacity-40 z-0"
        style={{ backgroundImage: `url(${bgImg})`, backgroundPosition: 'center', backgroundSize: "20%",
        backgroundRepeat: "repeat", }}
      ></div>

      {/* Content */}
      <div className="container mx-auto text-center px-4 font-inter text-white relative z-10">
        <p className="text-4xl sm:text-5xl px-6 font-semibold text-black mb-6">
          Work with Web Inventix AI
        </p>
        <p className="mb-14 text-lg font-Poppins text-black md:w-[50%] text-center md:text-xl max-w-2xl mx-auto">
          Find out how we can help you tackle your most challenging AI, data science, and machine learning projects.
        </p>

        <button className="bg-[#32e2bc] text-black p-3 hover:bg-white text-sm max-w-2xs px-9 py-3 transition duration-300">
          <span>GET IN TOUCH</span>
        </button>
      </div>
    </section>
    </>
  )
}

export default Home