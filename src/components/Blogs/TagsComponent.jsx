





import React from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import B1 from '../../assets/images/B1.jpg';
import B2 from '../../assets/images/B2.png';
import B3 from '../../assets/images/B3.png';
import B4 from '../../assets/images/B4.png'
import B5 from '../../assets/images/B5.png'
import B6 from '../../assets/images/B6.png'
import B7 from '../../assets/images/B7.png'
import B8 from '../../assets/images/B8.png'
import B9 from '../../assets/images/B9.png'
import B10 from '../../assets/images/B10.png'
import B11 from '../../assets/images/B11.png'
import B12 from '../../assets/images/B12.png'

const TagComponent = () => {
  const [searchParams] = useSearchParams();
  const tagName = searchParams.get('tag');

  console.log('tagName', tagName)


  const allPosts = [
    {
      id: 1,
      tag: 'AI Automation',
      tagData: [
        {
          title: "Why Most AI Insurance Projects Stall Before They Start",
          image: B1,
          path: '/blog/view/1',
          description: "Insurance execs aren’t short on tools. They’re drowning in them. Claims automation dashboards, underwriting engines, chatbots, fraud detection layers—every vendor shows up with a polished demo and a slide deck full of ROI metrics. What they don’t show is the operations mess they leave behind. Most AI implementation plans in insurance start in the wrong […]"
        },
        {
          title: "The Real Challenge Isn’t AI—It’s Everything Around It",
          image: B3,
          path: '/blog/view/3',
          description: "The Implementation Gap Most organizations mistakenly believe their greatest challenge with artificial intelligence is the technology itself. In reality, the true obstacles lie in the surrounding ecosystem: inefficient meetings that drain productivity, delayed decision-making processes, convoluted approval chains, and outdated workflows that should have been modernized years ago. Companies often invest in cutting-edge tools that […]"
        },
        {
          title: "Bridging the Gap Between AI Hype and Enterprise Reality",
          image: B4,
          path: '/blog/view/4',
          description: "The Organizational Bottleneck Most organizations mistakenly identify AI as their primary challenge when implementing new technologies. In reality, the true obstacles are the surrounding organizational elements: inefficient meetings, delayed decision-making processes, convoluted approval chains, and outdated workflows that should have been modernized years ago. Companies frequently invest in cutting-edge tools that end up severely underutilized. […]"
        },
        {
          title: "Case Study: AI Voice Agent Transforms E-Commerce Engagement & Revenue Recovery",
          image: B7,
          path: '/blog/view/7',
          description: "In the competitive e-commerce landscape, businesses constantly seek innovative ways to engage customers, recover lost revenue, and strengthen their digital presence. One forward-thinking e-commerce company faced common challenges: high cart abandonment rates, low post-purchase engagement, and minimal customer reviews. Web Inventix AI implemented a cutting-edge AI-powered voice agent solution specifically designed to address these issues, […]"
        },


      ]


    },
    {
      id: 2,
      tag: 'Artificial Intelligence',
      tagData: [
        {
          title: "Why Most AI Insurance Projects Stall Before They Start",
          image: B1,
          path: '/blog/view/1',
          description: "Insurance execs aren’t short on tools. They’re drowning in them. Claims automation dashboards, underwriting engines, chatbots, fraud detection layers—every vendor shows up with a polished demo and a slide deck full of ROI metrics. What they don’t show is the operations mess they leave behind. Most AI implementation plans in insurance start in the wrong […]"
        },
        {
          title: "The Real Challenge Isn’t AI—It’s Everything Around It",
          image: B3,
          path: '/blog/view/3',
          description: "The Implementation Gap Most organizations mistakenly believe their greatest challenge with artificial intelligence is the technology itself. In reality, the true obstacles lie in the surrounding ecosystem: inefficient meetings that drain productivity, delayed decision-making processes, convoluted approval chains, and outdated workflows that should have been modernized years ago. Companies often invest in cutting-edge tools that […]"
        },
        {
          title: "Bridging the Gap Between AI Hype and Enterprise Reality",
          image: B4,
          path: '/blog/view/4',
          description: "The Organizational Bottleneck Most organizations mistakenly identify AI as their primary challenge when implementing new technologies. In reality, the true obstacles are the surrounding organizational elements: inefficient meetings, delayed decision-making processes, convoluted approval chains, and outdated workflows that should have been modernized years ago. Companies frequently invest in cutting-edge tools that end up severely underutilized. […]"
        },
        {
          title: "Clinician Burnout: A Systems Failure, Not a Morale Issue",
          image: B6,
          path: '/blog/view/6',
          description: "Clinician burnout isn’t a morale issue. It’s a systems failure. It’s the downstream effect of decades of layered inefficiency, policy creep, and tech bloat. Hospitals buried their staff in compliance, billing codes, documentation loops, and workflow fragmentation. Now they’re surprised physicians are cracking. Most executives still treat burnout like a wellness initiative. Add a meditation […]",
        },
        {
          title: "The Future of Infrastructure and Operations: 6 Strategic Trends for 2025 Enterprise Success",
          image: B12,
          path: '/blog/view/12',
          description: "In today’s rapidly evolving digital economy, Infrastructure and Operations (I&O) has transformed from a support function into a strategic enabler of innovation and competitive advantage. As we move through 2025, I&O leaders face the challenge of scaling AI, managing distributed systems, and orchestrating complex automation. Here are six transformative trends reshaping enterprise technology infrastructure. Observability: […]",
        },


      ]


    },
    {
      id: 3,
      tag: 'Insurance',
      tagData: [
        {
          title: "Why Most AI Insurance Projects Stall Before They Start",
          image: B1,
          path: '/blog/view/1',
          description: "Insurance execs aren’t short on tools. They’re drowning in them. Claims automation dashboards, underwriting engines, chatbots, fraud detection layers—every vendor shows up with a polished demo and a slide deck full of ROI metrics. What they don’t show is the operations mess they leave behind. Most AI implementation plans in insurance start in the wrong […]"
        },]
    },
    {
      id: 4,
      tag: 'Smart Cities',
      tagData: [
        {
          title: "How Smart Cities Are Using AI, ML, and IoT To Build Living Infrastructure",
          image: B2,
          path: '/blog/view/2',
          description: "Cities don’t run on concrete and steel. They run on data. Traffic signals, power grids, garbage routes, street lights, flood sensors—every piece of infrastructure is either becoming data-driven or getting left behind. What used to be static systems with scheduled maintenance and fixed logic are now responsive, self-optimizing, and tied into feedback loops. This is […]"
        },]
    },
    {
      id: 5,
      tag: 'Infrastructure',
      tagData: [

        {
          title: "The Real Challenge Isn’t AI—It’s Everything Around It",
          image: B3,
          path: '/blog/view/3',
          description: "The Implementation Gap Most organizations mistakenly believe their greatest challenge with artificial intelligence is the technology itself. In reality, the true obstacles lie in the surrounding ecosystem: inefficient meetings that drain productivity, delayed decision-making processes, convoluted approval chains, and outdated workflows that should have been modernized years ago. Companies often invest in cutting-edge tools that […]"
        },
        {
          title: "The Future of Infrastructure and Operations: 6 Strategic Trends for 2025 Enterprise Success",
          image: B12,
          path: '/blog/view/12',
          description: "In today’s rapidly evolving digital economy, Infrastructure and Operations (I&O) has transformed from a support function into a strategic enabler of innovation and competitive advantage. As we move through 2025, I&O leaders face the challenge of scaling AI, managing distributed systems, and orchestrating complex automation. Here are six transformative trends reshaping enterprise technology infrastructure. Observability: […]",
        },
      ]
    },
    {
      id: 6,
      tag: 'Generative AI',
      tagData: [

        {
          title: "Bridging the Gap Between AI Hype and Enterprise Reality",
          image: B4,
          path: '/blog/view/4',
          description: "The Organizational Bottleneck Most organizations mistakenly identify AI as their primary challenge when implementing new technologies. In reality, the true obstacles are the surrounding organizational elements: inefficient meetings, delayed decision-making processes, convoluted approval chains, and outdated workflows that should have been modernized years ago. Companies frequently invest in cutting-edge tools that end up severely underutilized. […]"
        },
      ]
    },
    {
      id: 7,
      tag: 'Computer Vision',
      tagData: [

        {
          title: "From Data to Dominance: The Role of Machine Learning in Modern Sports",
          image: B5,
          path: '/blog/view/5',
          description: "In the competitive world of sports, the margin between victory and defeat often comes down to milliseconds, millimeters, or a single decision. As we move through 2025, machine learning has transformed from a supplementary analytics tool into essential infrastructure that’s reshaping how teams assess performance, adapt strategy, and build sustainable competitive advantages. Organizations that treat […]"
        },
        {
          title: "The Evolution of Digital Identity Verification",
          image: B8,
          path: '/blog/view/8',
          description: "Our lives have become increasingly intertwined with online platforms. From banking apps that move money across continents to telemedicine appointments, remote work portals, and government service websites – each digital interaction unlocks valuable data or financial resources. At the heart of these exchanges lies a crucial question: is the person requesting access truly who they […]",
        },
      ]
    },
    {
      id: 8,
      tag: 'Internet of Things',
      tagData: [

        {
          title: "From Data to Dominance: The Role of Machine Learning in Modern Sports",
          image: B5,
          path: '/blog/view/5',
          description: "In the competitive world of sports, the margin between victory and defeat often comes down to milliseconds, millimeters, or a single decision. As we move through 2025, machine learning has transformed from a supplementary analytics tool into essential infrastructure that’s reshaping how teams assess performance, adapt strategy, and build sustainable competitive advantages. Organizations that treat […]"
        },
        {
          title: "The Internet of Things (IoT) Empowering Enterprise Transformation",
          image: B11,
          path: '/blog/view/11',
          description: "In today’s rapidly evolving digital landscape, the Internet of Things (IoT) has transformed from a futuristic concept into a tangible force reshaping industries worldwide. No longer limited to simple smart home devices or wearable health trackers, IoT now permeates complex industrial systems, public infrastructure, transportation networks, and healthcare institutions. For enterprise AI and technology leaders, […]",
        },
      ]
    },
    {
      id: 9,
      tag: 'Machine Learning',
      tagData: [

        {
          title: "From Data to Dominance: The Role of Machine Learning in Modern Sports",
          image: B5,
          path: '/blog/view/5',
          description: "In the competitive world of sports, the margin between victory and defeat often comes down to milliseconds, millimeters, or a single decision. As we move through 2025, machine learning has transformed from a supplementary analytics tool into essential infrastructure that’s reshaping how teams assess performance, adapt strategy, and build sustainable competitive advantages. Organizations that treat […]"
        },
        
      ]
    },
    {
      id: 10,
      tag: 'Data Analytics',
      tagData: [

        {
          title: "Clinician Burnout: A Systems Failure, Not a Morale Issue",
          image: B6,
          path: '/blog/view/6',
          description: "Clinician burnout isn’t a morale issue. It’s a systems failure. It’s the downstream effect of decades of layered inefficiency, policy creep, and tech bloat. Hospitals buried their staff in compliance, billing codes, documentation loops, and workflow fragmentation. Now they’re surprised physicians are cracking. Most executives still treat burnout like a wellness initiative. Add a meditation […]",
        },
        
      ]
    },
    {
      id: 11,
      tag: 'Health Care',
      tagData: [

        {
          title: "Clinician Burnout: A Systems Failure, Not a Morale Issue",
          image: B6,
          path: '/blog/view/6',
          description: "Clinician burnout isn’t a morale issue. It’s a systems failure. It’s the downstream effect of decades of layered inefficiency, policy creep, and tech bloat. Hospitals buried their staff in compliance, billing codes, documentation loops, and workflow fragmentation. Now they’re surprised physicians are cracking. Most executives still treat burnout like a wellness initiative. Add a meditation […]",
        },
        
      ]
    },
    {
      id: 12,
      tag: 'AI Voice Technology',
      tagData: [
         {
          title: "Case Study: AI Voice Agent Transforms E-Commerce Engagement & Revenue Recovery",
          image: B7,
          path: '/blog/view/7',
          description: "In the competitive e-commerce landscape, businesses constantly seek innovative ways to engage customers, recover lost revenue, and strengthen their digital presence. One forward-thinking e-commerce company faced common challenges: high cart abandonment rates, low post-purchase engagement, and minimal customer reviews. Web Inventix AI implemented a cutting-edge AI-powered voice agent solution specifically designed to address these issues, […]"
        },
        {
          title: "Voice of the Future: How AI Agents Are Redefining Enterprise Operations",
          image: B9,
          path: '/blog/view/9',
          description: "Artificial intelligence (AI) is steadily reshaping the landscape of enterprise operations, and AI voice agents are emerging as a transformative technology. As voice recognition, natural language processing (NLP), and machine learning technologies mature, these systems have evolved beyond simple virtual assistants to become critical components in enterprise communication, customer engagement, and process automation. Understanding AI […]"
        },
      ]
    },
    {
      id: 13,
      tag: 'E-commerce',
      tagData: [
         {
          title: "Case Study: AI Voice Agent Transforms E-Commerce Engagement & Revenue Recovery",
          image: B7,
          path: '/blog/view/7',
          description: "In the competitive e-commerce landscape, businesses constantly seek innovative ways to engage customers, recover lost revenue, and strengthen their digital presence. One forward-thinking e-commerce company faced common challenges: high cart abandonment rates, low post-purchase engagement, and minimal customer reviews. Web Inventix AI implemented a cutting-edge AI-powered voice agent solution specifically designed to address these issues, […]"
        },
       
      ]
    },
    {
      id: 14,
      tag: 'Facial Recognition',
      tagData: [
        {
          title: "The Evolution of Digital Identity Verification",
          image: B8,
          path: '/blog/view/8',
          description: "Our lives have become increasingly intertwined with online platforms. From banking apps that move money across continents to telemedicine appointments, remote work portals, and government service websites – each digital interaction unlocks valuable data or financial resources. At the heart of these exchanges lies a crucial question: is the person requesting access truly who they […]",
        },
      ]
    },
    {
      id: 15,
      tag: 'Natural Language Processing',
      tagData: [
        {
          title: "Voice of the Future: How AI Agents Are Redefining Enterprise Operations",
          image: B9,
          path: '/blog/view/9',
          description: "Artificial intelligence (AI) is steadily reshaping the landscape of enterprise operations, and AI voice agents are emerging as a transformative technology. As voice recognition, natural language processing (NLP), and machine learning technologies mature, these systems have evolved beyond simple virtual assistants to become critical components in enterprise communication, customer engagement, and process automation. Understanding AI […]"
        },
      ]
    },
    {
      id: 16,
      tag: 'Logistics',
      tagData: [
        {
          title: "Intelligent Vehicle Routing for Optimized Fleet Operations",
          image: B10,
          path: '/blog/view/10',
          description: "In today’s rapidly evolving digital landscape, industries across the spectrum are experiencing unprecedented transformation. The logistics and fleet management sectors stand at the epicenter of this change, facing mounting pressure to optimize operations in an era where consumers demand same-day or even same-hour deliveries. Fleet managers must now navigate the complex Vehicle Routing Problem (VRP), […]"
        },
      ]
    },
    {
      id: 17,
      tag: 'Supply Chain',
      tagData: [
        {
          title: "Intelligent Vehicle Routing for Optimized Fleet Operations",
          image: B10,
          path: '/blog/view/10',
          description: "In today’s rapidly evolving digital landscape, industries across the spectrum are experiencing unprecedented transformation. The logistics and fleet management sectors stand at the epicenter of this change, facing mounting pressure to optimize operations in an era where consumers demand same-day or even same-hour deliveries. Fleet managers must now navigate the complex Vehicle Routing Problem (VRP), […]"
        },
      ]
    },
    {
      id: 18,
      tag: 'IoT',
      tagData: [
        {
          title: "The Internet of Things (IoT) Empowering Enterprise Transformation",
          image: B11,
          path: '/blog/view/11',
          description: "In today’s rapidly evolving digital landscape, the Internet of Things (IoT) has transformed from a futuristic concept into a tangible force reshaping industries worldwide. No longer limited to simple smart home devices or wearable health trackers, IoT now permeates complex industrial systems, public infrastructure, transportation networks, and healthcare institutions. For enterprise AI and technology leaders, […]",
        },
      ]
    },

    
    

   
    

  ]

  // Filter posts by the selected tag
  const filteredPosts = allPosts.find((post) => post.tag === tagName);
  console.log('dataaaa', filteredPosts.tagData)

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className=" text-2xl md:text-5xl font-bold text-neutral-700 px-6 mb-6">Category:  {tagName}</h1>

      <div className="space-y-6">
        {filteredPosts ? (
          filteredPosts.tagData.map((post, index) => (
            <div key={index} className="bg-whiterounded-lg shadow-md overflow-hidden">
              <div className="p-6 ">

                <Link to={post.path} onClick={() => window.scrollTo(0, 0)} className="text-xl  md:text-4xl font-semibold text-pink-700 hover:text-blue-900  ">
                  {post.title}
                </Link>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[500px] object-cover  mt-4 "
                />
                <p className="text-gray-600 text-xl mt-4">{post.description}</p>

              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No posts found with this tag.</p>
        )}
      </div>
    </div>
  );
};

export default TagComponent;