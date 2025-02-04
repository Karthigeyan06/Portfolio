// src/Navigation.js
import { useState } from 'react';

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 shadow-lg z-50 py-4 px-8 flex justify-between items-center border-b border-gray-700">
      <h1 className="text-2xl font-bold text-cyan-400">Karthigeyan G.</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-lg">
        <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
        <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
        <li><a href="#experience" className="hover:text-cyan-400 transition">Experience</a></li>
        <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
        <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
      </ul>

      {/* Mobile Menu Toggle Button (Hamburger Icon) */}
      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            // Close Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            // Hamburger Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-center space-y-4 py-4 md:hidden">
          <li><a href="#about" onClick={handleLinkClick} className="block text-white hover:text-cyan-400 transition">About</a></li>
          <li><a href="#projects" onClick={handleLinkClick} className="block text-white hover:text-cyan-400 transition">Projects</a></li>
          <li><a href="#experience" onClick={handleLinkClick} className="block text-white hover:text-cyan-400 transition">Experience</a></li>
          <li><a href="#skills" onClick={handleLinkClick} className="block text-white hover:text-cyan-400 transition">Skills</a></li>
          <li><a href="#contact" onClick={handleLinkClick} className="block text-white hover:text-cyan-400 transition">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
