import { useParams } from "react-router-dom";


const Detalle = () =>{
    const {idproducto, nombre} = useParams();
    return(
        <div>
            <h1>Detalle del producto {nombre} con id {idproducto} </h1>
            <img src="" width={400} height={400} border={2}></img>
            <h3>Detalles del producto</h3>
            <p> *informacion* </p>
        </div>
    )
}


export default Detalle;