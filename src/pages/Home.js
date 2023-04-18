import React from 'react';
import Slider from '../components/Slider';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
    return (
        <>
            <Slider />
            <FeaturedProducts type='featured' />
            <FeaturedProducts type='trending' />
        </>
    );
}

export default Home;
