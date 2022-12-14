import {Link} from 'react-router-dom'
import remera1 from '../Img/Remeras/DarkSouls1.jpg'
import remera2 from '../Img/Remeras/Doom1.jpg'
import remera3 from '../Img/Remeras/gow1.webp'
import figura1 from '../Img/Figuras/Baldur1.jpg'
import figura2 from '../Img/Figuras/CaballeroFaraam1.webp'
import figura3 from '../Img/Figuras/Sekiro1.webp'

const Productos = () =>{
    const productos = [
        {
            id:'1',
            nombre:'Remera Diseño Dark Souls',
            image: remera1,
            informacion: 'Talle: L. Diseño de la tela: Liso'
        },
        {
            id:'2',
            nombre:'Figura De Baldur',
            image: figura1
        },
        {
            id:'3',
            nombre:'Remera Diseño DOOM',
            image: remera2,
            informacion:'Talle: S. Diseño de la tela: Liso'
        },
        {
            id:'4',
            nombre:'Figura De Caballero Faraam',
            image: figura2
        },
        {
            id:'5',
            nombre:'Remera Diseño GoW',
            image: remera3,
            informacion:'Talle: L. Diseño de la tela: Liso'
        },
        {
            id:'6',
            nombre:'Figura De Sekiro',
            image: figura3
        }
    ]


    return(
        <div className='container d-flex justify-content-center align-items-center'>
            <div className='row'>
        <h1>Estos son algunos de nuestros productos</h1>
        {
            productos.map((producto)=>{
                return <div className='col-md-4' key={producto.id}>
                    <p> <img src={producto.image} width={400} height={400} border={2} alt="producto"></img> {producto.nombre}</p>
                    <Link to={`/detalleproducto/${producto.id}/${producto.nombre}`} className='btn btn-outline-primary rounded-0'>
                    Detalles
                    </Link>
                </div>
            })
        }
        </div>
        </div>
    )

}


export default Productos;