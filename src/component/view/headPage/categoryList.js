import React, { useState } from 'react'
import '../../../style/headPage/headPage.css'
import CategoryListItem from './categoryListItem'
import Pay from './pay'

export default function CategoryList({ setTotalCategory, setAccessToken }) {
    const arrList = JSON.parse(localStorage.getItem('categoryList')) || []
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
                    arrList.length === 0 ? '' :
                        <div>
                            {arrList.map((elm, index) => {
                                return (
                                    <CategoryListItem
                                        key={index}
                                        elm={elm}
                                        setTotalCategory={setTotalCategory}
                                        setAccessToken={setAccessToken} />
                                )
                            })}
                            <Pay />
                        </div>
                }
            </div>

        </div>
    )
}
