import React, { useContext } from 'react';
import Card from './Card';
import '../styles/ProductList.css';
import { FilterContext } from '../context/filter_context';


const ProductList = () => {
    const { filtered_products } = useContext(FilterContext);

    return (
        <div className='productList'>
            {filtered_products?.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    );
}

export default ProductList;
