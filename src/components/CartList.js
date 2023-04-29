import React, { useContext } from 'react';
import '../styles/CartList.css';
import CartItem from './CartItem';
import { CartContext } from '../context/cart_context';

const CartList = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className='cart-list'>
            <ul>
                {cart.map(item => {
                    return (
                        <li key={item.id}>
                            <CartItem 
                                item={item}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default CartList;
