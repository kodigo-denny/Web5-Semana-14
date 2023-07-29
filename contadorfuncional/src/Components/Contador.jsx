import React, {useEffect, useState} from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";

function Contador(){

    const[valor, setValor] = useState(0)
    const[otroValor, setOtroValor] = useState(0)

    // DidUpdate
    useEffect(() => {
        console.log("use Effect, carga todo el tiempo")
    })

    // DidMount
    useEffect(() => {
        console.log("Use effect: Solo carga una vez")
    }, [])

    useEffect(() => {
        console.log("Use effect: valor")
    }, [valor])

    useEffect(() => {
        console.log("Use effect: otro valor")
    }, [otroValor])

    function cambiar(num){
        setValor( num===0 ? 0 : valor+num )

        if(num===0)
            setOtroValor(num+1)
    }

    return(
        <div>
            <Pantalla>{valor}</Pantalla>
            <div className="row">
                <Boton color="btn-danger" evento={() => cambiar(-1)}>-</Boton>
                <Boton evento={() => cambiar(0)}>Reset</Boton>
                <Boton color="btn-primary" evento={() => cambiar(+1)}>+</Boton>
            </div>
        </div>
    )
}

export default Contador