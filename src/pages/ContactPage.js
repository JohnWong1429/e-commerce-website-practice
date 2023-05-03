import React from 'react';
import contactImg from '../images/contact_us.jpg';
import '../styles/ContactPage.css';

const ContactPage = () => {
    return (
        <div className='contact-page'>
            <div className="phone-call">
                <span>Wanna chat with customer sevice?</span>
                <span>Call <b>+852-1234-5678</b></span>
                <span>Monday-Friday: 8am-5pm (GMT+8)</span>
            </div>
            <div className="contact-img">
                <img src={contactImg} alt='contact us' />
            </div>
            <div className="contact-page-icons">
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
            <div className="contact-email">
                <h5>BRIGHTEN UP YOUR INBOX</h5>
                <span>Join our email list for new product releases, 
                    endless inspiration, 
                    and <b>10% off</b> your next order.
                </span>
                <div className="input-email">
                    <form>
                        <input type="email" className="email" placeholder='Enter your email address' />
                        <button type='submit' className='submit'>JOIN US</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
