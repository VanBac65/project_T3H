import { createSlice } from "@reduxjs/toolkit";
const init = [{
    user: '0364776215',
    password: 'Test@1234'
}]
if(localStorage.getItem('arrAcc')){
    init.push(JSON.parse(localStorage.getItem('arrAcc')))
}
export const accountSlide = createSlice({
    name: 'acc',
    initialState: init,
    reducers: {
        ADD_ACC(state, action) {
            state.push(action.payload)
        }
        // SET_PASS_ACC(state, action) {
        //     return { ...state, password: action.payload }
        // },
        // CLEAR_ACC(state, action) {
        //     return {}
        // }
    }
})

export const { actions } = accountSlide
export const { ADD_ACC } = actions