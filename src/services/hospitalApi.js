import axiosClient from './axiosClient'

// Obtiene
export const getDoctors = async () => {
    const response = await axiosClient.get('/doctores')
    return response.data
}

// Agrega
export const addDoctor = async (doctorData) => {
    const response = await axiosClient.post('/doctores', doctorData)
    return response.data
}

// Actualiza
export const updateDoctor = async (doctorId, doctorData) => {
    const response = await axiosClient.put(`/doctores/${doctorId}`, doctorData)
    return response.data
}

// Elimina
export const deleteDoctor = async (doctorId) => {
    await axiosClient.delete(`/doctores/${doctorId}`)
}

//Pacientes

// Obtiene
export const getPatients = async () => {
    try {
        const result = await axiosClient.post('/pacientes')
        
        if (!Array.isArray(result.data)) {
            throw new Error('La respuesta de la API no es un arreglo')
        }

        return result.data
    } catch (error) {
        console.error("Error al obtener los pacientes", error)
        throw error
    }
}


// Agrega
export const addPatient = async (patientData) => {
    const response = await axiosClient.post('/pacientes', patientData)
    return response.data
}

// Actualiza
export const updatePatient = async (patientId, patientData) => {
    const response = await axiosClient.put(`/pacientes/${patientId}`, patientData)
    return response.data
}

// Elimina
export const deletePatient = async (patientId) => {
    await axiosClient.delete(`/pacientes/${patientId}`)
}
