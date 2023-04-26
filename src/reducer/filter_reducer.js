import { act } from 'react-dom/test-utils';
import {
    LOAD_PRODUCTS,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
} from '../action/action';

const reducer = (state, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            let Price = action.payload?.map(p => p.attributes.price);
            let maxPrice = Math.max(...Price);
            let minPrice = Math.min(...Price)   
            return {
                ...state,
                all_products: [...action.payload],
                filtered_products: [...action.payload],
                filters: { 
                    ...state.filters, 
                    max_price: maxPrice, 
                    min_price: minPrice,
                    price: maxPrice,
                },
            };
        case UPDATE_FILTERS:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.payload.name]: action.payload.value,
                },
            };
        case FILTER_PRODUCTS:
            const { all_products } = state;
            const { text, category, color, department, price, isNew, onSale } = state.filters;

            let tempProducts = [...all_products];
            console.log(state.filters.category);

            if (text) {
                tempProducts = tempProducts.filter(product => {
                    return product?.attributes?.title.toLowerCase().indexOf(text) !== -1;
                });
            }

            if (category !== 'all') {
                tempProducts = tempProducts.filter(product => {
                    return product?.attributes.sub_categories.data[0].attributes.title === category;
                });
            }

            if (color !== 'all') {
                tempProducts = tempProducts.filter(product => {
                    return product?.attributes.colors === color;
                });
            }

            if (department !== 'all') {
                tempProducts = tempProducts.filter(product => {
                    return product?.attributes.categories.data[0].attributes.title.toLowerCase() === department;
                });
            }

            tempProducts = tempProducts.filter(product => {
                return product?.attributes.price <= price;
            })

            if (isNew) {
                tempProducts = tempProducts.filter(product => {
                    return product?.attributes.isNew === true;
                });
            }

            if (onSale) {
                tempProducts = tempProducts.filter(product => {
                    return product?.attributes.onSale === true;
                });
            }

            return {
                ...state,
                filtered_products: tempProducts,
            };
        default:
            return state;
    }
};

export default reducer;