import React, { useState } from 'react';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';
import '../styles/CategoryPage.css';
import { useParams } from 'react-router-dom';


const CategoryPage = () => {
    

    return (
        <main>
            <div className="category-page">
                <div className='left'>
                    <Filter />
                </div>
                <div className="right">
                    <img 
                        className='category-page-img' 
                        src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                        alt="category" 
                    />
                    <ProductList />
                </div>
            </div>
        </main>
    );
}

export default CategoryPage;
