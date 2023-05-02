import React, { useContext } from 'react';
import '../styles/CartTotal.css';
import { CartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user_context';

const CartTotal = () => {
    const { discount, total_amount, shipping_fee } = useContext(CartContext);
    const { myUser, loginWithRedirect } = useContext(UserContext);

    return (
        <div className='cart-total'>
            <div className="top">
                <div className="subtotal">
                    <span>Subtotal : </span>
                    ${total_amount.toFixed(2)}
                </div>
                <div className="additional">
                    <span>Shipping Fee : </span>
                    ${shipping_fee.toFixed(2)}
                {true && <div className="discount">
                    <span>Discount (-) : </span>
                    ${discount.toFixed(2)}
                </div>}
                </div>
                <div className="total">
                    <span>Order Total : </span>
                    ${(total_amount + shipping_fee - discount).toFixed(2)}
                </div>
            </div>
            <div className="bottom">
                {myUser ? (
                    <Link to='/checkout'>
                        <button className='checkout-btn'>
                            Proceed to checkout
                        </button>
                    </Link>
                ) : (
                    <button className='login-btn' onClick={loginWithRedirect}>
                        Login
                    </button>
                )}
            </div>
        </div>
    );
}

export default CartTotal;
