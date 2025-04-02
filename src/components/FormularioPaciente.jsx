import React from 'react';
import { useState } from 'react'

const FormularioPaciente = () => {

    const [paciente, setPaciente] = useState({
        nombre: '',
        edad: '',
        enfermedad: '',
    })

    const manejarCambio = (e) => {
        const { name, value } = e.target
        setPaciente({ ...paciente,
            [name]: value,
        })
    }

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log('Paciente enviado:', paciente)
    }

    return (
    <form onSubmit={manejarEnvio}>
        <label>
            Nombre:
            <input type="text" name="nombre" value={paciente.nombre} onChange={manejarCambio} />
        </label>
        <br />
        <label>
            Edad:
            <input type="number" name="edad" value={paciente.edad} onChange={manejarCambio} />
        </label>
        <br />
        <label>
            Enfermedad:
            <input type="text" name="enfermedad" value={paciente.enfermedad} onChange={manejarCambio} />
        </label>
        <br />
        <button type="submit">Enviar</button>
        </form>
    )
}

export default FormularioPaciente
