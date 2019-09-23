import {productsConstants } from "../_constants/products.constants";

const initialState = {request: false, products: null};

export const products = (state = initialState,action) => {
    
    const {type,products,error} = action;

    switch (type) {
         
        case productsConstants.PRODUCTS_REQUEST:
            
            return {...state, request: true};
        case productsConstants.PRODUCTS_SUCCESS:
            
        console.log(products)
            return {...state, request: false,products};
        case productsConstants.PRODUCTS_FAILED:
            
            return {...state, request: false,error};

        default:
            return state;
    }
}