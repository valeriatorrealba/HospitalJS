import React from 'react';

import { useState, useEffect } from 'react'
import PatientList from './PatientList'
import PatientForm from './PatientForm'
import { getPatients } from '../services/hospitalApi'

const PatientManager = () => {
    const [patients, setPatients] = useState([])
    const [selectedPatient, setSelectedPatient] = useState(null)

    useEffect(() => {
        fetchPatients()
    }, [])

    const fetchPatients = async () => {
        const data = await getPatients()
        setPatients(data)
    }

    const handlePatientSaved = () => {
        fetchPatients()
        setSelectedPatient(null)
    }

    return (
        <div>
            <h1>Gestión de Pacientes</h1>
            <PatientForm existingPatient={selectedPatient} onPatientSaved={handlePatientSaved} />
            <PatientList patients={patients} setSelectedPatient={setSelectedPatient} />
        </div>
    )
}

export default PatientManager
