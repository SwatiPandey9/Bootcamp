import { createStore } from "redux";
import CounterReducer from "../reducers/CounterReducer";
import combinedReducers from "../reducers";

const store = createStore(combinedReducers)
    
export default store;