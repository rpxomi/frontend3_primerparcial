import React, { useState } from 'react'

const Formulario = () => {

    // HOOKS
    const [error1, setError1] = useState('')
    const [nombre, setNombre] = useState('')
    const [color, setColor] = useState('')
    const [activar, setActivar] = useState( false )

    // # # # # # # # # # # # # # # #
    
    // VALIDACIONES

    // ---primer input
    // la longitud mínima del texto ingresado 
    // deberá ser de 3 caracteres y no deberá 
    // contener espacios en blanco al comienzo


    // ---segundo input
    // validar que contenga al menos 6 caracteres


    // ---error
    // Por favor chequea que la información sea correcta


    // # # # # # # # # # # # # # # #

    // HANDLERS
    const MensajeError = ({mensaje}) => {
        return (
            <p style={{color: 'red'}}>
                {mensaje}
            </p>)
    }


    const manejarNombre = e => {
        setNombre( e.target.value )
    }


    const manejarColor = e => {
        setColor( e.target.value )
    }


    const MostrarTarjeta = ({activar, nombre, color}) => {
        return (
            <div style={{ display: activar ? 'block' : 'none' }}>
                Hola {nombre}. Tu color favorito es {color}.
            </div>
        )
    }


    const enviarFormulario = e => {
        e.preventDefault()

        const nombreValido = nombre.trim()
        if( nombreValido.length > 3 )
        {
            setActivar( true )
            setError1( '' ) 
        }
        else
        {
            setActivar( false )
            setError1( 'Error en el largo de string' )  
            return
        }
    }


    // # # # # # # # # # # # # # # #

    return (
        <div>
            <form onSubmit={enviarFormulario}>

                <input 
                    type="text" 
                    value={nombre}
                    onChange={manejarNombre}
                    placeholder='Ingresa tu nombre'
                />

                <input
                    type="text"
                    value={color}
                    onChange={manejarColor}
                    placeholder='Ingresa tu color favorito'
                />


                {/* error1 &&, solo cuando "error1" NO este vacio */}
                {error1 && <MensajeError mensaje={error1} />}


                <button type='submit'>Enviar</button>
            </form>


            <MostrarTarjeta activar={activar} nombre={nombre} color={color}/>
        </div>
    )
}

export default Formulario