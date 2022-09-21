import { createSlice } from "@reduxjs/toolkit";

export const setAccLogin = createSlice({
    name : 'acc',
    initialState : {
        username : '',
        password : ''    
    },
    reducers : {
        SET_USER_ACC(state, action) {
            return { ...state, username: action.payload }
        },
        SET_PASS_ACC(state, action) {
            return { ...state, password: action.payload }
        },
        CLEAR_ACC(state, action) {
            return {}
        }
    }
})

export const { actions } = setAccLogin
export const { SET_USER_ACC, SET_PASS_ACC, CLEAR_ACC } = actions