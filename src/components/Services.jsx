import React from "react";
import {
  Dumbbell,
  Timer,
  HeartPulse,
  StretchHorizontal,
  Flame,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: <Dumbbell size={28} />,
    title: "Strength Training",
    desc: "Build muscle with personalized strength plans.",
  },
  {
    icon: <Timer size={28} />,
    title: "HIIT Workouts",
    desc: "High-intensity routines to burn fat fast.",
  },
  {
    icon: <HeartPulse size={28} />,
    title: "Wellness Coaching",
    desc: "Holistic approach to your fitness and health.",
  },
  {
    icon: <StretchHorizontal size={28} />,
    title: "Functional Training",
    desc: "Improve everyday performance and flexibility.",
  },
  {
    icon: <Flame size={28} />,
    title: "Endurance Building",
    desc: "Boost stamina with cardio-based routines.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Lifestyle Guidance",
    desc: "Stay consistent with mindset and habit support.",
  },
];


const Services = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" 
    className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-6">My Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          A wide range of fitness and wellness offerings tailored to your goals and lifestyle.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-blue-100 text-blue-700">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button
            onClick={scrollToContact}
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
