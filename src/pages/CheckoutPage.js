import React, { useContext } from 'react';
import StripeCheckout from '../components/StripeCheckout';
import { CartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import ConfirmCart from '../components/ConfirmCart';
import '../styles/CheckoutPage.css';
import BackButton from '../components/BackButton';

const CheckoutPage = () => {
    const { cart } = useContext(CartContext);
    return (
        <>
            {cart.length ? (
                <>
                    <div className="checkout-back-btn">
                        <BackButton value={-1}>
                            Back
                        </BackButton>
                    </div>
                    <h5>Checkout Page</h5>
                    <ConfirmCart />
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
