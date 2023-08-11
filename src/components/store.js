import taskReducer from "./taskReducer";
import { createStore } from "redux";

const store = createStore(taskReducer);

export default store;
