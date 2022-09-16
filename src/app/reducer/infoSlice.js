import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
    name: 'getInfo',
    initialState: {},
    reducers: {
        GET_INFO(state, action) {
            return action.payload
        }
    }
})

export const { actions } = infoSlice
export const { GET_INFO } = actions