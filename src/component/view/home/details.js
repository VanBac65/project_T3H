import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../../../style/home/home.css'
import ButtonAddToCart from './buttonAddToCart'
import DataSearch from './dataSearch'

export default function Details({ details }) {
  const detail = JSON.parse(localStorage.getItem('details'))
  const search = useSelector(state => state.searchOrHome)
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <>
      {
        search === 'search' ?
          <DataSearch details={details} /> :
          <div className='detail'>
            <div className='detail__img'>
              <img src={detail.imagePath} alt='' />
            </div>
            <div className='detail__description'>
              <h3>{detail.name}</h3>
              <pre style={{ fontFamily: 'initial' }}>{detail.description}</pre>
              <p className='detail__description__price'>{Number(detail.price).toLocaleString()} VND</p>
              <div style={{ maxWidth: '120px' }}>
                <ButtonAddToCart elm={detail} type='details' />
              </div>
            </div>
          </div>
      }
    </>
  )
}