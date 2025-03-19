import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons

const testimonials = [
  {
    quote:
      "The Web Inventix team went above and beyond to deliver a top-notch platform for our business. Their attention to detail and focus on user experience make all the difference. We’re already seeing fantastic feedback from our clients, and we couldn’t have asked for a better partner in our digital journey!",
    name: "BRONSON HILL",
  },
  {
    quote:
      "Amazing experience! I worked with Clay and his team on my app 'QuickGroceries,' and they delivered more than I expected. He was patient, responsive, and turned my idea into something better than I imagined. If you’re thinking about building an app, this team is the one to go with!",
    name: "JANICE MARTIN",
  },
  {
    quote:
      "I highly recommend Web Inventix for AI solutions. Their deep expertise and ability to tailor solutions to our needs significantly improved our automation processes. They provided a seamless experience from start to finish.",
    name: "JASON PARKER",
  },
  {
    quote:
      "Working with Web Inventix was a game-changer. Their AI-driven insights helped us optimize operations and reduce costs. The team was incredibly professional and always available to support us when needed.",
    name: "SOPHIA LEE",
  },
  {
    quote:
      "Exceptional service and innovation! Web Inventix AI transformed our customer engagement strategy with AI-powered chatbots, making interactions smoother and more efficient than ever before.",
    name: "MICHAEL ROSS",
  },
  {
    quote:
      "Web Inventix delivered exactly what we needed. Their team worked closely with us to implement AI automation, resulting in a 40% improvement in efficiency. Highly recommended!",
    name: "EMILY CARTER",
  },
];

const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-[-40px] sm:left-[-50px] top-1/2 transform -translate-y-1/2 z-10 text-white p-3 sm:p-4 rounded-full hover:bg-gray-600 transition"
    >
      <FaChevronLeft size={24} />
    </button>
  );
  
  // Custom Right Arrow
  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-[-40px] sm:right-[-50px] top-1/2 transform -translate-y-1/2 z-10 text-white p-3 sm:p-4 rounded-full hover:bg-gray-600 transition"
    >
      <FaChevronRight size={24} />
    </button>
  );

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        slidesToShow: 2, // Default: Show 2 slides on larger screens
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 767, // Below 768px (mobile screens), show 1 slide
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

  return (
    <section className="bg-black text-white py-12 px-6 relative">
      <div className="max-full px-4 sm:max-w-xl lg:max-w-4xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 text-start space-y-8">
              <p className="text-lg italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-4 font-bold text-sm">{testimonial.name}</p>
            </div>

            
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
