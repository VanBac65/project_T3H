import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementCountCategoryList, incrementCountCategoryList } from '../../../app/reducer/categoryListSlice';

export default function CategoryListItem({ index, elm }) {
    const categoryList = useSelector(state => state.categoryList)
    console.log(categoryList)
    const dispatch = useDispatch()
    const handleSub = (elm) => {
        const action = decrementCountCategoryList(index)
        dispatch(action)
    }
    const handleSum = (index) => {
        const action = incrementCountCategoryList(index)
        dispatch(action)
        console.log(categoryList)
    }
    return (
        <div className='category-item'>
            <div className='category-item-img'>
                <img src={elm.img} alt='' />
            </div>
            <div>
                <div className='category-item-name'><h3>{elm.name}</h3></div>
                <div className='category-item-price'>{`${Number(elm.price).toLocaleString()} VND`}</div>
                <div className='category-item-btn d-flex rounded-pill border'>
                    <div className='category-item-btn-action'>
                        <button onClick={() => handleSub(elm)} className='category-item-btn-action1 rounded-pill border-0'>
                            -
                        </button>
                        <button className='category-item-btn-value rounded-circle btn bg-secondary'>
                            {elm.count}
                        </button>
                        <button onClick={() => handleSum(index)} className='category-item-btn-action2 rounded-pill border-0 px-3'>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
