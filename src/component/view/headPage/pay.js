import React, { Fragment, useState } from 'react'

export default function Pay() {
    const newArr = JSON.parse(localStorage.getItem('categoryList'))
    console.log(newArr)
    const [subtotal, setSubtotal] = useState(
        newArr.reduce((pre, cur) => {
            pre += cur.total
            return pre
        }, 0)
    )
    console.log(subtotal)
    return (
        <Fragment>
            <div className='category-pay ms-5 mt-5'>
                <div className='category-pay-subtotal'>
                    <p className='category-pay-title'>Subtotal:</p>
                    <p className='category-pay-subtotal-value'>{Number(subtotal).toLocaleString()} VND</p>
                </div>
                <div className='category-pay-total'>
                    <div className='category-pay-total-left'>
                        <p className='category-pay-title'>Total:</p>
                        <p className='category-pay-title'>(Excluded VAT and fees)</p>
                    </div>
                    <div className='category-pay-total-right'>
                        <p className='category-pay-total-value'>{Number(subtotal).toLocaleString()} VND</p>
                    </div>
                </div>
            </div>
            <div className='pay text-center mb-5'>
                <button className='btn-pay bg-success w-75 btn p-2 rounded-pill'>
                    PAY
                </button>
            </div>
        </Fragment>
    )
}
