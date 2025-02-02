import DoctorCard from '../components/DoctorCard'
import useDoctors from '../hooks/useDoctors'
import usePatients from '../hooks/usePatients'
import PatientCard from '../components/PatientCard'

function MedicalTeam() {
    const { doctors, loading: loadingDoctors, error: errorDoctors, loadDoctors } = useDoctors()  
    const { patients, loading: loadingPatients, error: errorPatients, loadPatients } = usePatients()

    return (
        <div className="container mt-4"> 
            <h2>Equipo Médico</h2>
            
            {loadingDoctors && <p className="text-info">Cargando doctores...</p>}
            {errorDoctors && (
                <div className="alert alert-danger" role="alert">
                    <p>Error: {errorDoctors}</p>
                    <button onClick={loadDoctors} className="btn btn-warning">Reintentar</button>
                </div>
            )}

            <button onClick={loadDoctors} disabled={loadingDoctors} className="btn btn-primary mb-3">
                {loadingDoctors ? 'Cargando...' : 'Recargar Doctores'}
            </button>

            <div className="doctor-list mt-4">
                {doctors.length > 0 ? (
                    doctors.map((doctor) => (
                        <DoctorCard key={doctor.id} name={doctor.name} specialty={doctor.specialty || "Especialidad Genérica"} years={doctor.years || 5} />
                    ))
                ) : (
                    !loadingDoctors && !errorDoctors && (
                        <p className="text-muted">No se encontraron doctores disponibles.</p>
                    )
                )}
            </div> 

            <h3 className="mt-5">Pacientes</h3>

            {loadingPatients && <p className="text-info">Cargando pacientes...</p>}
            {errorPatients && (
                <div className="alert alert-danger" role="alert">
                    <p>Error: {errorPatients}</p>
                    <button onClick={loadPatients} className="btn btn-warning">Reintentar</button>
                </div>
            )}

            <button onClick={loadPatients} disabled={loadingPatients} className="btn btn-primary mb-3">
                {loadingPatients ? 'Cargando...' : 'Recargar Pacientes'}
            </button>

            <div className="patient-list mt-4">
                {patients.length > 0 ? (
                    patients.map((patient) => (
                        <PatientCard key={patient.id} name={patient.name} email={patient.email || "No disponible"} />
                    ))
                ) : (
                    !loadingPatients && !errorPatients && (
                        <p className="text-muted">No se encontraron pacientes disponibles.</p>
                    )
                )}
            </div>     
        </div>
    )
}

export default MedicalTeam
