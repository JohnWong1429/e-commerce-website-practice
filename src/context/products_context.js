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

const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;
const url = API_URL + '/products?populate=*';

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchProducts = async (url) => {
        dispatch({ type: GET_PRODUCTS_BEGIN });
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: 'Bearer ' + API_TOKEN,
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
        fetchProducts(url);
    }, []);


    return (
        <ProductsContext.Provider value={{
            products: state.products,
            loading: state.loading,
            error: state.error,
        }}>
            {children}
        </ProductsContext.Provider>
    );
};