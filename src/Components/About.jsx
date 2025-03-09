import React, { useState } from 'react';
import { FaUser, FaCode, FaGlobe, FaBriefcase, FaGraduationCap, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profilePic from "../assets/akash.jpg";

const aboutSections = [
  {
    id: 'about',
    icon: <FaUser className="text-blue-400 text-4xl" />,
    title: "About Me",
    description: "I'm a passionate developer who loves building web applications and solving real-world problems with code. Always eager to learn and explore new technologies.",
    content: (
      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">Email</p>
            <p className="font-medium">akashprofess10@gmail.com</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">Location</p>
            <p className="font-medium">Tirupur, India</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">Phone number</p>
            <p className="font-medium">8220465332</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">Projects</p>
            <p className="font-medium">3 Completed</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'skills',
    icon: <FaCode className="text-green-400 text-4xl" />,
    title: "My Skills",
    description: "Proficient in JavaScript, React, Tailwind CSS, and backend technologies. Experienced in developing responsive and scalable applications.",
    content: (
      <div className="mt-6 space-y-4">
        {[
          { skill: "React.js", level: "w-[50%]" },
          { skill: "JavaScript", level: "w-[85%]" },
          { skill: "Node.js", level: "w-[30%]" },
          { skill: "Tailwind CSS", level: "w-[75%]" },
          { skill: "MongoDB", level: "w-[75%]" }
        ].map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{item.skill}</span>
              <span className="text-gray-600">Advanced</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className={`bg-indigo-600 h-2 rounded-full transition-all duration-500 ${item.level}`}></div>
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'vision',
    icon: <FaGlobe className="text-red-400 text-4xl" />,
    title: "My Vision",
    description: "I aspire to create meaningful digital experiences that make an impact. My goal is to build innovative solutions that improve lives and businesses.",
    content: (
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <h4 className="font-semibold mb-2">Innovation</h4>
          <p className="text-sm text-gray-600">Pushing boundaries with creative solutions</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <h4 className="font-semibold mb-2">Quality</h4>
          <p className="text-sm text-gray-600">Delivering excellence in every project</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <h4 className="font-semibold mb-2">Growth</h4>
          <p className="text-sm text-gray-600">Continuous learning and improvement</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <h4 className="font-semibold mb-2">Impact</h4>
          <p className="text-sm text-gray-600">Making a difference through technology</p>
        </div>
      </div>
    )
  },
  {
    id: 'education',
    icon: <FaGraduationCap className="text-purple-400 text-4xl" />,
    title: "Education",
    description: "Currently pursuing in KPR Institute of Technology.",
    content: (
      <div className="mt-6 space-y-4">
        <div className="border-l-2 border-indigo-600 pl-4 space-y-4">
          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 bg-indigo-600 rounded-full"></div>
            <h4 className="font-semibold">B.Tech in Computer Science</h4>
            <p className="text-sm text-gray-600">2022 - 2026</p>
            <p className="mt-2 text-gray-600">KPR Institute and Technology</p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 w-4 h-4 bg-indigo-600 rounded-full"></div>
            <h4 className="font-semibold">Certifications</h4>
            <p className="mt-2 text-gray-600">
              - Moderate React Development<br />
              - Java Full Stack Development<br />
              - Figma Basics
              - SpringBoot Moderate
              - Tailwind.css
              - Bootstrap.css
              - Express Basics
              - MySql
              - PostgreSql
              - MangoDB
            </p>
          </div>
        </div>
      </div>
    )
  }
];

const AboutSection = () => {
  const [activeSection, setActiveSection] = useState('about');
  const currentSection = aboutSections.find(section => section.id === activeSection);

  return (
    <div className="py-12 bg-gradient-to-t from-violet-400 to-purple-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-start p-4 space-y-6">
            <div className="relative">
              <img
                src={profilePic}
                alt="Profile"
                className="rounded-2xl shadow-lg w-[300px] h-[400px] object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <h2 className="text-3xl font-semibold text-gray-800 text-center">
              Hello, I'm Akash S
            </h2>
            <div className="flex space-x-4">
              <a href="https://github.com/AkashS287" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/akash-s-077a20303" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <FaLinkedin size={24} />
              </a>
              {/* <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <FaTwitter size={24} />
              </a> */}
            </div>
          </div>

          
          <div className="w-full lg:w-1/2 p-4">
            <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
              {aboutSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-indigo-50'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>

            {currentSection && (
              <div 
                className="bg-white p-6 rounded-xl shadow-md"
                key={currentSection.id}
              >
                <div className="flex items-start space-x-4">
                  <div className="transform hover:scale-110 transition-transform duration-300">
                    {currentSection.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {currentSection.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {currentSection.description}
                    </p>
                    {currentSection.content}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;