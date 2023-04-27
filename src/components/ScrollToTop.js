import React, { useState } from 'react';
import '../styles/ScrollToTop.css';

const ScrollToTop = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const toggleShowScrollButton = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 400) {
            setShowScrollButton(true);
        }
        else if (scrolled <= 400) {
            setShowScrollButton(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleShowScrollButton)

    return (
        <div 
            onClick={scrollToTop} 
            className='scroll-btn'
            style={{display: showScrollButton ? 'inline' : 'none'}}
        >
            <i className="fa fa-arrow-circle-up"></i>
        </div>
    );}

export default ScrollToTop;
