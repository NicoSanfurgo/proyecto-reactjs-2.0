import { useParams } from "react-router-dom";

const Detalle = () =>{
    const {idproducto, nombre, image} = useParams();

    return(
        <div>
            <h1>Detalle del producto {nombre} de id "{idproducto}" </h1>
            <p> <img src="" width={400} height={400} border={2}></img></p>
            <h3>Detalles del producto</h3>
            <p> *informacion* </p>
        </div>
    )
}


export default Detalle;