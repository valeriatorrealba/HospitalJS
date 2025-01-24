const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchDoctors = async () => {
    const response = await fetch(API_URL)
    if (!response.ok) {
        throw new Error('Error al obtener los datos de los doctores')
    }
    return response.json()
}

export const fetchServices = async () => {
    const response = await fetch(`${API_URL}/1/posts`)
    if (!response.ok) {
        throw new Error('Error al obtener los datos de los servicios')
    }
    return response.json()
}
