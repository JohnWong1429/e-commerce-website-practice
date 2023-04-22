import React from 'react';
import '../styles/CartList.css';
import { data } from '../utils/example';
import CartItem from './CartItem';

const CartList = () => {
    return (
        <div className='cart-list'>
            <ul>
                {data.map(item => {
                    return (
                        <li key={item.id}>
                            <CartItem 
                                title={item.title} 
                                image={item.img}
                                price={item.price}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default CartList;
