import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import '../styles/Slider.css';


const Slider = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    const data = [
        'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ];

    const prevSlide = () => {
        setCurrentSlider(currentSlider === 0 ? 2 : (prev) => prev - 1);
    }

    const nextSlide = () => {
        setCurrentSlider(currentSlider === 2 ? 0 : (next) => next + 1);
    }


    return (
        <div className='slider'>
            <div className="slider-container" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
                <img src={data[0]} alt='slider' />
                <img src={data[1]} alt='slider' />
                <img src={data[2]} alt='slider' />
            </div>
            <div className="slider-icons-left">
                <div className="slider-icon" onClick={prevSlide}>
                    <AiOutlineArrowLeft />
                </div>
            </div>
            <div className="slider-icons-right">
                <div className="slider-icon" onClick={nextSlide}>
                    <AiOutlineArrowRight />
                </div>
            </div>
        </div>
    );
}

export default Slider;
