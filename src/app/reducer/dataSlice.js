import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'data',
    initialState: [],
    reducers: {
        GET_DATA(state, action) {
            return action.payload
        }
    }
})

export const { actions } = dataSlice
export const { GET_DATA } = actions