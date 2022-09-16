import React from 'react'
import { Link } from 'react-router-dom'
import ButtonAddToCart from './buttonAddToCart'
import { setDate } from './setDate'

export default function DataDay({ data, details }) {
    const date = setDate(data?.name)
    return (
        <div className='container render-day' id={`${date}`}>
            <div className='fs-4 fw-bold mt-3'>{data.name}</div>
            <div className='row d-flex'>
                {
                    data.products.data.map((elm, index) => {
                        return (
                            <div key={elm?.id} className='col-md-4 text-center mt-5'>
                                <Link to='/details'>
                                    <div className='col-md-6 box-img m-auto'>
                                        <img
                                            className='img-data w-100 rounded'
                                            src={`${elm.imagePath}`}
                                            alt=''
                                            onClick={() => details(elm)}
                                        />
                                    </div>
                                </Link>
                                <p className='render-day-name fs-6 mt-3 mb-0'>{elm?.name}</p>
                                <p className='fs-6 mt-0'>{`${(Number(elm?.price)).toLocaleString()} ${elm?.currency}`}</p>
                                <ButtonAddToCart elm={elm} index={index} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
