import React from 'react'
import { Link } from 'react-router-dom';

import backimg from '../../assets/images/casestudybg.jpg'
import FooterCrad from '../../components/Common/FooterCrad';
import { blogdata } from '../../utils/data';

const Blog = () => {
  

  return (
    <>
      <section className="relative py-20 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 object-cover " style={{ backgroundImage: `url(${backimg})` }}></div>

        {/* Black Overlay for Opacity Effect */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="container mx-auto text-left sm:px-4 font-inter text-white relative z-10">
          <div className=" px-2 md:px-20">

            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Point of View</h2>
            <p className="text-lg md:text-xl sm:w-[80%] lg:w-[60%] ">
              Web Inventix AI, we don’t just follow trends — we help shape them. Here, we share bold ideas, strategic insights, and real-world applications at the intersection of AI, automation, and digital transformation.
            </p>
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto py-12 px-6">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogdata.map((blog) => (

            <Link
              to={`view/${blog.id}`}
              key={blog.id}
              className="block overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300"
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
                <h3 className="text-lg font-semibold text-gray-500">
                  {blog.title}
                </h3>
                {/* <p className="text-sm text-gray-600 mt-2">{blog.tags}</p> */}

                <div className="flex flex-wrap gap-1 mb-6">
                  {blog.tags?.map((tag, index) => (
                    <Link
                      key={index}
                      onClick={() => window.scrollTo(0, 0)}
                      to={`/blog/tagview?tag=${encodeURIComponent(tag.tagName)}`}
                      className="inline-block  py-1 text-gray-500 hover:text-blue-600 rounded-full text-sm font-medium  "
                    >
                      {tag.tagName}
                    </Link>
                  ))}
                </div>

              </div>

            </Link>
          ))}
        </div>
      </div>
      <FooterCrad
        title="Partner with us."
        description="Find out how we can help you tackle your most challenging AI, data science and machine learning projects."
        buttonText="GET IN TOUCH"

      />

    </>
  )
}

export default Blog




