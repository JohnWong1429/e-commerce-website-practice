import React from 'react';
import '../styles/Filter.css';

const Filter = () => {

    return (
        <div className='filter'>
            <div className="filterItem">
                <input 
                    type="text" 
                    name='text' 
                    placeholder='Search...' 
                    className='search-input' 
                />
            </div>
            <div className="filterItem">
                <h2>Categories</h2>
                <div className="filter-categories">
                    <input 
                        type="checkbox" 
                        id='hat' 
                        name='hat' 
                        value='hat' 
                    />
                    <label htmlFor='hat'>Hat</label>
                </div>
                <div className="filter-categories">
                    <input 
                        type="checkbox" 
                        id='shoes' 
                        name='shoes' 
                        value='shoes' 
                    />
                    <label htmlFor='shoes'>Shoes</label>
                </div>
                <div className="filter-categories">
                    <input 
                        type="checkbox" 
                        id='skirt'
                        name='skirt' 
                        value='skirt' 
                    />
                    <label htmlFor='skirt'>Skirts</label>
                </div>
            </div>
            <div className="filterItem">
                <h2>Colors</h2>
            </div>
            <div className="filterItem">
                <h2>Price</h2>
                <div className="filter-price">
                    <span>0</span>
                    {' '}
                    <input
                        type='range'
                        id='price'
                        name='price'
                        min='0'
                        max='9999'
                    />
                    {' '}
                    <span>9999</span>
                </div>
            </div>
            <div className="filterItem">
                <h2>Sort by</h2>
                <div className="filter-sortBy">
                    <input 
                        type="radio" 
                        id='asc'
                        value='asc'
                        name='price'
                        checked='checked'
                    />
                    <label htmlFor='asc'>Price (Lowest first)</label>
                </div>
                <div className="filter-sortBy">
                    <input 
                        type="radio" 
                        id='desc'
                        value='desc'
                        name='price'
                    />
                    <label htmlFor='desc'>Price (Highest first)</label>
                </div>
            </div>
            <div className="filterItem">
                <div className="filter-new-season">
                    <input 
                        type='checkbox' 
                        name='new_season' 
                        id='new_season' 
                        value='new_season'
                    />
                    <label htmlFor='new_season'>Only New Season</label>
                </div>
            </div>
        </div>
    );
}

export default Filter;
