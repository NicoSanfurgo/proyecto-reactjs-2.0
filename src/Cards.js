import React from 'react'
import Card from './Card'
import remera1 from './Img/Remeras/DarkSouls1.jpg'
import remera2 from './Img/Remeras/Doom1.jpg'
import remera3 from './Img/Remeras/gow1.webp'
import figura1 from './Img/Figuras/Baldur1.jpg'
import figura2 from './Img/Figuras/CaballeroFaraam1.webp'
import figura3 from './Img/Figuras/Sekiro1.webp'

const cards = [
    {
        id:1,
        title: 'Remera Dark Souls',
        image: remera1,
        detalle:'Remera con diseño "Dark Souls". Talle: S. Diseño de la tela: Liso',
        compra:''
    },
    {
        id:2,
        title: 'Remera Doom',
        image: remera2,
        detalle:'Remera con diseño "DOOM". Talle: L. Diseño de la tela: Liso',
        compra:''
    },
    {
        id:3,
        title: 'Remera Gow',
        image: remera3,
        detalle:'Remera con diseño "God Of War". Talle: S. Diseño de la tela: Liso',
        compra:''
    },
    {
        id:4,
        title: 'Figura Baldur',
        image: figura1,
        detalle:'',
        compra:''
    },
    {
        id:5,
        title: 'Figura Caballero Faraam',
        image: figura2,
        detalle:'',
        compra:''
    },
    {
        id:6,
        title: 'Figura Sekiro',
        image: figura3,
        detalle:'',
        compra:''
    },
    
]


function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center'>
        <div className='row'>
            {
                cards.map((card) => (
                    <div className='col-md-4' key={card.id}>
                        <Card title={card.title} imageSource={card.image} compra={card.compra} detalle={card.detalle} /> 
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards