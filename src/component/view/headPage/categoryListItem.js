import React, { useState } from 'react'

export default function CategoryListItem({ elm, setTotalCategory, setSubtotal, setRenderCategory }) {
    const saveCount = () => {
        let setCount = JSON.parse(localStorage.getItem('categoryList'))
        setCount.forEach(el => {
            if (el.name === elm.name) {
                el.count = item.count
                el.total = Number(el.price) * item.count
            }
        });
        
        const newArr = setCount.filter((el) => el.count !== 0)
        localStorage.setItem('categoryList', JSON.stringify(newArr))
        const setToltal = JSON.parse(localStorage.getItem('categoryList')) ? JSON.parse(localStorage.getItem('categoryList')).reduce((pre, cur) => {
            pre += cur.total
            return pre
        }, 0) : 0
        setSubtotal(setToltal)
    }
    const [count, setCount] = useState(elm.count)
    const [del, setDel] = useState(count === 1 ? 'Del' : '-')
    const item = elm
    const handleSub = (elm) => {
        setCount(pre => {
            if (pre - 1 === 1) {
                item.count = pre - 1
                saveCount()
                setDel('Del')
                return pre - 1
            }
            else if (pre === 1) {
                item.count = pre - 1
                saveCount()
                setRenderCategory(JSON.parse(localStorage.getItem('categoryList')))
                setTotalCategory(JSON.parse(localStorage.getItem('categoryList')) ? JSON.parse(localStorage.getItem('categoryList')).length : 0)
                return pre
            }
            else {
                item.count = pre - 1
                saveCount()
                return pre - 1
            }
        })
    }
    const handleSum = () => {
        setDel('-')
        setCount(pre => {
            item.count = pre + 1
            saveCount()
            return ++pre
        })
    }
    return (
        <div className='category-item'>
            <div className='category-item-img'>
                <img src={elm.img} alt=''/>
            </div>
            <div>
                <div className='category-item-name'><h3>{elm.name}</h3></div>
                <div className='category-item-price'>{`${Number(elm.price).toLocaleString()} VND`}</div>
                <div className='category-item-btn d-flex rounded-pill border'>
                    <div className='category-item-btn-action'>
                        <button onClick={() => handleSub(elm)} className='category-item-btn-action1 rounded-pill border-0'>
                            {del}
                        </button>
                        <button className='category-item-btn-value rounded-circle btn bg-secondary'>
                            {count}
                        </button>
                        <button onClick={() => handleSum()} className='category-item-btn-action2 rounded-pill border-0 px-3'>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
