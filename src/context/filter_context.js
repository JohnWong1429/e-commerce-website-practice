import { createContext, useEffect, useReducer } from "react";
import reducer from '../reducer/filter_reducer';
import useFetch from "../hooks/useFetch";
import {
    LOAD_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
    UPDATE_SORT,
    SORT_PRODUCTS,
} from '../action/action';

const initialState = {
    filtered_products: [],
    all_products: [],
    sort: 'price-lowest',
    filters: {
        text: '',
        category: 'all',
        color: 'all',
        department: 'all',
        min_price: 0,
        max_price: 0,
        price: 0,
        isNew: false,
        onSale: false,
    },
};

export const FilterContext = createContext(initialState);

export const FilterProvider = ({ children }) => {
    const { data: products } = useFetch(
        '/products?populate=*'
    );
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products});
    }, [products]);

    useEffect(() => {
        dispatch({ type: FILTER_PRODUCTS });
        dispatch({ type: SORT_PRODUCTS });
    }, [products, state.sort, state.filters]);

    const updateFilters = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        if (name === 'category') {
            if (event.target.checked) {
                value = state.filters.category.concat(' ', event.target.value);
            } else {
                value = state.filters.category.replace(event.target.value, '').trim();
            }
        }

        if (name === 'color') {
            if (event.target.checked) {
                value = state.filters.color.concat(' ', event.target.value);
            } else {
                value = state.filters.color.replace(event.target.value, '').trim();
            }
        }

        if (name === 'price') {
            value = Number(value);
        }

        if (name === 'isNew') {
            value = event.target.checked;
        }

        if (name === 'onSale') {
            value = event.target.checked;
        }
        
        dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
    };

    return (
        <FilterContext.Provider value={{
            ...state,
            updateFilters,
        }}>
            {children}
        </FilterContext.Provider>
    );
};