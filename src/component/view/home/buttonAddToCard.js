import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ButtonAddToCard({ elm, setTotalCategory, type }) {
    const [onCategory, setOnCategory] = useState(() => {
        if (JSON.parse(localStorage.getItem('categoryList')) === null) {
            return false
        }
        else {
            const category = JSON.parse(localStorage.getItem('categoryList')).find((el) => elm.name === el.name)
            if (category) {
                return true
            }
            return false
        }
    })
    const addToCart = (elm) => {
        if (localStorage.getItem('categoryList') === null) {
            localStorage.setItem('categoryList', JSON.stringify([{
                img: elm.imagePath,
                name: elm.name,
                price: elm.price,
                count: 1,
                total: Number(elm.price)
            }]))
        }
        else {
            let category = JSON.parse(localStorage.getItem('categoryList'))
            if (JSON.parse(localStorage.getItem('categoryList')).find(el => el.name === elm.name) === undefined)
                category.push({
                    img: elm.imagePath,
                    name: elm.name,
                    price: elm.price,
                    count: 1,
                    total: Number(elm.price)
                })
            localStorage.setItem('categoryList', JSON.stringify(category))
        }
        setTotalCategory(JSON.parse(localStorage.getItem('categoryList')).length)
    }
    let path
    if (type === 'details') {
        path = '/details'
    }
    else path = '/CustomerMenu'
    return (
        <div>
            <Link to={path}>
                <button className='btn border bg-success rounded-pill' onClick={() => addToCart(elm)}>Add to cart</button>
            </Link>
        </div>
    )
}
