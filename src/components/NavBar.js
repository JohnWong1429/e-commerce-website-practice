import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from '../utils/constants';
import { FaCrown, FaTimes, FaBars } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import '../styles/NavBar.css';
import { CartContext } from '../context/cart_context';



const NavBar = () => {
    const [click, setClick] = useState(false);
    const { total_items } = useContext(CartContext);

    return (
        <div className='navbar'>
            <div className="nav-container">
                <Link to='/' className='nav-logo'>
                    RIW <FaCrown className='crown'/>
                </Link>
                <div className="menu-icon" onClick={() => setClick(!click)}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
                    {LINKS.map(link => (
                        <li key={link.id} className='navbar-item'>
                            <Link to={link.url} className='nav-links'>
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="nav-icons">
                    <Link to='/cart' className='icon'>
                        <div className="nav-cartIcon">
                            <AiOutlineShoppingCart />
                            <span>{total_items}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
