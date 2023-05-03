import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/ErrorPage.css';

const ErrorPage = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const counter = setInterval(() => {
            setCount(count => count - 1);
        }, 1000);
        return () => clearInterval(counter);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className='error-page'>
            <h1>404 PAGE NOT FOUND</h1>
            <span>Sorry,</span>
            <span>The Page You Are Looking For Cannot Be Found</span>
            <span>Redirecting to Home Page in {count} seconds ...</span>
            <span>
                or you can click
                {' '}
                <Link to='/'>
                    here
                </Link> to redirect.
            </span>
        </div>
    );
}

export default ErrorPage;
