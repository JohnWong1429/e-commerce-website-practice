import React from 'react';
import '../styles/SingleProductPage.css';
import ProductImage from '../components/ProductImage';
import ProductInfo from '../components/ProductInfo';
import BackButton from '../components/BackButton';

const SingleProductPage = () => {
    return (
        <>
            <div className='back'>
                <BackButton>
                    Back
                </BackButton>
            </div>
            <div className='single-product-page'>
                <div className="left">
                    <ProductImage />
                </div>
                <div className="right">
                    <ProductInfo />
                </div>
            </div>
        </>
    );
}

export default SingleProductPage;
