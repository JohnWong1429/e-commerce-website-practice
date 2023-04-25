import React, { useContext } from 'react';
import Card from './Card';
import '../styles/FeaturedProducts.css';
import { ProductsContext } from '../context/products_context';

const FeaturedProducts = ({ type }) => {
    const { products } = useContext(ProductsContext);

    const product = products.data;

    console.log(product);

    return (
        <div className='featuredProducts'>
            <div className="feature-top">
                <div className="heading">
                    <h1>{type} products</h1>
                </div>
                <div className="description">
                    <p>
                        Featured clothes are the latest and most popular 
                        fashion items that are highlighted by designers and 
                        fashion experts. These clothes are often showcased in 
                        fashion shows, magazines, and online stores. 
                    </p>
                </div>
            </div>
            <div className="feature-bottom">
                {product?.map(item => (
                    <Card item={item.attributes} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default FeaturedProducts;
