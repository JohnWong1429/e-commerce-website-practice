import React, { useContext } from 'react';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';
import '../styles/CategoryPage.css';
import { FilterContext } from '../context/filter_context';


const CategoryPage = () => {
    const { filtered_products } = useContext(FilterContext);
    return (
        <main>
            <div className="category-page">
                <div className='left'>
                    <Filter />
                </div>
                <div className="right">
                    <div className='productList-title'>
                        <div className='products-amount'>{filtered_products.length} Products Found</div>
                    </div>
                    <ProductList />
                </div>
            </div>
        </main>
    );
}

export default CategoryPage;
