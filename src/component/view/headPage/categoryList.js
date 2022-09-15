import React from 'react'
import '../../../style/headPage/headPage.css'
import CategoryListItem from './categoryListItem'
import Pay from './pay'

export default function CategoryList({ setTotalCategory, subtotal, setSubtotal, renderCategory, setRenderCategory }) {
    // console.log(renderCategory)
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
                    renderCategory.length === 0 ? '' :
                        <div>
                            {renderCategory.map((elm, index) => {
                                // console.log(elm)
                                return (
                                    <CategoryListItem
                                        key={index}
                                        elm={elm}
                                        setTotalCategory={setTotalCategory}
                                        setSubtotal={setSubtotal}
                                        setRenderCategory={setRenderCategory}
                                    />
                                )
                            })}
                            <Pay subtotal={subtotal} />
                        </div>
                }
            </div>
        </div>
    )
}
