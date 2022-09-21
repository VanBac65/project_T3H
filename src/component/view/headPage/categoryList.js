import React from 'react'
import { useSelector } from 'react-redux'
import '../../../style/headPage/headPage.css'
import CategoryListItem from './categoryListItem'
import Pay from './pay'

export default function CategoryList() {
    const categoryList = useSelector(state => state.categoryList)
    return (
        <div className='category'>
            <div className='category-head'>
                <div className='category-head-title'>
                    <h2 className='text-center'>Cart</h2>
                </div>
                <div className='category-head-close'>
                    <label htmlFor='nav-cart'>x</label>
                </div>
            </div>
            <div className='category-added'>
                {
                    categoryList?.length === 0 ? <div className='text-center mt-5' style={{ fontSize: '30px', marginRight: '120px' }}>Giỏ hàng trống</div> :
                        <div>
                            {categoryList.map((elm, index) => {
                                return (
                                    <CategoryListItem
                                        key={index}
                                        index={index}
                                        elm={elm}
                                    />
                                )
                            })}
                            <Pay />
                        </div>
                }
            </div>
        </div>
    )
}
