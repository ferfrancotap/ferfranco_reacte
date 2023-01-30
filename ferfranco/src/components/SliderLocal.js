import React ,{useState}from 'react'

import Carousel from 'react-bootstrap/Carousel';
import SliderLocalElement from './SliderLocalElement'
import { datosPersonas } from './ArregloDatos'
import { Link } from 'react-router-dom'
import '../css/ferfranco.css'

const SliderLocal = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
{
          datosPersonas.map(
            item =>
            <Carousel.Item>
            <SliderLocalElement id={item.id} nombre={item.nombre} edad={item.edad} direccion={item.direccion} sexo={item.sexo}/>
    
            <Carousel.Caption>
              <p className='textdescription'>{item.nombre}</p>
              <Link to={`/detail/${item.id}`}>Detalle</Link>
            </Carousel.Caption>
          </Carousel.Item>

          )

        }



     
    </Carousel>
  )
}

export default SliderLocal