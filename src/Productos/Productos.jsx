import {Link} from 'react-router-dom'
const Productos = ()=>{
    const productos = [
        {
            id:'1',
            nombre:'Figura Caballero Faraam'
        },
        {
            id:'2',
            nombre:'Caballero Negro'
        },
        {
            id:'3',
            nombre:'Enfermera'
        }
    ]
    return (
   <div>
    <h1>Productos</h1>
    {
       productos.map((producto)=>{
        return <div> <Link to={`/detalleproducto/${producto.id}/${producto.nombre}`} >{producto.nombre}</Link></div>
       }) 
    }
   </div>
    )
}

export default Productos;