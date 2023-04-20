import React from 'react';
import '../styles/Filter.css';

const Filter = () => {

    return (
        <div className='filter'>
            {/* search start */}
            <form>
                <div className="filterItem">
                    <input 
                        type="text" 
                        name='text' 
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
                {/* categories end */}
                {/* colors start */}
                <div className="filterItem">
                    <h2>Colors</h2>
                    <div className="filter-colors">
                        <input 
                            type="checkbox" 
                            id='all' 
                            name='all' 
                            value='all' 
                        />
                        <label htmlFor='all'>All</label>
                    </div>
                    <div className="filter-colors">
                        <input 
                            type="checkbox" 
                            id='red' 
                            name='red' 
                            value='red' 
                        />
                        <label htmlFor='red'>Red</label>
                    </div>
                    <div className="filter-colors">
                        <input 
                            type="checkbox" 
                            id='blue'
                            name='blue' 
                            value='blue' 
                        />
                        <label htmlFor='blue'>Blue</label>
                    </div>
                </div>
                {/* colors end */}
                {/* price start */}
                <div className="filterItem">
                    <h2>Price</h2>
                    <div className="filter-price">
                        <span>$0</span>
                        {' '}
                        <input
                            type='range'
                            id='price'
                            name='price'
                            min='0'
                            max='9999'
                        />
                        {' '}
                        <span>$9999</span>
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
                            name='new_season' 
                            id='new_season' 
                            value='new_season'
                        />
                        <label htmlFor='new_season'>Only New Season</label>
                    </div>
                </div>
            </form>
            {/* new season end */}
            <button type='button' className='clear-filter-btn'>
                Clear All
            </button>
        </div>
    );
}

export default Filter;
