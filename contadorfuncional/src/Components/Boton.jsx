import React from "react";


function Boton(props){

    return(
        <div className="col-4">
            <button onClick={props.evento} className={"btn w-100 "+(props.color === undefined? "btn-success": props.color)}>{props.children}</button>
        </div>
    )
}

export default Boton