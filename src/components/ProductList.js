import React from 'react';
import Card from './Card';
import '../styles/ProductList.css';
import useFetch from '../hooks/useFetch';

const ProductList = () => {
    const { data, loading, error } = useFetch(
        '/products?populate=*'
    )

    return (
        <div className='productList'>
            {data?.map(item => (
                <Card item={item.attributes} key={item.id} />
            ))}
        </div>
    );
}

export default ProductList;
