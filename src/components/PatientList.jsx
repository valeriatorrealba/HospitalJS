import React from 'react';

import { useEffect, useState } from 'react'
import { getPatients, deletePatient } from '../services/hospitalApi'

const PatientList = () => {
    const [patients, setPatients] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const data = await getPatients()
                setPatients(data)
            } catch {
                setError('Error al cargar la lista de pacientes.')
            }
        }

        fetchPatients()
    }, [])

    const handleDelete = async (id) => {
        try {
            await deletePatient(id)
            setPatients(patients.filter((patient) => patient.id !== id))
        } catch {
        setError('Error al eliminar el paciente.')
        }
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            <h2>Lista de Pacientes</h2>
            {patients.length === 0 ? (
                <p>No hay pacientes registrados.</p>
            ) : (
                <ul>
                    {patients.map((patient) => (
                        <li key={patient.id}>
                            {patient.nombre} - {patient.edad} años
                            <button onClick={() => handleDelete(patient.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default PatientList
