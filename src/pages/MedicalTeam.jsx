import React, { useContext, useState } from 'react'
import { HospitalContext } from '../context/HospitalContext'
import DoctorCard from '../components/DoctorCard'

function MedicalTeam() {
    const { doctors } = useContext(HospitalContext)
    const [specialtyFilter, setSpecialtyFilter] = useState("")

    const filteredDoctors = doctors.filter((doctor) =>
        specialtyFilter ? doctor.specialty === specialtyFilter : true
    )

    return (
        <div>
            <h2>Equipo Médico</h2>
            <label>Filtrar por Especialidad: </label>
            <select onChange={(e) => setSpecialtyFilter(e.target.value)} value={specialtyFilter}>
                <option value="">Todas</option>
                {Array.from(new Set(doctors.map((doc) => doc.specialty))).map((specialty) => (
                    <option key={specialty} value={specialty}>{specialty}</option>
                ))}
            </select>
            <div className="doctor-list">
                {filteredDoctors.map((doctor) => (
                    <DoctorCard key={doctor.id} {...doctor} />
                ))}
            </div>
        </div>
    )
}

export default MedicalTeam

