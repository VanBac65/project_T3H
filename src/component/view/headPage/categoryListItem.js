import React, {  } from 'react'
import BtnCount from './btnCount';

export default function CategoryListItem({ index, elm }) {
    return (
        <div className='category-item'>
            <div className='category-item-img'>
                <img src={elm.img} alt='' />
            </div>
            <div>
                <div className='category-item-name'><h3>{elm.name}</h3></div>
                <div className='category-item-price'>{`${Number(elm.price).toLocaleString()} VND`}</div>
                <BtnCount elm={elm} index={index} />
            </div>
        </div>
    )
}
