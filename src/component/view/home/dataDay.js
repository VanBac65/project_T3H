import React from 'react'
import ButtonAddToCard from './buttonAddToCard'

export default function DataDay({ data, day }) {
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
                    data[day].products.data.map((elm) => {
                        return <div key={elm?.id} className='col-md-4 text-center mt-5'>
                            <img className='w-50 rounded' src={`${elm.imagePath}`} alt='' />
                            <p className='fs-6 mt-3 mb-0'>{elm?.name}</p>
                            <p className='fs-6 mt-0'>{`${(Number(elm?.price)).toLocaleString()} ${elm?.currency}`}</p>
                            <ButtonAddToCard />
                        </div>
                    })
                }
            </div>
        </div>
    )
}
