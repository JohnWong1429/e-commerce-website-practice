import React from 'react';
import CartTitle from '../components/CartTitle';
import CartList from '../components/CartList';
import CartTotal from '../components/CartTotal';
import BackButton from '../components/BackButton';
import '../styles/CartPage.css';

const CartPage = () => {
    return (
        <>
            <div className="cart-btn">
                <BackButton>
                    Go Shopping
                </BackButton>
            </div>
            <div className='cart-page'>
                <CartTitle />
                <CartList />
                <div className='bottom'>
                    <button className='clear-cart-btn'>
                        Clear Shopping Cart
                    </button>
                    <CartTotal />
                </div>
            </div>
        </>
    );
}

export default CartPage;
