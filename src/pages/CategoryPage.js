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
                    <div className='productList-title'>
                        <div className='products-amount'>4 Products Found</div>
                    </div>
                    <ProductList />
                </div>
            </div>
        </main>
    );
}

export default CategoryPage;
