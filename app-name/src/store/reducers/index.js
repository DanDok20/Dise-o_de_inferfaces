import { combineReducers } from "redux";
import agentReducer from "./Agent";
import mapReducer from "./Map";

const allReducers = combineReducers({
    agent: agentReducer,
    map: mapReducer
});

export default allReducers;