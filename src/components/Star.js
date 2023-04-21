import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import '../styles/Star.css';

const Star = ({ stars, reviews }) => {
    const array = [1, 2, 3, 4, 5];

    const productStar = array.map((star, index) => {
        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <BsStarFill /> 
                ) : stars >= index + 0.5 ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />
                )}
            </span>
        );
    });

    return (
        <div className='star'>
            <div className='stars'>{productStar}</div>
            <p className='reviews'>({reviews} customer reviews)</p>
        </div>
    );
}

export default Star;
