import React from "react";
import { Link } from "react-router-dom";
import B1 from '../../assets/images/B1.jpg'
import B2 from '../../assets/images/B2.png'
import B3 from '../../assets/images/B3.png'
import B4 from '../../assets/images/B4.png'
import B5 from '../../assets/images/B5.png'
import B6 from '../../assets/images/B6.png'
import B7 from '../../assets/images/B7.png'
import B8 from '../../assets/images/B8.png'
import B9 from '../../assets/images/B9.png'
import B10 from '../../assets/images/B10.png'
import B11 from '../../assets/images/B11.png'
import B12 from '../../assets/images/B12.png'

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "Why Most AI Insurance Projects Stall Before They Start",
    image: B1,
    date: "March 19, 2025",
    tags: "AI Automation, Artificial Intelligence, Insurance",
  },
  {
    id: 2,
    title: "How Smart Cities Use AI, ML & IoT to Build Infrastructure",
    image: B2,
    date: "March 12, 2025",
    tags: "Smart Cities",
  },
  {
    id: 3,
    title: "The Real Challenge Isn’t AI—It’s Everything Around It",
    image: B3,
    date: "March 3, 2025",
    tags: "AI Automation, Artificial Intelligence, Infrastructure",
  },
  {
    id: 4,
    title: "Bridging the Gap Between AI Hype and Enterprise Reality",
    image: B4,
    date: "February 24, 2025",
    tags: "AI Automation, Artificial Intelligence, Generative AI",
  },
  {
    id: 5,
    title: "From Data to Dominance: The Role of Machine Learning in Modern Sports",
    image: B5,
    date: "February 12, 2025",
    tags: "Computer Vision, Internet of Things, Machine Learning",
  },
  {
    id: 6,
    title: "Clinician Burnout: A Systems Failure, Not a Morale Issue",
    image: B6,
    date: "January 22, 2025",
    tags: "Artificial Intelligence, Data Analytics, Health Care",
  },
  {
    id: 7,
    title: "Case Study: AI Voice Agent Transforms E-Commerce Engagement & Revenue Recovery",
    image: B7,
    date: "January 16, 2025",
    tags: "AI Automation, AI Voice Technology, E-commerce",
  },
  {
    id: 8,
    title: "The Evolution of Digital Identity Verification",
    image: B8,
    date: "January 11, 2025",
    tags: "Computer Vision, Facial Recognition",
  },
  {
    id: 9,
    title: "Voice of the Future: How AI Agents Are Redefining Enterprise Operations",
    image: B9,
    date: "December 18, 2024",
    tags: "AI Voice Technology, Natural Language Processing",
  },
  {
    id: 10,
    title: "Intelligent Vehicle Routing for Optimized Fleet Operations",
    image: B10,
    date: "December 12, 2024",
    tags: "Logistics, Supply Chain",
  },
  {
    id: 11,
    title: "The Internet of Things (IoT) Empowering Enterprise Transformation",
    image:B11,
    date: "November 18, 2024",
    tags: "Internet of Things, IoT",
  },
  {
    id: 12,
    title: "The Future of Infrastructure and Operations: 6 Strategic Trends for 2025 Enterprise Success",
    image: B12,
    date: "November 9, 2024",
    tags: "Artificial Intelligence, Infrastructure",
  },
];

const BlogList = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Latest Blog Posts</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link
            to={`/view/${blog.id}`}
            key={blog.id}
            className="block rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <p className="text-sm text-gray-500">{blog.date}</p>
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{blog.tags}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;