import React, { useState } from 'react';
import '../styles/ProductInfo.css';
import Star from './Star';
import { VscCheck, VscChromeClose } from 'react-icons/vsc';
import AmountButton from './AmountButton';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';


const ProductInfo = ({ id }) => {
    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][id][$eq]=${id}`
    );

    //const { title, price, old_price, onSale, isNew, description, stock } = data[0]?.attributes;
    //const { department } = data[0]?.attributes?.categories?.data?.[0]?.attributes;
    //const { categories } = data[0]?.attributes?.sub_categories?.data?.[0]?.attributes;

    const [amount, setAmount] = useState(1);

    const increase = () => {
        if (amount < data[0]?.attributes.stock) {
            setAmount(amount => amount + 1);
        }
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
            {error ? (
                'Something went wrong!'
            ) : loading ? (
                'Loading...'
            ) : (
                <>
                    <h2>{data[0]?.attributes?.title}</h2>
                    <Star stars={4.5} reviews={80} />
                    <div className='price-info'>
                        <span className='price'>${data[0]?.attributes?.price.toFixed(2)}</span>
                        {data[0]?.attributes?.onSale && <span className='old-price'>${data[0]?.attributes?.old_price.toFixed(2)}</span>}
                    </div>
                    <p>
                        {data[0]?.attributes?.description}
                    </p>
                    <div className="info">
                        <span>Categories : </span>
                        {data[0]?.attributes?.sub_categories?.data?.[0]?.attributes?.title}
                    </div>
                    <div className="info">
                        <span>Department : </span>
                        {data[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
                    </div>
                    <div className="info">
                        <span>Available : </span>
                        {data[0]?.attributes.stock}
                    </div>
                    <div className="info">
                        <span>New Season : </span>
                        {data[0]?.attributes.isNew ? <VscCheck /> : <VscChromeClose />}
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
                </>
            )}
        </div>
    );
}

export default ProductInfo;
