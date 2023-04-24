import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
} from '../action/action';

const reducer = (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            };
        default:
            return state;
    }
}

export default reducer;