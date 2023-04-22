import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BackButton.css';

const BackButton = () => {
    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    }


    return (
        <div className='back-btn'>
            <button onClick={back}>Back</button>
        </div>
    );
}

export default BackButton;
