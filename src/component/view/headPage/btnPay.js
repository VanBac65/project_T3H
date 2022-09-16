import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCategoryList } from '../../../app/reducer/categoryListSlice'

export default function BtnPay() {
    const login = localStorage.getItem('status')
    const dispatch = useDispatch()
    const pay = () => {
        if (login) {
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
