import { productsConstants } from "../_constants";
import { Apiget } from "../_service";

// export const products = {
//    getproducts
// }


export function getproducts () {
    return dispatch => {
        dispatch(request());
        Apiget.then(
            response => {
                dispatch(success(response));
               
            },
            error =>{
                dispatch(failed(error));
            }
        )
    }


    function request() { return { type: productsConstants.PRODUCTS_REQUEST }; }
    function success(products) { return { type: productsConstants.PRODUCTS_SUCCESS,products }; }
    function failed(error) { return { type: productsConstants.PRODUCTS_FAILED,error }; }
}

// function register () {
//     return {type: 'increment'};
// }