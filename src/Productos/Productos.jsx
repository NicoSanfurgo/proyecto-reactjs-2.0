import {Link} from 'react-router-dom'


const Productos = () =>{
    return(
        <div>
        <h1>Estos son algunos de nuestros productos</h1>
        <Link to='/detalleproducto/3'><p>Producto en venta</p></Link>
        </div>
    )
}

export default Productos;