import React from 'react'
import { useDispatch } from 'react-redux';
import { removeItemCategory } from '../../../app/reducer/categoryListSlice';
import BtnCount from './btnCount';

export default function CategoryListItem({ index, elm }) {
    const dispatch = useDispatch()
    const btnRemoveItem = (index) => {
        dispatch(removeItemCategory(index))
    }
    return (
        <div className='category-item justify-items-center'>
            <div className='ms-3' style={{ alignSelf: ' center' }}>
                <button className='btn' onClick={()=> btnRemoveItem(index)}>
                    <i className="fa-solid fa-xmark fs-2"></i>
                </button>
            </div>
            <div className='category-item-img'>
                <img src={elm.img} alt='' />
            </div>
            <div>
                <div className='category-item-name'><h5>{elm.name}</h5></div>
                <div className='category-item-price'>{`${Number(elm.price).toLocaleString()} VND`}</div>
                <BtnCount elm={elm} index={index} />
            </div>
        </div>
    )
}
