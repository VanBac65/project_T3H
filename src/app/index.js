import { configureStore } from "@reduxjs/toolkit";
import { accountSlide } from "./reducer/accountSlice";
import { categoryListSlice } from "./reducer/categoryListSlice";
import { dataSearchSlice } from "./reducer/dataSearchSlice";
import { dataSlice } from "./reducer/dataSlice";
import { infoSlice } from "./reducer/infoSlice";
import { loginSlice } from "./reducer/loginSlice";
import { searchOrHomeSlice } from "./reducer/searchOrHome";
import { setAccLogin } from "./reducer/setAccLogin";
import { tokenSlice } from "./reducer/tokenSlice";

const store = configureStore({
    reducer: {
        categoryList: categoryListSlice.reducer,
        setLog: loginSlice.reducer,
        account: accountSlide.reducer,
        token: tokenSlice.reducer,
        data: dataSlice.reducer,
        info: infoSlice.reducer,
        setAccLog: setAccLogin.reducer,
        dataSearch: dataSearchSlice.reducer,
        searchOrHome: searchOrHomeSlice.reducer,
    }
})
export default store;