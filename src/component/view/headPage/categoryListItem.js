import React, { useState } from 'react'

export default function CategoryListItem({ elm, setTotalCategory }) {
    const saveCount = () => {
        let newCount = JSON.parse(localStorage.getItem('categoryList'))
        newCount.forEach(el => {
            if (el.name === elm.name) {
                el.count = item.count
                el.total = Number(el.price) * item.count
            }
        });
        localStorage.setItem('categoryList', JSON.stringify(newCount))
    }
    const [count, setCount] = useState(elm.count)
    const [del, setDel] = useState(count === 1 ? 'Del' : '-')
    const item = elm
    const handleSub = (elm) => {
        if (count <= 2) {
            setDel('Del')
            saveCount()
            if (count >= 1) {
                setCount(pre => {
                    item.count = pre - 1
                    saveCount()
                    return --pre
                })
            }
        }
        else {
            setCount(pre => {
                item.count = pre - 1
                saveCount()
                return --pre
            })
        }
        if (count === 1) {
            if (JSON.parse(localStorage.getItem('categoryList')) != []) {
                console.log(elm.name)
                console.log(JSON.parse(localStorage.getItem('categoryList')))
                const newArrCategoryList = JSON.parse(localStorage.getItem('categoryList')).filter(el => {
                    return el.name != elm.name
                })
                setTotalCategory(newArrCategoryList.length)
                localStorage.setItem('categoryList', JSON.stringify(newArrCategoryList))
            }
        }
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
                <img src={elm.img} />
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
