import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCategoryList } from '../../../app/reducer/categoryListSlice'

export default function BtnPay() {
    const token = useSelector(state => state.token)
    const dispatch = useDispatch()
    const pay = () => {
        if (token.length > 0) {
            alert('Thanh toán thành công!!')
            const action = clearCategoryList()
            dispatch(action)
        }
        else alert('Bạn cần đăng nhập!!')
    }
    return (
        <label className='btn-pay bg-success w-75 btn p-2 rounded-pill' htmlFor='nav-cart' onClick={() => pay()}>
            PAY
        </label>
    )
}
