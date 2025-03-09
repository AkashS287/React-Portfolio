import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Dummy = () => {
    const sliderRef = useRef(null);

    const data = [
        {
            "Title":"FoodShop",
            "paragraph":"Foodshop is a worthy treat for customers. Once you taste it, it never goes off from your tongue.",
        },
        {
            "Title":"BookShop",
            "paragraph":"Book Shop is a wonderful place to learn and gain knowledge.",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        
        autoplaySpeed: 3000,  
        swipeToSlide: true,    
        touchMove: true,      
        accessibility: false, 
        pauseOnHover: false,  // Ensures autoplay does not stop on hover
    };

    return (
        <div className='overflow-hidden w-full'>
            <Slider ref={sliderRef} {...settings}>  
                {data.map((d, index) => (
                    <div key={index} className='p-3 bg-gray-200'>
                        <div className='bg-slate-300 text-center font-medium p-2 font-hero'>{d.Title}</div>
                        <div className='bg-purple-600 text-center text-white p-2 font-hero'>{d.paragraph}</div>
                    </div>
                ))}
            </Slider>  
        </div>
    );
}

export default Dummy;
