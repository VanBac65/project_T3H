import React from 'react'
import DataDay from './dataDay'
import { useSelector } from 'react-redux'

export default function RenderData({ details }) {
    const data = useSelector(state => state.data)
    return (
        <div>
            <i className="fa-light fa-cart-shopping-fast"></i>
            {data === [] ? <div>Loading...</div> :
                <div className='render-data'>
                    {
                        data?.sections?.map((elm, index) => {
                            return (
                                <DataDay key={index} data={elm} details={details} />
                            )
                        })
                    }
                </div>}
        </div>
    )
}
