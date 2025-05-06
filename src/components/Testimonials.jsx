import React from "react";

const testimonials = [
  {
    name: "Emily R.",
    text: "This has been a game-changer for my fitness journey. I feel more confident every day!",
    image: "/images/emilyProfile.png",
  },
  {
    name: "Michael P.",
    text: "The personalized workouts have helped me achieve more than I ever thought possible. Truly amazing!",
    image: "/images/michaelProfile.png",
  },
  {
    name: "Sara L.",
    text: "Not only have I seen physical improvements, but my mindset and energy levels have skyrocketed!",
    image: "/images/saraProfile.png",
  },
  {
    name: "David W.",
    text: "Highly recommend for anyone looking to take their fitness to the next level. The results speak for themselves!",
    image: "/images/davidProfile.png",
  },
  {
    name: "Chris J.",
    text: "I've gained more strength and endurance than I ever imagined. The guidance is top-notch.",
    image: "/images/chrisProfile.png",
  },
  {
    name: "Olivia H.",
    text: "The fitness plans have helped me stay on track and reach goals I thought were impossible. So grateful!",
    image: "/images/oliviaProfile.png",
  },
];


const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-100 to-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-8">What Clients Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-700"
                />
              </div>
              <div className="relative">
                <span className="absolute top-[-20px] left-[-20px] text-blue-700 text-6xl opacity-20">“</span>
                <p className="text-lg text-gray-700 mb-4">{t.text}</p>
                <span className="text-blue-700 font-semibold">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
