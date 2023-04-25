import React from 'react';
import Slider from '../components/Slider';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import Contact from '../components/Contact';

const HomePage = () => {
    return (
        <main>
            <Slider />
            <FeaturedProducts type={'featured'} />
            <Categories />
            <FeaturedProducts type={'trending'} />
            <Contact />
        </main>
    );
}

export default HomePage;
