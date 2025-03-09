import React from 'react';
import Programming from '../assets/Programming.gif';
import Frontend from '../assets/Frontend.gif';
import Backend from '../assets/Backend.gif';

const ZigZagSection = () => {
  const sections = [
    {
      title: "Programming Fundamentals",
      description: "Master the fundamentals of programming with our comprehensive courses. Build a strong foundation for your development journey.",
      imageUrl: Programming,
      alt: "Programming Fundamentals"
    },
    {
      title: "Frontend Development",
      description: "Learn modern frontend development with hands-on projects. Create beautiful, responsive websites using the latest technologies.",
      imageUrl: Frontend,
      alt: "Frontend Development"
    },
    {
      title: "Backend Development",
      description: "Dive into backend development and learn how to build robust server-side applications and APIs.",
      imageUrl: Backend,
      alt: "Backend Development"
    }
  ];

  return (
    <div className="py-8 font-[Sacharmony] bg-gradient-to-t from-slate-300 to-slate-400">
      {sections.map((section, index) => (
        <div 
          key={index}
          className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
            items-center gap-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 last:mb-0`}
        >
          
          <div className="w-full lg:w-2/5">
            <div className="max-w-sm mx-auto flex items-center align-middle">
              <img
                src={section.imageUrl}
                alt={section.alt}
                className="rounded-lg h-auto object-contain max-h-64"
              />
            </div>
          </div>

          
          <div className="w-full lg:w-3/5 space-y-3">
            <h2 className="text-2xl font-bold text-gray-900 font-[Sacharmony]">
              {section.title}
            </h2>
            <p className="text-base text-gray-600 font-[Sacharmony]">
              {section.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ZigZagSection;