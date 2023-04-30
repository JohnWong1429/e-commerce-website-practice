import React, { useContext } from 'react';
import '../styles/CartTotal.css';
import { CartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CartTotal = () => {
    const { discount, total_amount, shipping_fee } = useContext(CartContext);

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
                <Link to='/checkout'>
                    <button>
                        Proceed to checkout
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default CartTotal;
