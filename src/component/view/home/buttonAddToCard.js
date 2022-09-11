import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCategoryList } from '../../../app/reducer/categoryListSlice'

export default function ButtonAddToCard({ elm, type }) {
    // const total = useSelector(state => state.categoryList).length
    const dispatch = useDispatch()
    const addToCart = (elm) => {
        console.log(elm)
        if (JSON.parse(localStorage.getItem('categoryList')) === null) {
            localStorage.setItem('categoryList',JSON.stringify([]))
        }
        const arr = JSON.parse(localStorage.getItem('categoryList')).filter(el => el.name === elm.name)
        if (arr[0]?.name !== elm?.name) {
            if (localStorage.getItem('categoryList') === null) {
                localStorage.setItem('categoryList', JSON.stringify([{
                    img: elm.imagePath,
                    name: elm.name,
                    price: elm.price,
                    count: 1,
                    total: Number(elm.price)
                }]))
                const action = addCategoryList({
                    count: 1,
                    img : elm.imagePath,
                    name : elm.name,
                    price : elm.price,
                    total : Number(elm.price)
                })
                dispatch(action)
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
                const action = addCategoryList({
                    count: 1,
                    img : elm.imagePath,
                    name : elm.name,
                    price : elm.price,
                    total : Number(elm.price)
                })
                dispatch(action)
            }
        }

        // setRenderCategory(JSON.parse(localStorage.getItem('categoryList')))
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
