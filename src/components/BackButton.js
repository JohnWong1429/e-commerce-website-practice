import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BackButton.css';

const BackButton = ({ children, value }) => {
    const navigate = useNavigate();

    const back = () => {
        navigate(value);
    }


    return (
        <div className='back-btn'>
            <button onClick={back}>
                {children}
            </button>
        </div>
    );
}

export default BackButton;
