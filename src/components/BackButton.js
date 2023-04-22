import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BackButton.css';

const BackButton = ({ children }) => {
    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
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
