import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Make sure to install lucide-react or use emoji/icons

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", id: "services" },
    { name: "Gallery", id: "gallery" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const handleClick = (id) => {
    setActive(id);
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
      setActive("");
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-50 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1
          onClick={scrollToHero}
          className="text-2xl font-extrabold text-blue-400 cursor-pointer"
        >
          FitCoach
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-blue-400 font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`relative hover:text-blue-800 transition-colors duration-200 ${
                  active === item.id ? "text-blue-800" : ""
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 bottom-[-2px] h-[2px] w-full bg-blue-800 transform scale-x-0 origin-left transition-transform duration-300 ${
                    active === item.id ? "scale-x-100" : ""
                  }`}
                ></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-500 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-50 px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-blue-600 font-semibold">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`w-full text-left hover:text-blue-800 transition-colors duration-200 ${
                    active === item.id ? "text-blue-800" : ""
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
