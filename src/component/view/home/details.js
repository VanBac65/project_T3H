import React from 'react'
import '../../../style/home/home.css'
import ButtonAddToCard from './buttonAddToCard'

export default function Details({ setTotalCategory, setSubtotal, setRenderCategory }) {
  const details = JSON.parse(localStorage.getItem('details'))
  return (
    <div className='detail'>
      <div className='detail__img'>
        <img src={details.imagePath} alt=''/>
      </div>
      <div className='detail__description'>
        <h3>{details.name}</h3>
        <pre >{details.description}</pre>
        <p className='detail__description__price'>{Number(details.price).toLocaleString()} VND</p>
        <ButtonAddToCard elm={details} setTotalCategory={setTotalCategory} setSubtotal={setSubtotal} setRenderCategory={setRenderCategory} type='details' />
      </div>
    </div>
  )
}
