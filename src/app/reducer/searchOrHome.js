import { createSlice } from "@reduxjs/toolkit";

export const searchOrHomeSlice = createSlice({
    name: 'searchOrHome',
    initialState: 'home',
    reducers: {
        SET_SEARCH_OR_HOME(state, action) {
            return action.payload
        }
    }
})

export const { actions } = searchOrHomeSlice
export const { SET_SEARCH_OR_HOME } = actions