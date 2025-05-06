// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-200 text-black text-center py-6">
      <p>© {new Date().getFullYear()} FitCoach. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
