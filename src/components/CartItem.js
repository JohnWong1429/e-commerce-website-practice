import React, { useContext } from 'react';
import '../styles/CartItem.css';
import { FaTrash } from 'react-icons/fa';
import AmountButton from './AmountButton';
import { CartContext } from '../context/cart_context';

const CartItem = ({ item }) => {
    const { title, img, price, color, quantity, id } = item;
    const { removeItem, toggleAmount } = useContext(CartContext);

    return (
        <div className='cart-item'>
            <div className="item-name">
                <img src={img} alt={title} />
                <div className='title'>
                    <span>{title}</span>
                    <small>Colors : {color}</small>
                    <span className='price'>${price.toFixed(2)}</span>
                </div>
            </div>
            <div className="item-price">
                ${price.toFixed(2)}
            </div>
            <div className="item-quantity">
                <AmountButton amount={quantity} increase={() => toggleAmount(id, 1)} decrease={() => toggleAmount(id, -1)} />
            </div>
            <div className="item-subtotal">
                ${(quantity * price).toFixed(2)}
            </div>
            <div className="item-delete">
                <button onClick={() => removeItem(id)}>
                    <FaTrash />
                </button>
            </div>
        </div>
    );
}

export default CartItem;
