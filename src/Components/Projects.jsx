import React, { useRef } from 'react';
import Slider from "react-slick";
import FoodHub from '../assets/Street-Bluefood.svg';
import BookStore from '../assets/BookShop.svg';
import About from '../assets/About.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const sliderRef = useRef(null);

  const data = [
    { name: "FoodWeb", image: FoodHub, link: "https://github.com/yourusername/foodweb" },
    { name: "BookShop", image: BookStore, link: "https://github.com/yourusername/bookshop" },
    { name: "About", image: About, link: "https://github.com/yourusername/about" }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="text-center bg-gradient-to-t from-violet-400 to-purple-900">
      <Slider ref={sliderRef} {...settings}>
        {data.map((d, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className='flex justify-center max-w-full'>
              <a 
                href={d.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-center items-center w-[40%] h-[40%]" // Ensuring the same size
              >
                <img 
                  src={d.image}
                  alt={d.name}
                  className='w-full h-full' // Ensuring image takes full space
                />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold">{d.name}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Buttons to Control Slider */}
      <div className="mt-4 flex justify-center space-x-4">
        <button 
          onClick={() => sliderRef.current.slickPrev()} 
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600 transition"
        >
          Prev
        </button>
        <button 
          onClick={() => sliderRef.current.slickNext()} 
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600 transition"
        >
          Next
        </button>
      </div>
      <br />
    </div>
  );
};

export default Projects;
