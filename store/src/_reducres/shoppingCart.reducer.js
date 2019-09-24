import {shoppingCartConstant } from "../_constants";
// import { ADD_TO_CART } from "../_actions";

const initialState = {
    cart :[],
    data :[],
  }

export const shoppingCart = ( state=initialState , action ) => {

    const {type} = action;
    switch (type){
        // case shoppingCartConstant.ADD_TO_CART:
        //     return {
        //         ...state,
        //         cart: [...state.cart, action.payload]
        //     };
            case shoppingCartConstant.ADD_TO_CART:
            if (action.payload) {
                return { ...state, cart: [...state.cart, action.payload]};
            }
            return state;

        case shoppingCartConstant.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((product) => action.payload !== product)
            }
        default:
            return state
    }
}


// const shoppingCart = (state, action) => {
//     switch (action.type) {
        
//         case 'ADD_TO_CART':
//             return {
//                 ...state,
//                 cart: state.cart.concat(action.product),
//                 products: state.products.filter(p => p !== action.product)
//             };
//         case 'REMOVE_FROM_CART':
//             return {
//                 ...state,
//                 cart: state.cart.filter(product => product !== action.product),
//                 products: state.products.concat(action.product)
//             }
//         default:
//             return state
//     }
 
// }

// export { shoppingCart };