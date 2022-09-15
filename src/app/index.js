import { configureStore } from "@reduxjs/toolkit";
import { accountSlide } from "./reducer/accountSlice";
// import rootReducer from "./reducer";
import { categoryListSlice } from "./reducer/categoryListSlice";
import { loginSlice } from "./reducer/loginSlice";

const store = configureStore({
    reducer: {
        categoryList: categoryListSlice.reducer,
        setLog: loginSlice.reducer,
        account : accountSlide.reducer
    }
})
export default store;