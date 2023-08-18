/* 
    VALIDACIONES

    ---primer input
    la longitud mínima del texto ingresado 
    deberá ser de 3 caracteres y no deberá 
    contener espacios en blanco al comienzo [OK]


    ---segundo input
    validar que contenga al menos 6 caracteres [OK]


    ---error
    Por favor chequea que la información sea correcta [OK]
*/

import React, { useState } from 'react'


const Formulario = () => {

    // HOOKS
    const [error1, setError1] = useState('')
    const [nombre, setNombre] = useState('')
    const [color, setColor] = useState('')
    const [activarTarjeta, setActivarTarjeta] = useState( false )


    // # # # # # # # # # # # # # # #

    // HANDLERS
    const MensajeError = ({mensaje}) => {
        return (
            <p style={{ color:'red', backgroundColor:'black', width:'fit-content', padding:'0px 6px' }}>
                {mensaje}
            </p>
        )
    }


    const manejarNombre = e => {
        setNombre( e.target.value )

        // si se escribio y despues se borro, quedando el input vacio...
        if( e.target.value === '' )
        {
            setActivarTarjeta( false )
            setError1( 'Por favor chequea que la información sea correcta' )
        }
    }


    const manejarColor = e => {
        setColor( e.target.value )

        // si se escribio y despues se borro, quedando el input vacio...
        if( e.target.value === '' )
        {
            setActivarTarjeta( false )
            setError1( 'Por favor chequea que la información sea correcta' )
        }
    }


    const MostrarTarjeta = ({activarTarjeta, nombre, color}) => {
        return (
            <p style={{ display: activarTarjeta ? 'block' : 'none' }}>
                Hola <b>{nombre}</b>. Tu color favorito es <b>{color}</b>.
            </p>
        )
    }


    const enviarFormulario = e => {
        e.preventDefault()

        // nombre.trim() === nombre
        // es que si el nuevo string sin espacio inicial, generado por trimStart() 
        // tiene que ser igual que el nombre que se ingreso en el input del formulario
        // si no, quiere decir que se tuvo que modificar con trimStart() porque tenia espacios
        const nombreValido = nombre.trimStart()
        if( (nombreValido.length > 3) && (nombre.trimStart() === nombre) && (color.length > 6) )
        {
            setActivarTarjeta( true )
            setError1( '' ) 
        }
        else
        {
            setActivarTarjeta( false )
            setError1( 'Por favor chequea que la información sea correcta' )  
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

                <button type='submit'>Enviar</button>
            </form>


            <MostrarTarjeta activarTarjeta={activarTarjeta} nombre={nombre} color={color}/>


            {/* 
                si el string esta vacio es FALSE 
                entonces se activa el error
                porque con &&, todo tienen que ser verdadero !!!
            */}
            {error1 && <MensajeError mensaje={error1} />}

        </div>
    )
}

export default Formulario
