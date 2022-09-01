import React from 'react'
import {Link} from 'react-router-dom'

export default function ButtonAddToCard() {
    const addToCart = () => {

    }
    return (
        <div>
            <Link to='/Login'><button className='btn border bg-success rounded-pill' onClick={() => addToCart()}>Add to card</button></Link>
        </div>
    )
}
