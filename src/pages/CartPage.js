import React, { useContext } from 'react';
import CartTitle from '../components/CartTitle';
import CartList from '../components/CartList';
import CartTotal from '../components/CartTotal';
import BackButton from '../components/BackButton';
import '../styles/CartPage.css';
import { CartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, clearCart } = useContext(CartContext);

    return (
        <>
            {cart.length ? (
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
                            <button className='clear-cart-btn' onClick={clearCart}>
                                Clear Shopping Cart
                            </button>
                            <CartTotal />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='empty-cart'>
                        <span>Your cart is empty</span>
                        <Link to='/products/1'>
                            <button>
                                Fill It
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </>
    );
}

export default CartPage;
