import React from "react";

function Pantalla({children}){
    return(
        <div>
            <input type="text" className="form-control" readOnly value={children} />
        </div>
    )
}

export default Pantalla