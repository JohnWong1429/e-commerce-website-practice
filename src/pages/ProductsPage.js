import React from 'react';
import '../styles/ProductsPage.css';
import Categories from '../components/Categories';



const ProductsPage = () => {

    return (
        <div className='product-page' style={{ marginTop: '30px'}}>
            <Categories />
        </div>
    );
}

export default ProductsPage;
