import { Navigate, useParams } from "react-router-dom";
import SocialShare from "../../components/Common/SocialShare";
import RelatedNews from "../../components/Common/RelatedNews";
import C1 from '../../assets/images/C1.jpg'
import C2 from '../../assets/images/C2.jpg'
import C3 from '../../assets/images/C3.jpg'
import CaseStudyCard from "../../components/CaseStudy/CaseStudyCard";

const blogs = [
  {
    id: 1,
    title: "Optimizing Fleet Operations: A Case Study in Logistics Optimization",
    content1: "A logistics company operating a fleet of over 60 transportation trucks was facing mounting challenges in managing on-time deliveries, reducing fuel costs, tracking vehicle performance, and maintaining their fleet with minimal downtime. The company sought a proactive solution to enhance operational efficiency and driver safety without disrupting day-to-day operations.",
    content2: "The logistics operation faced several key issues that were negatively impacting profitability and service quality. Delivery performance was inconsistent, leading to customer dissatisfaction and the risk of contract penalties. The lack of real-time visibility into vehicle locations and traffic conditions prevented dispatchers from managing delivery schedules effectively or responding quickly to delays. Fuel consumption was excessively high, with no clear system in place to address inefficiencies caused by route planning, driver behavior, or vehicle maintenance. Maintenance practices were largely reactive, often only addressing issues after breakdowns occurred—causing costly downtime and emergency repairs. Additionally, the company had limited insight into driver behavior, making it difficult to improve safety or reward high performance. Data from different operational systems was fragmented, making it nearly impossible to gain a comprehensive view or drive coordinated improvements across the fleet.",
    content3: "To address these challenges, a comprehensive IoT-based fleet management solution was implemented. This solution featured the deployment of advanced IoT devices across all 60+ trucks. These included GPS trackers for real-time location monitoring, engine diagnostic sensors, fuel consumption monitors, driver behavior sensors, and temperature sensors for climate-controlled cargo. The data collected by these devices was integrated into a centralized, cloud-based fleet management platform. This platform offered real-time fleet dashboards, automated route optimization, predictive maintenance scheduling, driver performance analytics, customizable alerts, and mobile access for managers and drivers.",
    content4: "The system introduced intelligent route optimization by analyzing historical traffic data, factoring in real-time conditions, and dynamically adjusting routes. Predictive maintenance capabilities monitored engine diagnostics and proactively scheduled maintenance during non-peak times, while tracking parts life cycles and service histories. Driver safety was addressed through real-time behavior tracking, coaching tools, performance recognition programs, and comparative metrics. Implementation was carried out in phases—starting with a 10-vehicle pilot, followed by a gradual fleet-wide rollout. Driver and dispatcher training ensured smooth adoption and early feedback helped refine the system before full-scale deployment.",
    content5: "Within six months of implementation, the company experienced significant improvements. Fuel consumption dropped by 19%, aided by better route planning and improved driving habits, leading to an ROI on the fuel optimization module in just over four months. Idling was reduced, trip distances decreased, and overall fuel savings grew by more than 7% due to behavioral changes alone. Maintenance downtime dropped by 34%, with 28 major breakdowns avoided through early detection. Scheduled maintenance became 22% more efficient, emergency parts orders fell by 67%, and the average vehicle lifecycle was extended by over a year.",
    content6: "Driver safety improved markedly, with a 41% reduction in harsh braking incidents, 37% fewer rapid accelerations, and a 29% decrease in sharp cornering events. These improvements led to a 12% reduction in insurance premiums and a 15% increase in driver retention, thanks to safer working conditions and performance-based recognition. Operational efficiency surged, with on-time deliveries jumping from 82% to 94%, customer satisfaction scores increasing by 17 points, and dispatcher efficiency rising by 26%. Response times to delivery exceptions dropped from 18 minutes to just 4 minutes, and overall fleet utilization rose by 15%.",
    content7: "From a broader business perspective, operational costs were reduced by 22%, new business acquisition climbed by 14% due to improved service reliability, and the company’s carbon footprint shrank by 440 tons of CO2 annually. The client also gained a competitive edge through data-driven operational excellence and established a scalable foundation for future growth.",
    content8: "The transformation involved strategic technical integration, including custom API development, secure data protocols, edge computing, and scalable cloud infrastructure. A robust mobile application gave field teams access to real-time insights. Change management was critical to success, with driver workshops, hands-on staff training, executive dashboards, phased implementation, and regular feedback loops to adapt the solution to real-world needs.",
    content9: "A continuous improvement framework was introduced, including weekly performance reviews, monthly trend analysis, quarterly strategic assessments, ongoing system updates, and benchmarking against industry standards to sustain a competitive advantage.",
    content10: "The success of the project was driven by a holistic approach that addressed interconnected operational challenges, transformed subjective assessments into objective data-driven decisions, and engaged users throughout the process. Strong executive sponsorship and a scalable system architecture further ensured long-term success.",
    content11: "This case study illustrates how integrated fleet management solutions can dramatically improve logistics operations. By leveraging IoT technology and advanced analytics, the company achieved a proactive, efficient, and sustainable operational model. The 19% fuel savings, 34% reduction in downtime, and significant safety and efficiency gains not only delivered immediate value but also laid the groundwork for continued improvement and competitive growth. With a full return on investment achieved within the first year, the company now has the tools and visibility to optimize operations well into the future.",
    image: C1,

  },
  {
    id: 2,
    title: "Implementing Advanced Proctoring Technology at a High-Volume Student Testing Center",
    heading1: "Introduction",
    content1: "A client operating a high-volume student testing center, responsible for proctoring more than 200 online exams daily, faced persistent challenges in maintaining academic integrity and effectively monitoring a growing number of test-takers. This case study explores how the implementation of an integrated computer vision solution dramatically enhanced proctoring capabilities, improved student identification accuracy, and reinforced exam security across the board.",
    heading2: "Challenges in the Testing Environment",
    content2: "The client was struggling with several critical issues that compromised the reliability of their examination process. Monitoring such a large volume of exams created gaps in oversight, as human proctors were unable to effectively supervise all students in real time. Identity verification was another weak point. Traditional check-in methods were not only slow and cumbersome but also left room for impersonation, particularly since proctors could not consistently verify student identities throughout each session.",
    content3: "Movement detection was another major limitation. Without reliable means of tracking whether students remained in their designated testing areas, unauthorized breaks and potential cheating opportunities went undetected. Additionally, students could access prohibited resources—such as notes, digital tools, or communication devices—without being noticed by human proctors. Compounding these issues was the challenge of scalability. As the demand for online testing increased, the testing center needed a way to expand its capacity without adding proportional staffing costs or compromising security.",
    content4: "Together, these challenges created a vulnerable testing environment and undermined the credibility of the client’s services. It became clear that a robust, technologically advanced solution was essential to address these interrelated issues and restore confidence in the center’s exam protocols.",
    heading3: "The AI-Powered Proctoring Solution",
    content5: "After evaluating several options, the client chose to implement a multi-layered computer vision and artificial intelligence system specifically designed for high-volume testing centers. The solution integrated advanced facial recognition technology capable of verifying student identity at check-in, continuously authenticating the test-taker throughout the session, and accurately flagging mismatches between the person on camera and the registered student. This system also provided equitable identification performance across a diverse student population.",
    content6: "Real-time movement tracking added another layer of oversight. The system established a baseline “testing position” for each student and monitored their continuous presence within the designated space. Any deviations beyond acceptable parameters triggered alerts. The technology also tracked head and eye movements to identify suspicious behaviors, such as frequently looking away from the screen or scanning the room.",
    content7: "In addition, an object recognition system was deployed to detect unauthorized items within the testing area. The technology could identify common cheating tools such as smartphones, smartwatches, earpieces, and even unauthorized browser activity. Suspicious hand movements were also flagged, providing further insight into potential integrity violations.",
    content8: "A centralized monitoring dashboard allowed human proctors to manage all alerts in real time, prioritize incidents based on severity, and review recordings of flagged sessions. The system logged all anomalies and provided timestamped evidence for post-exam review. To address privacy concerns, most data processing occurred locally rather than in the cloud. Strict data retention policies were enforced, and students received clear notifications about the monitoring parameters. The system also included privacy features like background blurring that preserved exam integrity while minimizing unnecessary data exposure.",
    content9: "The implementation process took place over three months. It began with system installation and configuration, followed by staff training to ensure smooth adoption. A pilot testing phase was conducted with a limited number of exams, after which the system was refined based on real-world feedback. A full deployment followed, with ongoing optimization and calibration continuing thereafter. Stakeholder communication remained a priority throughout the process, with regular updates shared with faculty and student representatives to gather input and foster buy-in.",

    heading4: "Results and Impact",
    content10: "Six months after full deployment, a comprehensive analysis revealed exceptional results across all key performance indicators. The most striking achievement was an 89% reduction in detected cheating attempts, compared to the previous manual proctoring model. This was verified through comparisons of incident reports, exam score distributions, post-exam student surveys, and random audits of session recordings.",
    content11: "Student identification accuracy reached 100%, with no reported cases of successful impersonation. Continuous verification throughout exam sessions ensured consistent identity checks, and even deliberate attempts at impersonation were successfully flagged by the system. The technology’s effectiveness held across all demographic groups, further validating its reliability.",
    content12: "Operational efficiency also improved significantly. Routine monitoring time for proctors dropped by 64%, and the student check-in process became 78% faster. Post-exam investigations into integrity violations decreased by 92%, and the center’s testing capacity grew by 35%—all without increasing staffing levels.",
    content13: "Contrary to initial concerns, the student experience improved. A large majority of students—87%—reported that the testing environment felt more fair and secure. More than 70% expressed increased confidence in the value of their credentials, while over 90% appreciated the faster check-in process. Only a small minority raised concerns about privacy, indicating that the system’s transparency and data protections were effective.",
    content14: "Financially, the solution proved cost-effective. The initial investment was recovered within nine months through reduced labor costs and operational savings. Ongoing expenses decreased by 42% compared to the previous system, and the efficiency gains allowed resources to be reallocated to student support services. The reduction in exam retakes and investigation-related disruptions also contributed to additional cost savings.",
    content15: "The system’s effectiveness extended across different types of potential violations. Unauthorized resource access dropped by 96%, and there was a complete elimination of unnoticed student absences from testing stations. Unauthorized collaboration attempts were reduced by 92%, and use of prohibited electronic devices decreased by 83%.",
    heading5: "Unexpected Benefits and Organizational Gains",
    content16: "The implementation also delivered unexpected benefits. The system generated valuable data analytics that provided deeper insights into student behavior and exam patterns. It revealed which types of exam questions most frequently triggered suspicious activity, highlighted time-of-day trends in misconduct attempts, and established correlations between exam design and engagement metrics.",
    content17: "The client’s institutional reputation received a noticeable boost. External organizations began requesting access to the center’s testing services, accreditation bodies expressed increased confidence in their processes, and the center’s credibility among peer institutions grew. Employers also showed greater trust in the validity of student credentials issued under this enhanced proctoring system.",
    heading6: "Challenges and Adaptive Solutions",
    content18: "Despite the overall success, the implementation encountered some challenges. The existing IT infrastructure required upgrades to support the system’s bandwidth and processing demands. This was resolved through phased hardware improvements, custom API development, edge computing deployment, and bandwidth optimization strategies.",
    content19: "User adaptation was another hurdle. Both staff and students needed time to adjust to the new system. Targeted training programs and clear instructional materials were developed, and a phased rollout strategy allowed for gradual acclimatization. Feedback loops helped refine the system based on real user input.",
    content20: "In the early stages, false positives posed a challenge, as the system occasionally flagged non-threatening behaviors. Through algorithm refinements and machine learning enhancements, the false positive rate was reduced by 76%. Human review protocols were put in place to resolve ambiguous cases, and sensitivity thresholds were adjusted to strike the right balance between vigilance and practicality.",
    heading7: "Conclusion",
    content21: "The deployment of advanced computer vision and AI-based proctoring transformed the client’s testing center into a highly secure, scalable, and efficient facility. The 89% drop in cheating attempts and 100% accuracy in student identification underscore the power of technology in maintaining academic integrity. Key to this success was the comprehensive approach, which addressed multiple vulnerability points while balancing security with user experience.",
    content22: "The outcome demonstrates how thoughtfully implemented proctoring technology can significantly enhance testing operations—offering a model for institutions worldwide looking to improve exam integrity, operational scalability, and student trust in a digital age.",
    image: C2,

  },
  {
    id: 3,
    title: "Rethinking E-Commerce Engagement with an AI Voice Agent Solution",
    heading8: "Introduction",
    content1: "In the fast-paced and competitive world of e-commerce, businesses are constantly seeking innovative ways to engage customers, recover lost revenue, and build a strong digital presence. One of our clients—a forward-thinking e-commerce company—was facing common challenges plaguing many online retailers: high cart abandonment rates, low post-purchase engagement, and a minimal number of customer reviews. Web Inventix AI stepped in with a cutting-edge AI-powered voice agent solution tailored to directly address these issues. This case study outlines how our solution was implemented, the strategy behind its success, and the significant outcomes that followed.",
    heading9: "Business Context and Industry Landscape",
    content2: "The global e-commerce industry is on a rapid growth trajectory, projected to reach $8 trillion by 2030. With this growth comes increased competition, where customer engagement has become the critical differentiator between thriving and merely surviving. Data shows that approximately 70% of online shoppers abandon their carts, and nearly 90% of consumers rely on reviews to guide their purchase decisions. Additionally, repeat customers are known to spend up to 67% more than new buyers. Despite these insights, traditional outreach methods such as email campaigns, SMS messages, and manual calls often fail to deliver due to their high costs and lack of personalized interaction. Our client recognized the need for a scalable, intelligent, and cost-effective solution to build deeper customer relationships and drive better business outcomes.",
    heading10: "The Client’s Challenges",
    content3: "Before partnering with Web Inventix AI, the client was struggling with multiple pain points. Cart abandonment was a major issue, with previous follow-up tactics proving impersonal and ineffective, resulting in consistent revenue loss. Although many customers were satisfied with their purchases, very few were leaving reviews, weakening the brand’s credibility and social proof. Post-purchase engagement was minimal, leading to missed opportunities for upselling, cross-selling, and customer loyalty development. Furthermore, the client was facing high operational costs, as their outreach relied heavily on labor-intensive and inconsistent manual efforts.",
    heading11: "Our AI-Powered Voice Agent Solution",
    content4: "To overcome these challenges, Web Inventix AI implemented a fully automated, intelligent voice agent system designed to provide personalized, scalable customer engagement across key interaction points. The solution included specialized AI-driven voice agents, each tailored to specific goals such as cart recovery, post-purchase satisfaction, review collection, and customer re-engagement.",
    content5: "The Sales and Abandonment Recovery Agent proactively contacted customers who had abandoned their carts, offering persuasive incentives and secure checkout links in a conversational, human-like manner. The Post-Purchase and Review Collection Agent followed up after purchases to ensure customer satisfaction and delivered personalized review links via SMS. If customers expressed dissatisfaction, the system automatically escalated the issue to human support. Meanwhile, the Re-Engagement and Retention Agent reached out to dormant customers with personalized offers designed to reignite their interest and encourage repeat purchases.",
    content6: "In addition to the voice agent capabilities, the system included an integrated SMS and review request mechanism. After a satisfaction check via voice call, happy customers received a personalized review link by SMS, followed by an additional message after 24 to 48 hours if no response was received. The system also used sentiment analysis to detect negative feedback and trigger timely human intervention.",
    content7: "The AI platform leveraged dynamic personalization based on individual purchase behavior, delivering real-time recommendations and support routing. A robust analytics dashboard provided insights into conversion rates, customer sentiment, cart recovery metrics, and overall return on investment. The system was designed for seamless integration with leading e-commerce platforms including Shopify, WooCommerce, Magento, and custom-built stores through APIs and webhooks—ensuring real-time interaction without manual input.",
    heading12: "Implementation Process",
    content8: "The deployment process began with a detailed needs assessment to identify gaps in the customer journey and pinpoint friction points in engagement. Once these were mapped out, our team facilitated seamless API integration with the client’s backend systems. We then customized conversation flows and trained the AI agents to reflect the brand’s tone and customer scenarios. Pilot testing followed, during which we gathered performance data to refine scripts, optimize SMS timing, and enhance the follow-up cadence. After successful validation, the system was fully deployed, with continuous monitoring and performance optimization provided by our support team.",
    heading13: "Outcomes and Impact",
    content9: "The implementation of our AI voice agent delivered significant business impact. Cart recovery conversions saw a substantial increase, with incentive-driven outreach encouraging more customers to complete their purchases. Customer satisfaction scores rose, and the number of authentic reviews increased, strengthening the brand’s online reputation. Dormant customer segments were successfully re-engaged, contributing to higher customer lifetime value and greater repeat sales.",
    content10: "Operational efficiency improved dramatically, as automated outreach replaced labor-intensive manual efforts, delivering consistent, high-quality interactions at scale. The increased volume and quality of customer reviews enhanced brand trust and loyalty, helping the client stand out in a crowded market.",
    heading14: "Conclusion",
    content11: "The success of this AI voice agent implementation highlights the transformative power of intelligent automation in e-commerce. By addressing cart abandonment, post-purchase engagement, customer retention, and review generation, our solution delivered measurable gains across revenue, customer satisfaction, and operational performance. Most importantly, it empowered the client to build deeper, more meaningful relationships with customers—at scale and with remarkable efficiency.",
    image: C3,

  },
];



const SingleBlog = () => {
  const { id } = useParams();
  console.log('iddd',id)
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="text-center text-red-500 text-xl py-12">Blog not found</div>;
  }

  // Related blogs data (excluding current blog)
  const relatedBlogs = [
    {
      id: 1,
      title: "Optimizing Fleet Operations:",
      image: C1,
      description: "A Case Study in Logistics Optimization",
    },
    {
      id: 2,
      title: "Implementing Advanced Proctoring Technology",
      image: C2,
      description: "At a High-Volume Student Testing Center",
    },
    {
      id: 3,
      title: "Rethinking E-Commerce Engagement with",
      image: C3,
      description: "An AI Voice Agent Solution",
    },
  ].filter(item => item.id !== parseInt(id)); // Filter out current blog

  // Content order configuration
  const contentOrder = [
    { heading: "heading1", contents: ["content1"] },
    { heading: "heading8", contents: ["content1"] },
    { heading: "heading9", contents: ["content2"] },
    { heading: "heading2", contents: ["content2", "content3", "content4"] },
    { heading: "heading3", contents: ["content5", "content6", "content7", "content8", "content9"] },
    { heading: "heading12", contents: ["content8"] },
    { heading: "heading4", contents: ["content10", "content11", "content12", "content13", "content14", "content15"] },
    { heading: "heading5", contents: ["content16", "content17"] },
    { heading: "heading6", contents: ["content18", "content19", "content20"] },
    { heading: "heading7", contents: ["content21", "content22"] },
    { heading: "heading14", contents: ["content11"] },
    { heading: "heading10", contents: ["content3"] },
    { heading: "heading11", contents: ["content4", "content5", "content6", "content7"] },
    { heading: "heading13", contents: ["content9", "content10"] }
  ];
 // Handle related blog click
 const handleRelatedBlogClick = (blogId) => {
  Navigate(`/casestudies/View/${blogId}`);
};
  return (
    <>
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${blog.image})` }}
        ></div>
      </div>

      {/* Main Content Section */}
      <section className="relative max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="prose max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold">{blog.title}</h1>
          
          {/* Dynamic Content Rendering */}
          {contentOrder.map((section, index) => (
            <div key={index}>
              {blog[section.heading] && (
                <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-800">
                  {blog[section.heading]}
                </h2>
              )}
              {section.contents.map(
                (contentKey) =>
                  blog[contentKey] && (
                    <p key={contentKey} className="text-gray-600 mb-6 leading-relaxed">
                      {blog[contentKey]}
                    </p>
                  )
              )}
            </div>
          ))}
        </div>

        {/* Social Share Buttons */}
        <div className="mt-12">
          <SocialShare />
        </div>

        {/* Related Blogs Section */}
        <div className="mt-16 w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">Related Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedBlogs.map((relatedBlog) => (
              <div 
              key={relatedBlog.id} 
              onClick={() => handleRelatedBlogClick(relatedBlog.id)}
              className="cursor-pointer"
            >
              <CaseStudyCard
                key={relatedBlog.id}
                id={relatedBlog.id}
                title={relatedBlog.title}
                image={relatedBlog.image}
                description={relatedBlog.description}
              />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;