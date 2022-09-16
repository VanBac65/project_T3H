import { createSlice } from "@reduxjs/toolkit";

export const accountSlide = createSlice({
    name: 'acc',
    initialState: {},
    reducers: {
        SET_USER_ACC(state, action) {
            return { ...state, username: action.payload }
        },
        SET_PASS_ACC(state, action) {
            return { ...state, password: action.payload }
        },
        CLEAR_ACC(Sstate, action) {
            return {}
        }
    }
})

export const { actions } = accountSlide
export const { SET_USER_ACC, SET_PASS_ACC, CLEAR_ACC } = actions