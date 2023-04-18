import React from 'react';
import payment from '../images/payment.png';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

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
                        <Link to='https://www.instagram.com/' target='_blank'>Instagram</Link>
                        <Link to='https://zh-hk.facebook.com/' target='_blank'>Facebook</Link>
                        <Link to='https://www.youtube.com/' target='_blank'>Youtube</Link>
                        <Link to='https://twitter.com/' target='_blank'>Twitter</Link>
                    </div>
                </div>            
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="logo">
                        <Link to='/' className='social-logo'>
                            RIW <i className="fa fa-crown"></i>
                        </Link>
                    </div>
                    <small className="copyright">
                        RIW ® 2023. All Rights Reserved
                    </small>
                    <div className="social-icons">
                        <Link 
                            className="social-icon-link facebook"
                            to='https://zh-hk.facebook.com/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link 
                            className="social-icon-link instagram"
                            to='https://www.instagram.com/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link 
                            className="social-icon-link youtube"
                            to='https://www.youtube.com/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link 
                            className="social-icon-link twitter"
                            to='https://twitter.com/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link 
                            className="social-icon-link linkedin"
                            to='https://www.linkedin.com/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
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
