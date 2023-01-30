import React from 'react'

const SliderLocalElement = ({ id, nombre, edad, direccion, sexo }) => {

    const imgSource = (sexo === 'M') ? 'https://i.pinimg.com/564x/65/ef/c5/65efc5e801810d0c98ae56cd17bb425c.jpg' : 'https://i.pinimg.com/originals/d1/ad/13/d1ad13605acd060cbcc4b334e2119883.png'

    console.log(imgSource)

    return (
        <>
         <img  className="d-block w-100" src={imgSource} alt={nombre} />
        </>
    )
}

export default SliderLocalElement