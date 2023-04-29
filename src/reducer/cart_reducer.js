import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM_AMOUNT,
    CLEAR_CART,
    COUNT_CART_TOTALS,
} from '../action/action';

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { id, color, quantity, product } = action.payload;
            const tempItem = state.cart.find(item => item.id === id + color);
            if (tempItem) {
                const tempCart = state.cart.map(item => {
                    if (item.id === id + color) {
                        let newAmount = item.quantity + quantity;
                        if (newAmount > item.stock) {
                            newAmount = item.stock;
                        } 
                        return { ...item, quantity: newAmount };
                    } else {
                        return item;
                    }
                });
                return { ...state, cart: tempCart };
            } else {
                const newItem = {
                    id: id + color,
                    title: product.title,
                    color: color,
                    img: product.img,
                    price: product.price,
                    quantity: quantity,
                    stock: product.stock,
                };
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        newItem,
                    ],
                };
            }
        case REMOVE_CART_ITEM:
            const tempCart = state.cart.filter(item => item.id !== action.payload);
            return {
                ...state,
                cart: tempCart,
            };
        case CLEAR_CART:
            return {
                ...state,
                cart: [],
            };
        case COUNT_CART_TOTALS:
            const { total_amount, total_items } = state.cart.reduce((total, item) => {
                const { price, quantity } = item;
                total.total_amount += (price * quantity);
                total.total_items += quantity;
                return total;
            }, { total_amount: 0, total_items: 0 })
            return {
                ...state,
                total_amount,
                total_items,
            };
        case TOGGLE_CART_ITEM_AMOUNT:
            const temp_cart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    let newAmount = item.quantity + action.payload.value;
                    if (newAmount > item.stock) {
                        newAmount = item.stock;
                    } 
                    if (newAmount < 1) {
                        newAmount = 1;
                    }
                    return { ...item, quantity: newAmount };
                } else { return item };
            });
            return {
                ...state,
                cart: temp_cart,
            };
        default:
            return state;
    }
};

export default reducer;