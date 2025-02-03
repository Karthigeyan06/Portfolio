import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import project1Image from './assets/images/project1.jpg';
import project2Image from './assets/images/project2.jpg';
import project3Image from './assets/images/project3.png';
import project4Image from './assets/images/project4.jpg';
import project5Image from './assets/images/project5.jpg';
import project6Image from './assets/images/project6.jpg';
import project7Image from './assets/images/project7.jpg';
import project8Image from './assets/images/project8.jpg';
import project9Image from './assets/images/project9.jpg';
import pythonImg from './assets/images/skills/python.jpg'; // Importing images
import cImg from './assets/images/skills/c.jpg';
import verilogImg from './assets/images/skills/verilog.jpg';
import matlabImg from './assets/images/skills/matlab.jpg';
import csharpImg from './assets/images/skills/csharp.png';
import dotnetImg from './assets/images/skills/dotnet.png';
import arduinoUnoImg from './assets/images/skills/arduino_uno.png';
import arduinoNanoImg from './assets/images/skills/arduino_nano.png';
import raspberryPiPicoImg from './assets/images/skills/raspberry_pi_pico.png';
import stm32BluePillImg from './assets/images/skills/stm32_blue_pill.png';
import esp8266Img from './assets/images/skills/esp8266.png';
import mitsubishiImg from './assets/images/skills/mitsubishi.png';
import siemensImg from './assets/images/skills/siemens.png';
import deltaImg from './assets/images/skills/delta.png';
import multisimImg from './assets/images/skills/multisim.png';
import quartusImg from './assets/images/skills/quartus.png';
import easyEDAImg from './assets/images/skills/easyeda.png';
import labVIEWImg from './assets/images/skills/labview.png';
import arduinoIDEImg from './assets/images/skills/arduino_ide.png';
import stm32CUBEIDEImg from './assets/images/skills/stm32cubeide.png';
import simaticManagerImg from './assets/images/skills/simatic_manager.png';
import ispSoftImg from './assets/images/skills/isp_soft.png';
import sqlImg from './assets/images/skills/sql.png';


export default function Portfolio() {
  const projectData = [
    {
      image: project2Image, // Local image for Project 1
      url: 'https://github.com/Karthigeyan06/project1', // URL for Project 1
      title: 'Smart Street Light with Fault Detection',
      description: 'Built a smart street light system with ESP8266 and LDR for automated night/day operation and fault detection, sending alerts with location to mobile devices',
    },
    {
      image: project1Image, // Local image for Project 2
      url: 'https://github.com/Karthigeyan06/project2', // URL for Project 2
      title: 'Four-Axis Robot Arm with Joystick and Mobile Control ',
      description: 'Built a four-axis robot arm controlled by two joysticks and mobile automation. The arm can also be programmed to perform automated tasks regularly. ',
    },
    {
      image: project3Image, // Local image for Project 3
      url: 'https://github.com/Karthigeyan06/project3', // URL for Project 3
      title: 'Organization Transport Management System',
      description: 'IoT based transport management system with the collection of data such as attendance with timestamp, occupancy and vehicle timings',
    },
    {
      image: project4Image, // Local image for Project 4
      url: 'https://github.com/Karthigeyan06/project4', // URL for Project 4
      title: 'Smart Irrigation and Monitoring System using IoT',
      description: 'System that collects the environmental and plant parameters and irrigation system controlled with mobile',
    },
    {
      image: project5Image, // Local image for Project 5
      url: 'https://github.com/Karthigeyan06/project5', // URL for Project 5
      title: 'Autonomous GPS-Based Delivery Robot with Secure User Authentication',
      description: 'An Autonomous delivery bot equipped with environmental sensors and GPS that delivers to the target location',
    },
    {
      image: project6Image, // Local image for Project 6
      url: 'https://github.com/Karthigeyan06/project6', // URL for Project 6
      title: 'Dual-Mode Wireless Rover: Real-Time Control and Environmental Sensing',
      description: 'Developed an Arduino-based rover with a team, featuring real-time remote control and environmental sensing.',
    },
    {
      image: project7Image, // Local image for Project 7
      url: 'https://github.com/Karthigeyan06/project7', // URL for Project 7
      title: 'Automatic Balance System for 2-Wheel Bot Using 3-Axis Gyroscope',
      description: 'This project uses a 3-axis gyroscope to automatically balance a 2-wheel robot. The gyroscope detects the robot tilt and sends data to adjust wheel speed for stability',
    },
    {
      image: project8Image, // Local image for Project 8
      url: 'https://github.com/Karthigeyan06/project8', // URL for Project 8
      title: 'Emergency Communication Device for Disaster Situations ',
      description: 'Engineered a portable, waterproof communication device. It provides reliable voice communication, real-time GPS data, and power backup with solar support, ensuring connectivity in disaster scenarios ',
    },
    {
      image: project9Image, // Local image for Project 9
      url: 'https://github.com/Karthigeyan06/project9', // URL for Project 9
      title: 'Traffic Management System for Emergency Vehicles Using RFID and IoT',
      description: 'Designed an RFID and IoT-enabled system to prioritize emergency vehicles at traffic signals. The system detects vehicle type, adjusts signals for clear passage, and logs data to a server and text file for monitoring.',
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-300 font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 shadow-lg z-50 py-4 px-8 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold text-cyan-400">Karthigeyan G.</h1>
        <ul className="flex space-x-6 text-lg">
          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
          <li><a href="#experience" className="hover:text-cyan-400 transition">Experience</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4 mt-16 overflow-visible">
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse z-10 leading-tight font-poppins"
  >
    Hello, I'm KARTHIGEYAN
  </motion.h1>
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
    className="text-lg md:text-xl text-gray-400 max-w-2xl z-10 leading-relaxed font-poppins"
  >
    Embedded Systems & IoT Enthusiast | Electronics & Communication Engineer
  </motion.p>
  
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 1 }}
    className="mt-8 flex space-x-8 z-10"
  >
    <a href="mailto:karthigeyanganesan06@gmail.com" className="text-gray-400 hover:text-cyan-400 transition"><Mail size={36} /></a>
    <a href="https://www.linkedin.com/in/karthigeyan-ganesan-203066257/" target="_blank" className="text-gray-400 hover:text-cyan-400 transition"><Linkedin size={36} /></a>
    <a href="https://github.com/Karthigeyan06" target="_blank" className="text-gray-400 hover:text-cyan-400 transition"><Github size={36} /></a>
  </motion.div>

  <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5, duration: 1 }}
  className="mt-8"
>
  <a 
    href="https://drive.google.com/file/d/1sGFONe17gWqnLKmK-m5iL9Nzty8ZhJWp/view?usp=sharing" //resumelink
    target="_blank"
    className="inline-block px-8 py-3 text-lg font-medium text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
  >
    View Resume
  </a>
</motion.div>






</section>




      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-6 text-cyan-400"
        >
          About Me
        </motion.h2>
        <p className="text-center text-lg text-gray-400 max-w-3xl mx-auto">
          I'm an Electronics & Communication Engineer with a passion for Embedded Systems and IoT. Over the years, I've worked on projects involving microcontrollers, automation systems using PLCs, and smart devices. My expertise spans across various platforms like Arduino, Raspberry Pi, and STM32, integrating them into real-world applications that solve practical problems.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-6 text-cyan-400"
        >
          Project Spotlight
        </motion.h2>
        <p className="text-center text-lg text-gray-400 mb-12">Showcasing some of my projects from my engineering journey.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(0,255,255,0.6)' }}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition duration-300"
            >
              {/* Project Card */}
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {/* Use a div with background image for each project */}
                <div
                  className="w-full h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <button className="text-black bg-cyan-400 px-4 py-2 rounded-lg shadow-md hover:bg-pink-500 hover:text-white transition-transform transform hover:scale-105">
                    View Project
                  </button>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/Karthigeyan06" target="_blank" className="text-black bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-3 rounded-full shadow-lg hover:from-pink-500 hover:to-purple-600 transition-transform transform hover:scale-110">Explore More Projects on GitHub</a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-6 text-cyan-400"
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="p-6 bg-gray-800 shadow-md rounded-2xl">
            <h3 className="text-2xl font-semibold text-cyan-400">Delphi-TVS Technologies Limited</h3>
            <p className="text-gray-400">Engineering Intern | Dec 2024 – Jan 2025</p>
            <p className="mt-2 text-gray-400">Worked on machine troubleshooting, PLC programming, and CNC maintenance. Developed a QR code-based web app to track machine data.</p>
          </div>
          <div className="p-6 bg-gray-800 shadow-md rounded-2xl">
            <h3 className="text-2xl font-semibold text-cyan-400">Rook Ecom Pvt Ltd</h3>
            <p className="text-gray-400">Techie Intern | Jan 2023 – Apr 2023</p>
            <p className="mt-2 text-gray-400">Enhanced WordPress websites and optimized user experience.</p>
          </div>
        </div>
      </section>


      {/* Skills Section */}

      <section id="skills" className="px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-6 text-cyan-400"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Programming Languages */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Programming Languages and Database</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={pythonImg} alt="Python" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">Python</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={cImg} alt="C" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">C</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={verilogImg} alt="Verilog" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">Verilog</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={matlabImg} alt="MATLAB" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">MATLAB</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={csharpImg} alt="C#" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">C#</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={dotnetImg} alt=".NET" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">.NET</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={sqlImg} alt="SQL" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">SQL</p>
              </motion.div>
            </div>
          </div>

          {/* Microcontrollers & Boards */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Microcontrollers & Boards</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={arduinoUnoImg} alt="Arduino Uno" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">Arduino Uno</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={arduinoNanoImg} alt="Arduino Nano" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">Arduino Nano</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={raspberryPiPicoImg} alt="Raspberry Pi Pico" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">Raspberry Pi Pico</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={stm32BluePillImg} alt="STM32 Blue Pill" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">STM32 Blue Pill</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={esp8266Img} alt="ESP8266" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">ESP8266</p>
              </motion.div>
            </div>
          </div>

          {/* PLCs */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">PLCs</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={mitsubishiImg} alt="Mitsubishi" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">Mitsubishi</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={siemensImg} alt="Siemens" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">Siemens</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={deltaImg} alt="Delta" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">Delta</p>
              </motion.div>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Tools</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={multisimImg} alt="Multisim" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">Multisim</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={quartusImg} alt="Quartus" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">Quartus</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={easyEDAImg} alt="EasyEDA" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">EasyEDA</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={labVIEWImg} alt="LabVIEW" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">LabVIEW</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={arduinoIDEImg} alt="Arduino IDE" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">Arduino IDE</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={stm32CUBEIDEImg} alt="STM32CUBEIDE" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">STM32CUBEIDE</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={simaticManagerImg} alt="Simatic Manager" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">Simatic Manager</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-4 bg-gray-800 rounded-xl shadow-md">
                <img src={ispSoftImg} alt="ISPSoft" className="mx-auto mb-2 w-12 h-12" />
                <p className="text-center text-gray-400 font-medium">ISPSoft</p> 
              </motion.div>
            </div>
          </div>
        </div>
      </section>

     {/* Contact Section */}
<section id="contact" className="py-20 bg-black px-8">
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl font-bold text-center mb-12 text-cyan-400"
  >
    Contact Me
  </motion.h2>

  {/* Catchy Line with Pulse and Neon Glow */}
  <motion.p
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      scale: [1, 1.1, 1],
      textShadow: [
        "0 0 5px rgba(0, 255, 255, 0.7)",
        "0 0 10px rgba(0, 255, 255, 0.7)",
        "0 0 15px rgba(0, 255, 255, 0.7)"
      ]
    }}
    transition={{ duration: 1, repeat: 0 }}
    className="text-xl text-center text-gray-300 mb-8"
  >
    I’d Love to Hear From You – Let’s Get Started and Build Something Together!
  </motion.p>

  <div className="flex justify-center space-x-8">
    <a href="mailto:karthigeyanganesan06@gmail.com" className="text-gray-400 hover:text-cyan-400 transition">
      <Mail size={36} />
    </a>
    <a href="https://www.linkedin.com/in/karthigeyan-ganesan-203066257/" target="_blank" className="text-gray-400 hover:text-cyan-400 transition">
      <Linkedin size={36} />
    </a>
    <a href="https://github.com/Karthigeyan06" target="_blank" className="text-gray-400 hover:text-cyan-400 transition">
      <Github size={36} />
    </a>
  </div>
</section>



      {/* Footer */}
      <footer className="py-6 bg-black text-center text-gray-500 border-t border-gray-700">
        &copy; 2025 Karthigeyan Ganesan. All rights reserved.
      </footer>
    </div>
  );
}
