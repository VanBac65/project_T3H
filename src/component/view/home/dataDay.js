import React from 'react'
import { Link } from 'react-router-dom'
import ButtonAddToCart from './buttonAddToCart'

export default function DataDay({ data, day, details }) {
    let valueDay
    let titleDay
    if (day === 0) {
        valueDay = 'monday'
        titleDay = 'Thứ 2'
    }
    else if (day === 1) {
        valueDay = 'tuesday'
        titleDay = 'Thứ 3'
    }
    else if (day === 2) {
        valueDay = 'wednesday'
        titleDay = 'Thứ 4'
    }
    else if (day === 3) {
        valueDay = 'thursday'
        titleDay = 'Thứ 5'
    }
    else if (day === 4) {
        valueDay = 'friday'
        titleDay = 'Thứ 6'
    }
    return (
        <div className='container render-day' id={`${valueDay}`}>
            <div className='fs-4 fw-bold mt-3'>{titleDay}</div>
            <div className='row d-flex'>
                {
                    data[day].products.data.map((elm,index) => {
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
                                <ButtonAddToCart elm={elm} index={index}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
