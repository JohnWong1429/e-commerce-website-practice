import React, { useState } from 'react';
import '../styles/ProductInfo.css';
import Star from './Star';
import { VscCheck, VscChromeClose } from 'react-icons/vsc';
import AmountButton from './AmountButton';
import { Link } from 'react-router-dom';


const ProductInfo = () => {
    const [amount, setAmount] = useState(1);

    const increase = () => {
        setAmount(amount => amount + 1);
    }

    const decrease = () => {
        if (amount === 1) {
            return;
        } else {
            setAmount(amount => amount - 1);
        }
    }


    return (
        <div className='product-info'>
            <h2>Title</h2>
            <Star stars={4.5} reviews={80} />
            <span className='price'>$19.9</span>
            <p>
                What is a product description? A 
                product description is the marketing
                copy that explains what a product is and wh
                y it's worth purchasing. The purpose of a p
                roduct description is to supply customers with im
                portant information about the features and key ben
                efits of the product so they're compelled to buy.
            </p>
            <div className="info">
                <span>Categories : </span>
                {'Shoes'}
            </div>
            <div className="info">
                <span>Department : </span>
                {'Men'}
            </div>
            <div className="info">
                <span>Available : </span>
                {'In Stock'}
            </div>
            <div className="info">
                <span>New Season : </span>
                <VscCheck />
            </div>
            <div className="info">
                <span>Colors : </span>
                <select name='colors' className='colors-input' id='colors'>
                    <option value='red'>Red</option>
                    <option value='green'>Green</option>
                    <option value='Blue'>Blue</option>
                    <option value='Black'>Black</option>
                    <option value='White'>White</option>
                </select>
            </div>
            <hr />
            <AmountButton amount={amount} increase={increase} decrease={decrease} />
            <div className="add-cart">
                <Link to='/cart' className='cart-btn'>
                    <button>ADD TO CART</button>
                </Link>
            </div>
        </div>
    );
}

export default ProductInfo;
