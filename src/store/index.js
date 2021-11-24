import {createStore , combineReducers} from "redux"
import ProductsReducer from "./reducers/ProductsReducers"
import { devToolsEnhancer } from 'redux-devtools-extension';
import CartReducer from "./reducers/CartReducer";
const root = combineReducers({
    ProductsReducer, 
     CartReducer,
})
const store = createStore(root  , devToolsEnhancer());
export default store;