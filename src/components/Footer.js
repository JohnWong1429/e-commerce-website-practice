import React from 'react';
import payment from '../images/payment.png';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor. Aenean massa. 
                        Cum sociis natoque penatibus et magnis dis parturient 
                        montes, nascetur ridiculus mus. Donec quam 
                        felis, ultricies nec, pellentesque eu, pretium quis, sem.                     
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor. Aenean massa. Cum 
                        sociis natoque penatibus et magnis dis parturient 
                        montes, nascetur ridiculus mus. Donec quam felis, ultricies 
                        nec, pellentesque eu, pretium quis, sem. 
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">RIW</span>
                    <span className="copyright">
                        ® Copyright 2023. All Rights Reserved
                    </span>
                </div>
                <div className="right">
                    <img src={payment} alt="payment method" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
