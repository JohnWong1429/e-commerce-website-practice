import React, { useState } from 'react';
import '../styles/CartItem.css';
import { FaTrash } from 'react-icons/fa';
import AmountButton from './AmountButton';

const CartItem = ({ title, image, price }) => {
    const [amount, setAmount] = useState(1);

    const increase = () => {
        setAmount(amount => amount + 1);
    }

    const decrease = () => {
        if (amount === 1 ) {
            return;
        } else {
            setAmount(amount => amount - 1);
        }
    }

    return (
        <div className='cart-item'>
            <div className="item-name">
                <img src={image} alt={title} />
                <div className='title'>
                    <span>{title}</span>
                    <small>Colors : Black</small>
                    <span className='price'>${price.toFixed(2)}</span>
                </div>
            </div>
            <div className="item-price">
                ${price.toFixed(2)}
            </div>
            <div className="item-quantity">
                <AmountButton amount={amount} increase={increase} decrease={decrease} />
            </div>
            <div className="item-subtotal">
                ${(amount * price).toFixed(2)}
            </div>
            <div className="item-delete">
                <button>
                    <FaTrash />
                </button>
            </div>
        </div>
    );
}

export default CartItem;
