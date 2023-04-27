import React, { useState } from 'react';
import '../styles/ProductImage.css';
import useFetch from '../hooks/useFetch';

const ProductImage = ({ id }) => {
    const { data , loading } = useFetch(
        `/products?populate=*&[filters][id][$eq]=${id}`
    );

    const uploadURL = process.env.REACT_APP_UPLOAD_URL;
    const imgURL = uploadURL + data[0]?.attributes?.img?.data?.attributes?.url;
    const img2URL = uploadURL + data[0]?.attributes?.img2?.data?.attributes?.url;

    const images = [
        imgURL,
        img2URL,
    ];

    const [selectedImage, setSelectedImage] = useState(0);



    return (
        <div className='productImg'>
            {loading ? (
                'Loading...'
            ) : (
            <div className="img">
                {images.map((img, index) => (
                    <img
                        src={img}
                        alt=''
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={img === images[selectedImage] ? 'active' : null}
                    />
                ))}
            </div>
            )}
            {loading ? (
                'Loading...'
            ) : (
            <div className="main-img">
                <img src={images[selectedImage]} alt="" />
            </div>
            )}
        </div>
    );
}

export default ProductImage;
