import React from 'react'

export default function BtnPay() {
    const login = localStorage.getItem('status')
    console.log(login)
    const pay = () => {
        if(login){
            alert('Thanh toán thành công!!')
        }
        else alert('Bạn cần đăng nhập!!')
    }
    return (
            <label className='btn-pay bg-success w-75 btn p-2 rounded-pill' htmlFor='nav-cart' onClick={()=>pay()}>
                    PAY
            </label>
    )
}
