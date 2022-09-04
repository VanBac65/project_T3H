import React from 'react'
import { Link } from 'react-router-dom'
import '../../../style/home/home.css'
import ButtonAddToCard from './buttonAddToCard'

export default function Details({setTotalCategory}) {
  const details = JSON.parse(localStorage.getItem('details'))
  return (
    <div className='detail'>
      <div className='detail__img'>
        <img src={details.imagePath} />
      </div>
      <div className='detail__description'>
        <h3>{details.name}</h3>
        <pre >{details.description}</pre>
        <p className='detail__description__price'>{Number(details.price).toLocaleString()} VND</p>
          <ButtonAddToCard elm={details} setTotalCategory={setTotalCategory} type='details'/>
      </div>
    </div>
  )
}
