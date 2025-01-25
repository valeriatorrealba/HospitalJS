import { useState, useEffect } from 'react'
import { fetchDoctors } from '../services/api'

const useDoctors = () => {
    const [doctors, setDoctors] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const loadDoctors = async () => {
        setLoading(true)
        setError(null)
        try {
            const data = await fetchDoctors()
            const adaptedData = data.map((doctor) => ({
                id: doctor.id,
                name: doctor.name,
                specialty: "Especialidad Genérica",
                years: 5,
            }))
            setDoctors(adaptedData)
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Error al cargar los datos'
            setError(errorMessage)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadDoctors()

        const intervalId = setInterval(() => {
            loadDoctors()
        }, 30000)

        return () => clearInterval(intervalId)
    }, [])

    return { doctors, loading, error, loadDoctors }
}

export default useDoctors
