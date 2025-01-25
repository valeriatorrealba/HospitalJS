import { useState, useEffect } from 'react'

const useHospitalData = () => {
    const [doctors, setDoctors] = useState([])
    const [patients, setPatients] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const doctorsResponse = await fetch('/api/doctors')
                const patientsResponse = await fetch('/api/patients')

                if (!doctorsResponse.ok || !patientsResponse.ok) {
                    throw new Error('Hubo un problema al obtener los datos')
                }

                const doctorsData = await doctorsResponse.json()
                const patientsData = await patientsResponse.json()

                setDoctors(doctorsData)
                setPatients(patientsData)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return { doctors, patients, loading, error }
}

export default useHospitalData
