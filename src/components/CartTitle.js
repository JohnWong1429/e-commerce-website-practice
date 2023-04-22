import React from 'react';
import '../styles/CartTitle.css';

const CartTitle = () => {
    return (
        <div className='cart-title'>
            <h5 className='item'>Item</h5>
            <h5 className='price'>Price</h5>
            <h5 className='quantity'>Quantity</h5>
            <h5 className='subtotal'>Subtotal</h5>
        </div>
    );
}

export default CartTitle;
