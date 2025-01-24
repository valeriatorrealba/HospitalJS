import React, { useState, useEffect } from 'react'
import ServiceList from '../components/ServiceList'
import { fetchServices } from '../services/api'

function Home() {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const loadServices = async () => {
        setLoading(true)
        setError(null)
        try {
            const data = await fetchServices() 
            setServices(data)
        } catch (err) {
            setError(err.message) 
        } finally {
            setLoading(false) 
        }
    }

    useEffect(() => {
        loadServices() 
    }, [])

    return (
        <div>
            <h2>Servicios Médicos</h2>
            {loading && <p>Cargando servicios...</p>}
            {error && (
                <div>
                    <p>Error: {error}</p>
                    <button onClick={loadServices}>Reintentar</button>
                </div>
            )}
            <button onClick={loadServices} disabled={loading} className="btn btn-primary">
                Recargar Servicios
            </button>
            <ServiceList services={services} />
        </div>
    )
}

export default Home

