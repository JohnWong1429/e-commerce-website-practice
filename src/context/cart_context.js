import { useReducer, createContext, useEffect } from "react";
import reducer from "../reducer/cart_reducer";
import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM_AMOUNT,
    CLEAR_CART,
    COUNT_CART_TOTALS,
} from '../action/action';


const getLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart);
    } else {
        return [];
    }
};

// cart: id, title, color, img, price, quantity

const initialState = {
    cart: getLocalStorage(),
    discount: 20,
    total_amount: 0,
    total_items: 0,
    shipping_fee: 20,
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, quantity, product) => {
        dispatch({ type: ADD_TO_CART, payload: { id, color, quantity, product } });
    };

    const toggleAmount = (id, value) => {
        dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
    };

    const removeItem = (id) => {
        dispatch({ type: REMOVE_CART_ITEM, payload: id });
    };

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    useEffect(() => {
        dispatch({ type: COUNT_CART_TOTALS });
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]);


    return (
        <CartContext.Provider value={{
            ...state,
            addToCart,
            toggleAmount,
            removeItem,
            clearCart,
        }}>
            {children}
        </CartContext.Provider>
    );
}