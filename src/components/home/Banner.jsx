import React, { useState } from "react";
import Lottie, { useLottie } from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Banner = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://i.ibb.co/fnHDbcc/finance-4858797.jpg",
    "https://i.ibb.co/YD7Q4Js/pexels-rdne-7414210.jpg",
    "https://i.ibb.co/fr2cmj5/pexels-tima-miroshnichenko-6010893.jpg",
    "https://i.ibb.co/wpCKfv7/pexels-yankrukov-7693107.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : (prev - 1) % slides.length
    );
  };
  return (
    


     <div className="relative w-full h-[450px] overflow-hidden rounded-2xl">
      {/* Static Content Section */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center bg-black bg-opacity-40">
        <h1 className="text-4xl font-bold text-white">
          <Typewriter
            words={["Invest in the Future", "Support Great Ideas"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={150}
            deleteSpeed={80}
            delaySpeed={5000}
          />
        </h1>
        <p className="mt-4 text-lg text-white/70 md:w-[70%] lg:w-[50%] ">
          Discover and support innovative campaigns. Every small contribution
          can lead to a big change!
        </p>
        <Link to={"/campaigns"} className="mt-6 btn border-none text-white bg-purple-600 ">
          Get Started
        </Link>
      </div>

      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
        <button
          onClick={prevSlide}
          className="btn btn-circle bg-white/50 hover:bg-white text-black"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-circle bg-white/50 hover:bg-white text-black"
        >
          ❯
        </button>
      </div>
    </div>

  );
};

export default Banner;
