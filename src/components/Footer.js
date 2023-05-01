import React from 'react';
import payment from '../images/payment.png';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaCrown } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className="top-link-wrapper">
                    <div className="top-link-items">
                        <h2>About Us</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="top-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className="top-link-wrapper">
                    <div className="top-link-items">
                        <h2>Links</h2>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Pages</Link>
                        <Link to='/'>Stores</Link>
                        <Link to='/'>Cookies</Link>
                    </div>
                    <div className="top-link-items">
                        <h2>Social Media</h2>
                        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>Instagram</a>
                        <a href='https://zh-hk.facebook.com/' target='_blank' rel='noopener noreferrer'>Facebook</a>
                        <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>Youtube</a>
                        <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>Twitter</a>
                    </div>
                </div>            
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="logo">
                        <Link to='/' className='social-logo'>
                            RIW <FaCrown className="crown" />
                        </Link>
                    </div>
                    <small className="copyright">
                        RIW ® 2023. All Rights Reserved
                    </small>
                    <div className="social-icons">
                        <a 
                            className="social-icon-link facebook"
                            href='https://zh-hk.facebook.com/'
                            target='_blank'
                            aria-label='Facebook'
                            rel='noopener noreferrer'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a 
                            className="social-icon-link instagram"
                            href='https://www.instagram.com/'
                            target='_blank'
                            aria-label='Instagram'
                            rel='noopener noreferrer'
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a 
                            className="social-icon-link youtube"
                            href='https://www.youtube.com/'
                            target='_blank'
                            aria-label='Youtube'
                            rel='noopener noreferrer'
                        >
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a 
                            className="social-icon-link twitter"
                            href='https://twitter.com/'
                            target='_blank'
                            aria-label='Twitter'
                            rel='noopener noreferrer'
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a 
                            className="social-icon-link linkedin"
                            href='https://www.linkedin.com/'
                            target='_blank'
                            aria-label='LinkedIn'
                            rel='noopener noreferrer'
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <img src={payment} alt="payment method" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
