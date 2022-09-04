import { Link } from 'react-router-dom'

export default function ButtonAddToCard({ elm, setTotalCategory, setSubtotal, setRenderCategory, type }) {
    const addToCart = (elm) => {
        if (localStorage.getItem('categoryList') === null) {
            localStorage.setItem('categoryList', JSON.stringify([{
                img: elm.imagePath,
                name: elm.name,
                price: elm.price,
                count: 1,
                total: Number(elm.price)
            }]))
            setSubtotal(JSON.parse(localStorage.getItem('categoryList')) ? JSON.parse(localStorage.getItem('categoryList')).reduce((pre, cur) => {
                pre += cur.total
                return pre
            }, 0) : 0)
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
            setSubtotal(JSON.parse(localStorage.getItem('categoryList')) ? JSON.parse(localStorage.getItem('categoryList')).reduce((pre, cur) => {
                pre += cur.total
                return pre
            }, 0) : 0)
        }
        setRenderCategory(JSON.parse(localStorage.getItem('categoryList')))
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
