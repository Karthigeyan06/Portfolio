// src/Navigation.js
import { useState } from 'react';

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 shadow-lg z-50 py-4 px-8 flex justify-between items-center border-b border-gray-700">
      <h1 className="text-2xl font-bold text-cyan-400">Karthigeyan G.</h1>
      
      {/* Mobile Menu */}
      <ul className={`md:flex space-x-6 text-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
        <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
        <li><a href="#experience" className="hover:text-cyan-400 transition">Experience</a></li>
        <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
        <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
      </ul>

      {/* Mobile Menu Toggle Button (Hamburger Icon) */}
      <div className="md:hidden flex items-center">
        <button className="text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
