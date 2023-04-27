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

            if (text) {
                tempProducts = tempProducts.filter(product => {
                    return product?.attributes?.title.toLowerCase().indexOf(text) !== -1;
                });
            }

            if (!category.includes('all')) {
                tempProducts = tempProducts.filter(product => {
                    return category.includes(product?.attributes.sub_categories.data[0].attributes.title);
                });
            }

            if (!color.includes('all')) {
                tempProducts = tempProducts.filter(product => {
                    return color.includes(product?.attributes.colors);
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
        case CLEAR_FILTERS:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: '',
                    category: 'all',
                    color: 'all',
                    department: 'all',
                    isNew: false,
                    onSale: false,
                    price: state.filters.max_price,
                },
            };
        case SORT_PRODUCTS:
            const { sort, filtered_products } = state;
            let temp_Products = [...filtered_products];

            if (sort === 'price-lowest') {
                temp_Products = temp_Products.sort((a, b) => a.attributes.price - b.attributes.price);
            }
            if (sort === 'price-highest') {
                temp_Products = temp_Products.sort((a, b) => b.attributes.price - a.attributes.price);
            }
            if (sort === 'name-a') {
                temp_Products = temp_Products.sort((a, b) => {
                    return a.attributes.title.localeCompare(b.attributes.title);
                });
            }
            if (sort === 'name-z') {
                temp_Products = temp_Products.sort((a, b) => {
                    return b.attributes.title.localeCompare(a.attributes.title);
                });
            }
            return {
                ...state,
                filtered_products: temp_Products,
            };
        case UPDATE_SORT:
            return {
                ...state,
                sort: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;