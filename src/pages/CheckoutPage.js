import React, { useContext } from 'react';
import StripeCheckout from '../components/StripeCheckout';
import { CartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
    const { cart } = useContext(CartContext);
    return (
        <>
            {cart.length ? (
                <>
                    <StripeCheckout />
                </>
            ) : (
                <>
                    <div className='empty-cart'>
                        <span>Your cart is empty</span>
                        <Link to='/products/1'>
                            <button>
                                Fill It
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </>
    );
}

export default CheckoutPage;
