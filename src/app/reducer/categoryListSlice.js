import { createSlice } from "@reduxjs/toolkit";

export const categoryListSlice = createSlice({
    name: 'categoryList',
    initialState: JSON.parse(localStorage.getItem('categoryList')) || [],
    reducers: {
        addCategoryList(state, action) {
            state.push(action.payload)
            return state
        },
        removeCategoryList(state, action) {
            state.splice(action.payload, 1)
            return state
        },
        incrementCountCategoryList(state, action) {
            state[action.payload].count = state[action.payload].count + 1
            state[action.payload].total = state[action.payload].count * state[action.payload].price
            localStorage.setItem('categoryList', JSON.stringify(state))
            return state
        },
        decrementCountCategoryList(state, action) {
            if (state[action.payload].count > 1) {
                state[action.payload].count = state[action.payload].count - 1
                state[action.payload].total = state[action.payload].count * state[action.payload].price
                localStorage.setItem('categoryList', JSON.stringify(state))
            }
            else {
                state.splice(action.payload, 1)
                localStorage.setItem('categoryList', JSON.stringify(state))
            }
            return state
        },
        clearCategoryList(state, action){
            localStorage.setItem('categoryList', '[]')
            return []
        }
    }
})

export const { actions, reducer } = categoryListSlice
export const { addCategoryList, removeCategoryList, incrementCountCategoryList, decrementCountCategoryList, clearCategoryList } = actions