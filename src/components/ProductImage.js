import React, { useState } from 'react';
import '../styles/ProductImage.css';

const ProductImage = () => {
    const images = [
        'https://images.pexels.com/photos/10026492/pexels-photo-10026492.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);



    return (
        <div className='productImg'>
            <div className="img">
                {images.map((img, index) => (
                    <img
                        src={img}
                        alt=''
                        key={index}
                        onClick={() => setSelectedImage(images[index])}
                        className={img === selectedImage ? 'active' : null}
                    />
                ))}
            </div>
            <div className="main-img">
                <img src={selectedImage} alt="" />
            </div>
        </div>
    );
}

export default ProductImage;
