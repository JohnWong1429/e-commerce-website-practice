import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/cart_context';
import { useNavigate } from 'react-router-dom';
import '../styles/SuccessPayment.css';

const SuccessPayment = () => {
    const { clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [count, setCount] = useState(9);
    
    useEffect(() => {
        const counter = setInterval(() => {
            setCount(count => count - 1);
        }, 1000);
        return () => clearInterval(counter);
    }, [count]);


    useEffect(() => {
        const timer = setTimeout(() => {
            clearCart();
            navigate('/');
        }, 9000);
        return () => clearTimeout(timer);
    }, [navigate, clearCart]);



    return (
        <div className='success-payment'>
            <span>Thank you!</span>
            <span>Your payment was successful!</span>
            <span>
                See the result in your
                <a 
                    href='https://dashboard.stripe.com/test/payments'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {' '}
                    Stripe dashboard.
                </a>
            </span>
            <span>Redirecting to Home Page in {count} seconds ...</span>
        </div>
    );
}

export default SuccessPayment;
