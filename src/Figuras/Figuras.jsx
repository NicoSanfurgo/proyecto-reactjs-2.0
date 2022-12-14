import { Link } from 'react-router-dom'
import figura1 from '../Img/Figuras/Baldur1.jpg'
import figura2 from '../Img/Figuras/CaballeroFaraam1.webp'
import figura3 from '../Img/Figuras/Sekiro1.webp'

const Figuras = () =>{
    const figuras = [
        {
            id:'1',
            nombre:'Figura De Baldur',
            image: figura1
        },
        {
            id:'2',
            nombre:'Figura De Caballero Faraam',
            image: figura2
        },
        {
            id:'3',
            nombre:'Figura De Sekiro',
            image: figura3
        }
    ]
        return(
        <div>
        <h1>Estas son algunas de nuestras Figuras</h1>
        {
            figuras.map((producto)=>{
                return <div className='col-md-4' key={producto.id}>
                    <p> <img src={producto.image} width={400} height={400} border={2} alt="figura"></img> {producto.nombre}</p>
                    <Link to={`/detalleproducto/${producto.id}/${producto.nombre}`} className='btn btn-outline-primary rounded-0'>
                    Detalles
                    </Link>
                </div>
            })
        }
        <h2>Estamos en constante actualizacion para agregar mas diseños pronto.</h2>
        </div>
    )
}

export default Figuras;