import React from "react";
import Pantalla from "./Pantalla";
import Boton from "./Boton";

class Contador extends React.Component{

    constructor(props){
        super(props)
        this.state = {valor: 0}
        console.log("CONSTRUCTOR")
        console.log(props)
        this.cambiar = this.cambiar.bind(this)
    }

    cambiar(num){
        if(num === 0)
            this.setState({valor: 0})
        else
            this.setState({valor: this.state.valor+num})
    }

    componentDidMount(){
        console.log("ComponentDidMount")
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate: " + this.state.valor)
    }

    componentWillUnmount(){
        console.log("ComponentWillUnmount")
    }


    render(){
        console.log("RENDER")
        return <div  className="mb-3">
            <Pantalla>{this.state.valor}</Pantalla>
            <div className="row">
                <Boton evento={() => this.cambiar(-1) }>-</Boton>
                <Boton evento={() => this.cambiar(0) }>Reset</Boton>
                <Boton evento={() => this.cambiar(+1) }>+</Boton>
            </div>
            <hr></hr>
        </div>
    }
}

export default Contador