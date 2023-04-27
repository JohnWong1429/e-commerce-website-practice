import React, { useContext } from 'react';
import '../styles/Filter.css';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { FilterContext } from '../context/filter_context';

const Filter = () => {
    const {
        filters: {
            text,
            category,
            color,
            department,
            max_price,
            min_price,
            price,
        },
        updateFilters,
        clearFilters,
    } = useContext(FilterContext);

    const catId = parseInt(useParams().id);

    const { data: catData } = useFetch(
        `/sub-categories?[filters][categories][id][$eq]=${catId}`
    );

    const colors= ['red', 'green', 'blue', 'black', 'white'];

    return (
        <div className='filter'>
            {/* search start */}
            <form>
                <div className="filterItem">
                    <input 
                        type="text" 
                        name='text' 
                        value={text}
                        onChange={updateFilters}
                        placeholder='Search...' 
                        className='search-input' 
                    />
                </div>
                {/* search end */}
                {/* categories start */}
                <div className="filterItem">
                    <h2>Categories</h2>
                    <div className="filter-categories">
                        <input 
                            type="button" 
                            value='all'
                            onClick={updateFilters}
                            name='category'
                            className={category === 'all' ? 'btn-category active' : 'btn-category'}
                        />
                    </div>
                    {catData?.map(item => (
                        <div className="filter-categories" key={item.id}>
                            <input 
                                type="button" 
                                value={item.attributes.title} 
                                name='category'
                                onClick={updateFilters}
                                className={category === item.attributes.title ? 'btn-category active' : 'btn-category'}
                            />
                        </div>
                    ))}
                </div>
                {/* categories end */}
                {/* colors start */}
                <div className="filterItem">
                    <h2>Colors</h2>
                    <div className="filter-colors">
                        <input 
                            type="button" 
                            name='color' 
                            value='all' 
                            onClick={updateFilters}
                            className={color === 'all' ? 'btn-color active' : 'btn-color'}
                        />
                    </div>
                    {colors.map((item, index) => (
                    <div className="filter-colors" key={index}>
                        <input 
                            type="button" 
                            id={item} 
                            name='color' 
                            value={item} 
                            onClick={updateFilters}
                            className={color === item ? 'btn-color active' : 'btn-color'}
                        />
                    </div>
                    ))}
                </div>
                {/* colors end */}
                {/* price start */}
                <div className="filterItem">
                    <h2>Price</h2>
                    <div className="filter-price">
                        <input
                            type='range'
                            id='price'
                            name='price'
                            min={min_price}
                            max={max_price}
                            onChange={updateFilters}
                            defaultValue={max_price}
                        />
                        {' '}
                        <span>${price.toFixed(2)}</span>
                    </div>
                </div>
                {/* price end */}
                {/* department start */}
                <div className="filterItem">
                    <div className="filter-department">
                        <h2>Department</h2>
                        <select
                            name='department'
                            className='select-form'
                            value={department}
                            onChange={updateFilters}
                        >
                            <option value='all'>All</option>
                            <option value='men'>Men</option>
                            <option value='women'>Women</option>
                        </select>
                    </div>
                </div>
                {/* department end */}
                {/* sort start */}
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <select
                        name='sort'
                        className='sort-input'
                        id='sort'
                    >
                        <option value='price-lowest'>Price (lowest first)</option>
                        <option value='price-highest'>Price (highest first)</option>
                        <option value='name-a'>Name (A-Z)</option>
                        <option value='name-z'>Name (Z-A)</option>
                    </select>
                </div>
                {/* sort end */}
                {/* new season start */}
                <div className="filterItem">
                    <div className="filter-new-season">
                        <input 
                            type='checkbox' 
                            name='isNew' 
                            id='new_season' 
                            value='new_season'
                            onChange={updateFilters}
                        />
                        <label htmlFor='new_season'>Only New Season</label>
                    </div>
                </div>
                {/* new season end */}
                {/* discount start */}
                <div className="filterItem">
                    <div className="filter-discount">
                        <input 
                            type='checkbox' 
                            name='onSale' 
                            id='discount' 
                            value='discount'
                            onChange={updateFilters}
                        />
                        <label htmlFor='discount'>On Sale</label>
                    </div>
                </div>
            </form>
            {/* discount end */}
            <button type='button' className='clear-filter-btn'>
                Clear All
            </button>
        </div>
    );
}

export default Filter;
