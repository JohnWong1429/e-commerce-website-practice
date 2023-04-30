import React from 'react';
import '../styles/SingleProductPage.css';
import ProductImage from '../components/ProductImage';
import ProductInfo from '../components/ProductInfo';
import BackButton from '../components/BackButton';
import { useParams } from 'react-router-dom';

const SingleProductPage = () => {
    const id = useParams().id;

    return (
        <>
            <div className='back'>
                <BackButton value={-1}>
                    Back
                </BackButton>
            </div>
            <div className='single-product-page'>
                <div className="left">
                    <ProductImage id={id} />
                </div>
                <div className="right">
                    <ProductInfo id={id} />
                </div>
            </div>
        </>
    );
}

export default SingleProductPage;
