import React, { useContext } from 'react';
import { CartContext } from '../context/cart_context';
import '../styles/ConfirmCart.css';

const ConfirmCart = () => {
    const { cart, total_amount, total_items, discount, shipping_fee } = useContext(CartContext);

    return (
        <div className='confirmCart'>
            <div className="confirm">
                <ul>
                    {cart.map(item => {
                        return (
                            <li key={item.id}>
                                <div className='confirmCart-item'>
                                    <div className='title-quantity'>
                                        <span className='title'>{item.title}</span>
                                        <span className='quantity'>Quantity : {item.quantity}</span>
                                    </div>
                                    <div className="subtotal-price">
                                        <span className='subtotal'>${(item.quantity * item.price).toFixed(2)}</span>
                                        <span className='price'>${item.price.toFixed(2)} per</span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='confirmCart-total'>
                <div className="total-amount">
                    <span className="title">Shipping Fee :</span>
                    <span className="title">Discount (-) :</span>
                    <span className="title">Total :</span>
                </div>
                <div className="total-price">
                    <span className="price">${shipping_fee.toFixed(2)}</span>
                    <span className="price">${discount.toFixed(2)}</span>
                    <span className="price">${total_amount.toFixed(2)}</span>
                    <span className="amount">Quantity : {total_items}</span>
                </div>
            </div>
        </div>
    );
}

export default ConfirmCart;
