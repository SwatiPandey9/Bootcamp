import { combineReducers} from "redux";

import HomeScreenReducer from "./HomeScreenReducer";
import DummyReducer from "./DummyReducer";

const combinedReducers = combineReducers({
    HomeScreenData: HomeScreenReducer,
    Dummy: DummyReducer
})

export default combinedReducers;
