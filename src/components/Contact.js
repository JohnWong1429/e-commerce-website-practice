import React from 'react';
import '../styles/Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-wrapper'>
                <div className="contact-left">
                    <span>
                        BE IN TOUCH WITH US:
                    </span>
                </div>
                <div className="contact-center">
                    <div className="contact-input">
                        <form>
                            <input type='email' className='contact-email' placeholder='Enter your e-mail...' />
                            <button type='submit' className='contact-btn'>JOIN US</button>
                        </form>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="contact-social-icons">
                        <Link
                            to='https://zh-hk.facebook.com/'
                            className='icon-link facebook'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link
                            to='https://www.instagram.com/'
                            className='icon-link instagram'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link
                            to='https://www.youtube.com/'
                            className='icon-link youtube'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link
                            to='https://twitter.com/'
                            className='icon-link twitter'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link
                            to='https://www.linkedin.com/'
                            className='icon-link linkedin'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
