import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "../Cards";
import remera1 from '../Img/Remeras/DarkSouls1.jpg'


const Detalle = () =>{
    const {idproducto} = useParams();
    return(
        <div>
            <h1>Detalle del producto {idproducto} </h1>
            <img src={remera1} alt="" />
            <h3>Detalles del producto</h3>
        </div>
    )
}


/* const Detalle = () =>{
    const {id, title} = useParams();
    return(
        <div>
            <h1>Detalle del producto {title} con id {id} </h1>
            <img src={Image} alt="" />
            <h3>Detalle del producto</h3>
        </div>
    )
} */

export default Detalle;