import React, { useState } from 'react'
import './Formulario.css'



const Formulario = () => {

    // HOOKS
    const [error1, setError1] = useState('')
    const [nombre, setNombre] = useState('')
    const [color, setColor] = useState('')
    const [activarTarjeta, setActivarTarjeta] = useState( false )


    // # # # # # # # # # # # # # # #

    // HANDLERS

    // padding: arriba y derecha | abajo y izquierda
    const MensajeError = ({mensaje}) => {
        return (
            <p style={{ color:'red', backgroundColor:'black', width:'fit-content', padding:'0px 6px' }}>
                {mensaje}
            </p>
        )
    }


    // si se escribio y despues se borro, quedando el input vacio...
    const verificarInputVacio = texto => {
        if( texto === '' )
        {
            setActivarTarjeta( false )
            setError1( 'Por favor chequea que la información sea correcta' )
        }
    }


    const manejarNombre = e => {
        setNombre( e.target.value )
        verificarInputVacio( e.target.value )
    }


    const manejarColor = e => {
        setColor( e.target.value )
        verificarInputVacio( e.target.value )
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

        /*
            nombre.trim() === nombre
            es que si el nuevo string sin espacio inicial, generado por trimStart() 
            tiene que ser igual que el nombre que se ingreso en el input del formulario
            si no, quiere decir que se tuvo que modificar con trimStart() porque tenia espacios
        */
        const nombreValido = nombre.trimStart()

        /*         
            ORDEN DE LOS PARENTESIS: 
            desde adentro, hacia afuera

            1
            (nombre.trimStart() === nombre)
            que el string del nombre, NO tenga espacios

            2
            && nombreValido.length > 3)
            que el string del nombre, tenga MAS de 3 caracteres

            3
            && color.length > 6)
            que el string del color, tenga MAS de 6 caracteres 
        */
        if( (((nombre.trimStart() === nombre) && nombreValido.length > 3) && color.length > 6) )
        {
            setActivarTarjeta( true )
            setError1( '' ) 
        }
        else
        {
            setActivarTarjeta( false )
            setError1( 'Por favor chequea que la información sea correcta' )  
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
