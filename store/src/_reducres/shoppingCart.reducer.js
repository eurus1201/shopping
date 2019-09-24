import {shoppingCartConstant } from "../_constants";

const initialState = {
    cart :[],
    data :[],
  }

export const shoppingCart = ( state=initialState , action ) => {

    const {type} = action;
    switch (type){
      
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

