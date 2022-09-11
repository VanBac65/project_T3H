import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducer";
import { categoryListSlice } from "./reducer/categoryListSlice";

const store = configureStore({
    reducer : {
        categoryList: categoryListSlice.reducer,
    }
})
export default store;