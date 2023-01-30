import React from 'react';
import { useParams } from 'react-router-dom';
import { datosPersonas } from './ArregloDatos'


const Detail = () => {



    const { id } = useParams()


    const temp = datosPersonas[id - 1]


    
    return (
        <div>

           <label>Nombre:</label> <input type={'text'} value={temp.nombre} readOnly={true}/>
           <label>Edad:</label> <input type={'text'} value={temp.edad} readOnly={true} />
           <label>Direccion:</label> <input type={'text'} value={temp.direccion} readOnly={true} />


        </div>
    )
}

export default Detail