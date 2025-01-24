import React, { useContext } from 'react'
import { HospitalContext } from '../context/HospitalContext'
import ServiceList from '../components/ServiceList'

function Home() {
    const { services } = useContext(HospitalContext)
    return (
        <div>
            <h2>Bienvenido a HospitalJS</h2>
            <p>Proporcionamos atención médica de calidad con los mejores especialistas.</p>
            <ServiceList services={services} />
        </div>
    )}

export default Home
