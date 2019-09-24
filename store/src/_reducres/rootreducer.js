import { combineReducers } from "redux";
import { authentication } from "./authentication.reducer";
import { products } from "./products.reducer";
import { shoppingCart } from "./shoppingCart.reducer";
const rootReducer = combineReducers({
    authentication,
    products,
    shoppingCart
});

export default rootReducer;
