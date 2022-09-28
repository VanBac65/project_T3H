import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'setLog',
    initialState: localStorage.getItem('token') !== null ? 'LOGOUT' : 'LOGIN',
    reducers: {
        SET_LOG(state, action) {
            return action.payload
        }
    }
})

export const { actions } = loginSlice
export const { SET_LOG } = actions