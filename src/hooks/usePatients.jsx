import { useState, useEffect } from 'react'
import { getPatients } from '../services/hospitalApi'  

const usePatients = () => {
    const [patients, setPatients] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const loadPatients = async () => {
        setLoading(true)
        setError(null)
        try {
            const patientsData = await getPatients()  
            setPatients(patientsData)  
            setLoading(false)  
        } catch (err) {
            console.error(err);
            setError('Error al obtener los pacientes')  
            setLoading(false)  
        }
    }

    useEffect(() => {
        loadPatients() 
    }, [])

    return { patients, loading, error, loadPatients }
}

export default usePatients
