import React, { useState, useEffect } from 'react'
import DoctorCard from '../components/DoctorCard'
import { fetchDoctors } from '../services/api'

function MedicalTeam() {
    const [doctors, setDoctors] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const loadDoctors = async () => {
        setLoading(true) 
        setError(null) 
        try {
            const data = await fetchDoctors() 
            setDoctors(data) 
        } catch (err) {
            setError(err.message) 
        } finally {
            setLoading(false) 
        }
    }

    useEffect(() => {
        loadDoctors() 
    }, [])

    return (
        <div>
            <h2>Equipo Médico</h2>
            {loading && <p>Cargando doctores...</p>}
            {error && (
                <div>
                    <p>Error: {error}</p>
                    <button onClick={loadDoctors}>Reintentar</button>
                </div>
            )}
            <button onClick={loadDoctors} disabled={loading} className="btn btn-primary">
                Recargar Doctores
            </button>
            <div className="doctor-list">
                {doctors.map((doctor) => (
                    <DoctorCard key={doctor.id} name={doctor.name} specialty="Especialidad Genérica" years={5} />
                ))}
            </div>
        </div>
    )
}

export default MedicalTeam
