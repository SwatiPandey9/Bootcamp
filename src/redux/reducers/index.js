import { combineReducers} from "redux"
import CounterReducer from './CounterReducer'
import ProductDetailsReducer from "./ProductDetailsReducer"

const combinedReducers = combineReducers(
    {
       counterValue : CounterReducer,
        productDetail : ProductDetailsReducer
    }
)
export default combinedReducers;