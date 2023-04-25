import React from 'react';
import Card from './Card';
import '../styles/FeaturedProducts.css';
import useFetch from '../hooks/useFetch';

const FeaturedProducts = ({ type }) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );

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
                {data?.map(item => (
                    <Card item={item.attributes} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default FeaturedProducts;
