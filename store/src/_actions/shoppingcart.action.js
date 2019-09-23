import { shoppingCartConstant} from "../_constants";



export const addToCart = product => {
    return {
        type:shoppingCartConstant.ADD_TO_CART,
        payload : product
    }
};

export const removeFromCart = product => {
    return {
        type: shoppingCartConstant.REMOVE_FROM_CART,
        payload: product
    }
};


// export function loadProductsOnline () {
//     return dispatch => {
//         dispatch(requset());
//         Apiget.then(
//             response => {
//                 dispatch(success(response));
//             },
//             error => {
//                 dispatch(failed(error));
//             }
//         )



 