import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataDay from './dataDay'

export default function RenderData() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    // const [dataDay, setDataDay] = useState([])
    useEffect(() => {
        axios.post(`https://api-qa.muangay-vn.com/api/consumers/menu/data`,
            {
                "menuGUID": "7359bfe8-dbf1-4f4d-8b70-0a10566e51ea",
                "isPreview": false,
                "tableId": null
            }
        )
            .then(rs => {
                console.log(rs.data.data.sections)
                setData(pre => pre = rs.data.data.sections)
                setIsLoading(pre => pre = false)
            })
    }, [])

    return (
        <div>
            <i className="fa-light fa-cart-shopping-fast"></i>
            {isLoading ? <div>Loading...</div> :
                <div className='render-data'>
                    <DataDay data={data} day={0} />
                    <DataDay data={data} day={1} />
                    <DataDay data={data} day={2} />
                    <DataDay data={data} day={3} />
                    <DataDay data={data} day={4} />
                </div>}
        </div>
    )
}
