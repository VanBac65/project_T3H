import React, { useState } from 'react'

export default function CategoryListItem({ elm, setTotalCategory, setSubtotal, setRenderCategory }) {
    // console.log(elm)
    const item = elm
    // console.log(item.count)
    const saveCount = () => {
        let setCounts = JSON.parse(localStorage.getItem('categoryList'))
        setCounts.forEach(el => {
            if (el.name === elm.name) {
                el.count = item.count
                el.total = Number(el.price) * item.count
            }
        });
        const newArr = setCounts.filter((el) => el.count !== 0)
        console.log(newArr)
        localStorage.setItem('categoryList', JSON.stringify(newArr))
        const setToltal = JSON.parse(localStorage.getItem('categoryList')) ? JSON.parse(localStorage.getItem('categoryList')).reduce((pre, cur) => {
            pre += cur.total
            return pre
        }, 0) : 0
        setSubtotal(setToltal)
    }
    const [count, setCount] = useState(() => {
        console.log(elm.count)
        return elm.count
    })
    const handleSub = (elm) => {
        setCount(()=> {
            // if(elm.count<=1){
            //     setDel('Del')
            // }
            // else setDel('-')
            return elm.count
        })
        setCount(pre => {
            if (pre - 1 === 1) {
                item.count = pre - 1
                saveCount()     
                setRenderCategory(()=>{
                    console.log(elm.count)
                    return JSON.parse(localStorage.getItem('categoryList'))
                })
                return pre - 1
            }
            else if (pre === 1) {
                item.count = pre - 1
                saveCount()
                setRenderCategory(()=>{
                    return JSON.parse(localStorage.getItem('categoryList'))
                })
                setTotalCategory(JSON.parse(localStorage.getItem('categoryList')) ? JSON.parse(localStorage.getItem('categoryList')).length : 0)
                return pre
            }
            else {
                item.count = pre - 1
                saveCount()
                // setDel('-')
                setRenderCategory(()=>{
                    return JSON.parse(localStorage.getItem('categoryList'))
                })
                return pre - 1
            }
        })
    }
    // const handleSub = () => {
    //     setCount((pre) => {
    //         if(pre-1===1){
    //             setDel('Del')
    //             return pre-1
    //         }
    //         else if(pre===1){
    //             console.log('del')
    //             return 0
    //         }
    //         else {
    //             return pre-1
    //         }
    //     })
    // }
    const handleSum = () => {
        setCount(() => elm.count)
        setCount(pre => {
            item.count = pre + 1
            // console.log(pre + 1)
            saveCount()
            setRenderCategory(() => {
                console.log(elm.count)
                // console.log('setRenderCategory',JSON.parse(localStorage.getItem('categoryList')))
                return JSON.parse(localStorage.getItem('categoryList'))
            })
            return pre + 1
        })
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
                        <button onClick={() => handleSum()} className='category-item-btn-action2 rounded-pill border-0 px-3'>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
