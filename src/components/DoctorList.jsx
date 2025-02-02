// src/components/DoctorList.jsx
import { useEffect, useState } from 'react'
import { getDoctors } from '../services/hospitalApi'
import DoctorCard from './DoctorCard'

const DoctorList = () => {
    const [doctores, setDoctores] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchDoctores = async () => {
            try {
                const data = await getDoctors()
                setDoctores(data)
            } catch {
                setError('Error al cargar la lista de doctores.')
            }
        }

        fetchDoctores()
    }, [])

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            {doctores.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
        </div>
    )
}

export default DoctorList
