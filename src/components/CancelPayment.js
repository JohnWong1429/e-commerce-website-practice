import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CancelPayment.css';

const CancelPayment = () => {
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
            navigate('/cart');
        }, 9000);
        return () => clearTimeout(timer);
    }, [navigate]);


    return (
        <div className='cancel-payment'>
            <span>Sorry, your payment was unsuccessful</span>
            <span>because you have canceled the payment.</span>
            <span>Redirecting to Cart in {count} seconds ...</span>
        </div>
    );
}

export default CancelPayment;
