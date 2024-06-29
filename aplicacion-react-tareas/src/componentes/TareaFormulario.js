import React, { useState } from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as  uuidv4 } from 'uuid';

function TareaFormulario (porps){

    const [input, setInput] = useState ('');

    const  manejarCambios = e => {
        setInput(e.target.value);
       
    }

    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        porps.onSubmit(tareaNueva);
    }


    return(

        <form className='tarea-formulario' onSubmit={manejarEnvio}>
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una Tarea'
                name='texto'
                onChange={manejarCambios}
            />
            <button className='tarea-boton'>
                agregar tarea
            </button>
        </form>
    );
}

export default TareaFormulario;