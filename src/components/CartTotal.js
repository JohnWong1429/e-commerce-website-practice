import React from 'react';
import '../styles/CartTotal.css';

const CartTotal = () => {
    return (
        <div className='cart-total'>
            <div className="top">
                <div className="subtotal">
                    <span>Subtotal : </span>
                    $48.00
                </div>
                <div className="additional">
                    <span>Shipping Fee : </span>
                    $20.00
                {true && <div className="discount">
                    <span>Discount (-) : </span>
                    $20.00
                </div>}
                </div>
                <div className="total">
                    <span>Order Total : </span>
                    $48.00
                </div>
            </div>
            <div className="bottom">
                <button>
                    LOGIN
                </button>
            </div>
        </div>
    );
}

export default CartTotal;
