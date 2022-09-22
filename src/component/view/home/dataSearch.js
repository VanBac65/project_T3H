import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../../style/home/home.css'
import ButtonAddToCard from './buttonAddToCart'

export default function DataSearch({ details }) {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    const dataSearch = useSelector(state => state.dataSearch)
    const dataFull = useSelector(state => state.data.sections)
    return (
        <div style={{ minHeight: '305px', height: '100%' }}>
            {
                dataSearch.length === 0 ?
                    <div className='fs-3' style={{ marginTop: '100px' }}>
                        No Results found
                    </div> :
                    <div className='container ' style={{ marginTop: '100px' }}>
                        <div className='fs-3 border-bottom'>
                            {dataSearch.length} Results found
                        </div>
                        <div className='row d-flex'>
                            {
                                dataSearch.map((elm, index) => {
                                    const arrSections = dataFull.filter(elFrull => elFrull.id === elm.sectionId)
                                    const elmSearch = arrSections[0].products.data.filter(el => el.id === elm.id)
                                    return (
                                        <div key={elmSearch[0]?.id} className='col-md-4 text-center mt-5'>
                                            <Link to='/details'>
                                                <div className='col-md-6 box-img m-auto'>
                                                    <img
                                                        className='img-data w-100 rounded'
                                                        src={`${elmSearch[0].imagePath}`}
                                                        alt=''
                                                        onClick={() => details(elmSearch[0])}
                                                    />
                                                </div>
                                            </Link>
                                            <p className='render-day-name fs-6 mt-3 mb-0'>{elmSearch[0]?.name}</p>
                                            <p className='fs-6 mt-0'>{`${(Number(elmSearch[0]?.price)).toLocaleString()} ${elmSearch[0]?.currency}`}</p>
                                            <div className='' style={{ width: '100%' }}>
                                                <ButtonAddToCard elm={elmSearch[0]} index={index} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
            }
        </div>
    )
}
