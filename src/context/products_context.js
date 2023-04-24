import { useReducer, createContext, useEffect } from "react";
import reducer from "../reducer/products_reducer";
import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_SUCCESS,
} from '../action/action';
import axios from 'axios';

const initialState = {
    products: [],
    loading: false,
    error: false,
}

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchProducts = async () => {
        dispatch({ type: GET_PRODUCTS_BEGIN });
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL + '/products?populate=*', {
                headers: {
                    Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN,
                },
            });
            const data = response.data;
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
        } catch (error) {
            console.log(error);
            dispatch({ type: GET_PRODUCTS_ERROR });
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <ProductsContext.Provider value={{
            ...state,
        }}>
            {children}
        </ProductsContext.Provider>
    );
};