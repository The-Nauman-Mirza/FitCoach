import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-2xl mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-8">Get In Touch</h2>
        <form className="space-y-5 bg-white shadow-md rounded-lg p-8">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Follow me on</h3>
          <div className="flex justify-center gap-6 text-blue-800 text-xl">
            <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-600 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-600 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500 transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
