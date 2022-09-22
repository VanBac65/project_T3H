import { createSlice } from "@reduxjs/toolkit";

export const dataSearchSlice = createSlice({
    name: 'dataSearch',
    initialState: [],
    reducers: {
        ADD_DATA_SEARCH(state, action) {
            return [...action.payload]
        }
    }
})

export const { actions } = dataSearchSlice
export const { ADD_DATA_SEARCH } = actions