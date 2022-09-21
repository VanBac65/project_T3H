import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import BtnPay from './btnPay'

export default function Pay() {
    const category = useSelector(state => state.categoryList)
    const total = category?.reduce(((pre, cur) => {
        pre = pre + Number(cur.total)
        return pre
    }), 0) || 0
    return (
        <Fragment>
            <div className='category-pay ms-5 mt-5'>
                <div className='category-pay-subtotal'>
                    <p className='category-pay-title'>Subtotal:</p>
                    <p className='category-pay-subtotal-value'>{Number(total).toLocaleString()} VND</p>
                </div>
                <div className='category-pay-total'>
                    <div className='category-pay-total-left'>
                        <p className='category-pay-title'>Total:</p>
                        <p className='category-pay-title'>(Excluded VAT and fees)</p>
                    </div>
                    <div className='category-pay-total-right'>
                        <p className='category-pay-total-value'>{Number(total).toLocaleString()} VND</p>
                    </div>
                </div>
            </div>
            <div className='pay text-center mb-5'>
                <BtnPay />
            </div>
        </Fragment>
    )
}
