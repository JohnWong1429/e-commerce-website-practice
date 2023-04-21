import React from 'react';
import '../styles/SingleProductPage.css';
import ProductImage from '../components/ProductImage';
import ProductInfo from '../components/ProductInfo';

const SingleProductPage = () => {
    return (
        <div className='single-product-page'>
            <div className="left">
                <ProductImage />
            </div>
            <div className="right">
                <ProductInfo />
            </div>
        </div>
    );
}

export default SingleProductPage;
