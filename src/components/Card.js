import React from 'react';
import '../styles/Card.css';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    const { title, isNew, oldPrice, price, id } = item;

    const uploadURL = process.env.REACT_APP_UPLOAD_URL;
    const imgURL = uploadURL + item?.img?.data?.attributes?.url;
    const img2URL = uploadURL + item?.img2?.data?.attributes?.url;
    

    return (
        <div className='card'>
            <Link to={`/product/${id}`} className='card-link'>
                <div className="card-img">
                    {isNew && <span className='card-new'>New Season</span>}
                    <img 
                        src={imgURL} 
                        alt={`featured product-${title}`} 
                        className='main-img' 
                    />
                    <img 
                        src={img2URL} 
                        alt={`featured product-${title}`} 
                        className='second-img' 
                    />
                </div>
            </Link>
            <h2>{title}</h2>
            <div className="card-price">
                {oldPrice && <h3 className='oldprice'>${oldPrice.toFixed(2)}</h3>}
                <h3 className='price'>${price.toFixed(2)}</h3>
            </div>
        </div>
    );
}

export default Card;
