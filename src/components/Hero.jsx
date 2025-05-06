import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden"
    >
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      ></div>


      {/* Main content */}
      <div className="z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-blue-500">
          Transform Your Body, Elevate Your Life
        </h1>
        <p className="text-lg md:text-xl mb-6 font-bold text-blue-400">
          Certified Personal Trainer | 10+ Years Experience | Online & In-Person Coaching
        </p>
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          <a
            href="#contact"
            className="bg-white text-blue-500 font-bold px-6 py-3 rounded-full  transition shadow-md"
          >
            Book a Free Trial
          </a>
          <a
            href="#services"
            className="bg-blue-400 text-white font-bold px-6 py-3 rounded-full transition shadow-md"
          >
            View Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
