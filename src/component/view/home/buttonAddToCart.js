import { useDispatch, useSelector } from 'react-redux'
import { addCategoryList } from '../../../app/reducer/categoryListSlice'
import BtnCount from '../headPage/btnCount'

export default function ButtonAddToCard({ elm }) {
    const categoryList = useSelector(state => state.categoryList)
    const checkAdd = categoryList.filter(el => el.name === elm.name)
    const arrIndex = categoryList.map((el, index) => {
        if (el.name === elm.name) {
            return index
        }
        return undefined
    })

    const newIndex = arrIndex.filter(el => el !== undefined)
    const dispatch = useDispatch()
    const addToCart = (elm) => {
        if (JSON.parse(localStorage.getItem('categoryList')) === null) {
            localStorage.setItem('categoryList', JSON.stringify([]))
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
                    img: elm.imagePath,
                    name: elm.name,
                    price: elm.price,
                    total: Number(elm.price)
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
                    img: elm.imagePath,
                    name: elm.name,
                    price: elm.price,
                    total: Number(elm.price)
                })
                dispatch(action)
            }
        }
    }
    return (
        <div className='text-center' style={{ width: '120px', margin: 'auto' }}>
            {checkAdd.length > 0 ?
                <BtnCount elm={checkAdd[0]} index={newIndex} />
                : <button className='btn bg-success rounded-pill' onClick={() => addToCart(elm)}>
                    Add to Cart
                </button>}
        </div>
    )
}
