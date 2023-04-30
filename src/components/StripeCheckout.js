import React, { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../utils/makeRequest';
import { CartContext } from '../context/cart_context';

const StripeCheckout = () => {
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    const { cart, discount, shipping_fee } = useContext(CartContext);

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post('/orders', {
                cart,
                discount,
                shipping_fee,
            });

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <button onClick={handlePayment}>
                Pay
            </button>
        </div>
    );
}

export default StripeCheckout;
