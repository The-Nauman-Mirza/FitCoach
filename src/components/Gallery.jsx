import React from "react";

const images = [
  { src: "/images/strength.png", title: "Strength Session" },
  { src: "/images/HIIT.png", title: "HIIT Blast" },
  { src: "/images/flexandstretch.png", title: "Flex & Stretch" },
  { src: "/images/cardio.png", title: "Cardio Burn" },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-6">Training Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Explore real moments from client sessions, transformation journeys, and training snapshots.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover aspect-[4/5] group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 backdrop-blur-xs bg-transparent/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{img.title}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
