import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import '../styles/Slider.css';
import slider1 from '../images/image2.png';
import slider2 from '../images/image4.png';
import slider3 from '../images/image5.png';

const Slider = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    const data = [slider1, slider2, slider3,];

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
