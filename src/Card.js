import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

function Card({title, imageSource, detalle, compra}) {
    return (
      <div className='card text-center bg-dark'>
        <img src={imageSource} alt=''></img>
        <div className='card-body text text-light'>
          <h4 className='card-title'> {title} </h4>
          <p className='card-text'> {detalle} </p>
          <Link href={compra} className='btn btn-outline-primary rounded-0'>
            Detalle
          </Link>
        </div>
      </div>
    )
  }

  export default Card
