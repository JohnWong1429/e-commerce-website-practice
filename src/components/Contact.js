import React from 'react';
import '../styles/Contact.css';

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
                        <a
                            href='https://zh-hk.facebook.com/'
                            className='icon-link facebook'
                            target='_blank'
                            aria-label='Facebook'
                            rel='noopener noreferrer'
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a
                            href='https://www.instagram.com/'
                            className='icon-link instagram'
                            target='_blank'
                            aria-label='Instagram'
                            rel='noopener noreferrer'
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href='https://www.youtube.com/'
                            className='icon-link youtube'
                            target='_blank'
                            aria-label='Youtube'
                            rel='noopener noreferrer'
                        >
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a
                            href='https://twitter.com/'
                            className='icon-link twitter'
                            target='_blank'
                            aria-label='Twitter'
                            rel='noopener noreferrer'
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href='https://www.linkedin.com/'
                            className='icon-link linkedin'
                            target='_blank'
                            aria-label='LinkedIn'
                            rel='noopener noreferrer'
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
