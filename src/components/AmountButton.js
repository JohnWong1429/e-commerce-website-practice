import React from 'react';
import '../styles/AmountButton.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AmountButton = ({ amount, increase, decrease }) => {
    return (
        <div className='amount-btn'>
            <button
                className='btn'
                type='button'
                onClick={decrease}
            >
                <FaMinus />
            </button>
            <div className="amount">{amount}</div>
            <button
                className='btn'
                type='button'
                onClick={increase}
            >
                <FaPlus />
            </button>
        </div>
    );
}

export default AmountButton;
