import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementCountCategoryList, incrementCountCategoryList } from '../../../app/reducer/categoryListSlice';

export default function BtnCount({ elm, index }) {
    const dispatch = useDispatch()
    const handleSub = (elm) => {
        if (elm.count - 1 > 1) {
        }
        const action = decrementCountCategoryList(index)
        dispatch(action)
    }
    const handleSum = (index) => {
        const action = incrementCountCategoryList(index)
        dispatch(action)
    }
    return (
        <div className='category-item-btn d-flex rounded-pill border'>
            <div className='category-item-btn-action'>
                <button onClick={() => handleSub(elm)} className='category-item-btn-action1 rounded-pill border-0'>
                    {elm.count === 1 ? 'del' : '-'}
                </button>
                <button className='category-item-btn-value rounded-circle btn bg-secondary'>
                    {elm.count}
                </button>
                <button onClick={() => handleSum(index)} className='category-item-btn-action2 rounded-pill border-0 px-3'>
                    +
                </button>
            </div>
        </div>
    )
}
