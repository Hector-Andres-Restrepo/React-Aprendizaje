import React from "react";
import '../hojas-de-estilos/BotonClear.css';

const BotonClear = (props) =>(
    <div className='boton-clear' onClick={props.manejarClear}>
        Limpiar
        {props.Children}
    </div>
);

export default BotonClear;