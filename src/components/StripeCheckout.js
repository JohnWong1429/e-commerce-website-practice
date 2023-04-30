import React, { useContext, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../utils/makeRequest';
import { CartContext } from '../context/cart_context';
import '../styles/StripeCheckout.css';

const StripeCheckout = () => {
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    const { cart, discount, shipping_fee } = useContext(CartContext);
    const [confirm, setConfirm] = useState(false);

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
        <div className='stripe-checkout'>
            <div className="confirm">
                <input
                    type='checkbox'
                    id='confirm'
                    name='confirm'
                    className='confirm-input'
                    checked={confirm}
                    onClick={() => setConfirm(!confirm)}
                />
                <label htmlFor='confirm'>Confirm</label>
            </div>
            <div className="pay">
                <button 
                    className='pay-btn' 
                    onClick={handlePayment}
                    disabled={!confirm}
                >
                    Proceed to Pay
                </button>
            </div>
        </div>
    );
}

export default StripeCheckout;
