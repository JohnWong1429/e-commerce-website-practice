import React from 'react';
import '../styles/Card.css';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    const { img, img2, title, isNew, oldPrice, price, id } = item;

    return (
        <Link to={`/products/${id}`} className='card-link'>
            <div className='card'>
                <div className="card-img">
                    {isNew && <span className='card-new'>New Season</span>}
                    <img src={img} alt={`featured product-${title}`} className='main-img' />
                    <img src={img2} alt={`featured product-${title}`} className='second-img' />
                </div>
                <h2>{title}</h2>
                <div className="card-price">
                    <h3 className='oldprice'>${oldPrice}</h3>
                    <h3 className='price'>${price}</h3>
                </div>
            </div>
        </Link>
    );
}

export default Card;
