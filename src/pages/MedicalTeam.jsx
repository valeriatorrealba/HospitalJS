import React from 'react'
import DoctorCard from '../components/DoctorCard'
import useDoctors from '../hooks/useDoctors'

function MedicalTeam() {
    const { doctors, loading, error, loadDoctors } = useDoctors()

    return (
        <div className="container mt-4"> 
            <h2>Equipo Médico</h2>
            {loading && <p className="text-info">Cargando doctores...</p>}

            {error && (
                <div className="alert alert-danger" role="alert">
                    <p>Error: {error}</p>
                    <button onClick={loadDoctors} className="btn btn-warning">Reintentar</button>
                </div>
            )}

            <button onClick={loadDoctors} disabled={loading} className="btn btn-primary mb-3">
                {loading ? 'Cargando...' : 'Recargar Doctores'}
            </button>

            <div className="doctor-list mt-4">
                {doctors.length > 0 ? (
                    doctors.map((doctor) => (
                        <DoctorCard key={doctor.id} name={doctor.name} specialty={doctor.specialty || "Especialidad Genérica"} years={doctor.years || 5} />
                    ))
                ) : (
                    !loading && !error && (
                        <p className="text-muted">No se encontraron doctores disponibles.</p>
                    )
                )}
            </div>            
        </div>
    )
}

export default MedicalTeam
