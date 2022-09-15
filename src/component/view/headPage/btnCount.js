import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { decrementCountCategoryList, incrementCountCategoryList } from '../../../app/reducer/categoryListSlice';

export default function BtnCount({ elm, index }) {
    const [del, setDel] = useState(elm.count === 1 ? 'del' : '-')
    const dispatch = useDispatch()
    const handleSub = (elm) => {
        if (elm.count - 1 !== 1) {
            setDel('-')
        }
        else setDel('del')
        const action = decrementCountCategoryList(index)
        dispatch(action)
    }
    const handleSum = (index) => {
        setDel('-')
        const action = incrementCountCategoryList(index)
        dispatch(action)
    }
    return (
        <div className='category-item-btn d-flex rounded-pill border'>
            <div className='category-item-btn-action'>
                <button onClick={() => handleSub(elm)} className='category-item-btn-action1 rounded-pill border-0'>
                    {del}
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
