
import { createStore } from "redux";
import { reduxReducer } from "./reduxAction/reduxReducer";

const store = createStore(reduxReducer);

export default store;
