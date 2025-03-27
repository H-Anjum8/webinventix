import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import user1 from '../../assets/images/user-01.png'
import user2 from '../../assets/images/user-02.png'
import user3 from '../../assets/images/user-03.png'

const testimonials = [
  {
    name: "Barbara Hough",
    image: user1,
    review: "We needed a custom mobile app to streamline our services, and Web Inventix delivered beyond expectations. Their attention to detail and focus on creating a unique design for our business was incredible. The app is smooth, fast, and fits our brand perfectly. Our clients love it, and it's made a big difference in our operations!",
  },
  {
    name: "James Smith",
    image: user2,
    review: "Web Inventix AI transformed our operations with automation. Their innovative AI-driven solutions made our processes 2x more efficient. Highly recommended!",
  },
  {
    name: "Sophia Carter",
    image: user3,
    review: "Amazing team! They delivered an outstanding AI solution that improved our customer experience and business insights.",
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-transparent hover:text-green-400 transition duration-300"
    onClick={onClick}
  >
    <FaArrowLeft size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-transparent hover:text-green-400 transition duration-300"
    onClick={onClick}
  >
    <FaArrowRight size={20} />
  </button>
);

const TestimonialSlider = () => {
  let sliderRef = React.useRef(null);

  const handlePrev = () => {
    sliderRef.slickPrev();
  };

  const handleNext = () => {
    sliderRef.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
  };

  return (
    <section className="bg-black  text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-[#32e2bc] text-sm uppercase mb-2">Testimonials</h3>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          What our customer Says
        </h2>

        {/* Grid Layout */}
        <div className="grid  grid-cols-1 lg:grid-cols-10 gap-6 items-center   rounded-lg">

          {/* Left Side - Testimonial Slider (70%) */}
          <div className="lg:col-span-7  "> {/* Use min-h-[500px] */}
            <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative md:max-w-[400px] lg:max-w-3xl px-14 py-10  bg-black border-1 sm:h-[500px] md:h-[400px] lg:h-[500px]  border-white rounded-lg shadow-lg"
                >
                  {/* Left Gradient Border */}
                  {/* <div className="absolute xl:hidden top-0 left-0 h-full w-1 bg-gradient-to-b to-black from-white"></div> */}

                  {/* Content */}
                  <div className="flex flex-col items-start   lg:gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full border"
                    />
                    <p className="text-white lg:w-[500px]">{testimonial.review}</p>
                    <h3 className="text-lg font-semibold text-[#32e2bc] ">{testimonial.name}</h3>
                  </div>

                  {/* Bottom Gradient Border */}
                  {/* <div className=" hidden  sm:flex absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-black to-white"></div> */}
                </div>
              ))}
            </Slider>
          </div>
          {/* Right Side - Custom Arrows (30%) */}
          <div className="lg:col-span-3 flex    justify-center items-center gap-20 sm:gap-60 lg:gap-20 py-6   rounded-lg">
            <button
              className="text-white  space-y-14  cursor-pointer hover:text-green-400 transition duration-300"
              onClick={handlePrev}
            >
              <FaArrowLeft size={32} />
              <span className="text-[#32e2bc] cursor-pointer font-bold"> Next</span>
            </button>
            <button
              className="text-white flex flex-col cursor-pointer  hover:text-[#32e2bc] transition duration-300"
              onClick={handleNext}
            > <span className='text-[#32e2bc] cursor-pointer mb-14 font-bold'>Previus</span>
              <FaArrowRight size={32} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
