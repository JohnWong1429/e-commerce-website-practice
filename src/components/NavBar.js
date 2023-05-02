import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from '../utils/constants';
import { FaCrown, FaTimes, FaBars } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import '../styles/NavBar.css';
import { CartContext } from '../context/cart_context';
import { UserContext } from '../context/user_context';
import UserMenu from './UserMenu';



const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { total_items, clearCart } = useContext(CartContext);
    const { myUser, logout, loginWithRedirect } = useContext(UserContext);

    const log_in = () => {
        setShowMenu(false);
        loginWithRedirect();
    };

    const log_out = () => {
        setShowMenu(false);
        logout();
        clearCart();
    };

    return (
        <div className='navbar'>
            <div className="nav-container">
                <Link to='/' className='nav-logo' onClick={() => setShowMenu(false)}>
                    RIW <FaCrown className='crown'/>
                </Link>
                <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={showMenu ? 'navbar-menu active' : 'navbar-menu'}>
                    {LINKS.map(link => (
                        <li key={link.id} className='navbar-item'>
                            <Link to={link.url} className='nav-links' onClick={() => setShowMenu(false)}>
                                {link.text}
                            </Link>
                        </li>
                    ))}
                    {myUser ? (
                        <li className='navbar-item logout'>
                            <div className='nav-links' onClick={log_out}>
                                Logout
                            </div>
                        </li>
                    ) : (
                        <li className='navbar-item login'>
                            <div className="nav-links" onClick={log_in}>
                                Login
                            </div>
                        </li>
                    )}
                </ul>
                <div className="nav-icons">
                    <Link to='/cart' className='icon' onClick={() => setShowMenu(false)}>
                        <div className="nav-cartIcon">
                            <AiOutlineShoppingCart />
                            <span>{total_items}</span>
                        </div>
                    </Link>
                    <div className="nav-userIcon">
                        <UserMenu />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
