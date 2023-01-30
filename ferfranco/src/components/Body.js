import React from 'react'
import '../css/ferfranco.css'
import { datosPersonas } from './ArregloDatos'
import { Link } from 'react-router-dom'

const Body = () => {

  return (
    <>
      <table className='mytable'>
        <tr>
          <td className='mytableth'>Nombre</td>
          <td className='mytableth'>Edad</td>
          <td className='mytableth'>Direccion</td>
          <td className='mytableth'></td>
        </tr>

        {
          datosPersonas.map(
            item =>
              <tr>
                <td className='mytabletd'>{item.nombre}</td>
                <td className='mytabletd'>{item.edad}</td>
                <td className='mytabletd'>{item.direccion}</td>
                <td>  <Link to={`/detail/${item.id}`}>Detalle</Link></td>
              </tr>

          )

        }



      </table>
    </>
  )
}

export default Body