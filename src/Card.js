import React from 'react'
import './Cards.css'

function Card({title, imageSource, detalle, compra}) {
    return (
      <div className='card text-center bg-dark'>
        <img src={imageSource} alt=''></img>
        <div className='card-body text text-light'>
          <h4 className='card-title'> {title} </h4>

          <p className='card-text'> {detalle} </p>

          <a href={compra} className='btn btn-outline-primary rounded-0'>
            Comprar
          </a>
        </div>
      </div>
    )
  }

  export default Card
