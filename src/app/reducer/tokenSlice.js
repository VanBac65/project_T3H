import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: 'token',
    initialState: null,
    reducers: {
        ADD_TOKEN(state, action) {
            return action.payload
        },
        CLEAR_TOKEN(state, action) {
            return null
        }
    }
})

export const { actions } = tokenSlice
export const { ADD_TOKEN, CLEAR_TOKEN } = actions