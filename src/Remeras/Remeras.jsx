import {Link} from 'react-router-dom'
import remera1 from '../Img/Remeras/DarkSouls1.jpg'
import remera2 from '../Img/Remeras/Doom1.jpg'
import remera3 from '../Img/Remeras/gow1.webp'

const Remeras = () =>{
    const remeras = [
        {
            id:'1',
            nombre:'Remera Diseño Dark Souls',
            image:remera1,
            informacion:'Talle: S. Diseño de la tela: Liso'
        },
        {
            id:'2',
            nombre:'Remera Diseño DOOM',
            image: remera2,
            informacion: 'Talle: L. Diseño de la tela: Liso'
        },
        {
            id:'3',
            nombre:'Remera Diseño GoW',
            image: remera3,
            informacion: 'Talle: S. Diseño de la tela: Liso'
        }
    ]
        return(
        <div>
        <h1>Estas son algunas de nuestras Remeras</h1>
        {
            remeras.map((producto)=>{
                return <div className='col-md-4' key={producto.id}>
                    <p> <img src={producto.image} width={400} height={400} border={2} alt="remera"></img> {producto.nombre}</p>
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

export default Remeras;