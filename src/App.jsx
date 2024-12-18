import { useEffect, useState } from 'react'
import DoctorCard from './components/DoctorCard'
import ServiceList from './components/ServiceList'
import AppointmentForm from './components/AppointmentForm'
import './App.css'

function App() {
    const [doctors, setDoctors] = useState([])

    const [services, setServices] = useState([])

    const [appointments, setAppointments] = useState([])

    const nameDoctor = 'Información del Doctor'

    useEffect(() => {
        setDoctors([
        {
            id: 1,
            name: "Dra. Callie Torres",
            specialty: "Ortopedia",
            years: 3,
            available: true
        },
        {  
            id: 2,
            name: "Dra. Arizona Robbins",
            specialty: "Genetista",
            years: 1,
            available: false
        },
        {
            id: 3,
            name: "Dr. Federico Garcia",
            specialty: "Dentista",
            years: 8,
            available: true
        },
        {
            id: 4,
            name: "Dra. Lexie Grahams",
            specialty: "Oftalmología",
            years: 2,
            available: true
        }
        ])

        setServices([
        { 
            id: 1, 
            specialty: 'Ortopedia' 
        },
        { 
            id: 2, 
            specialty: 'Genética' 
        },
        { 
            id: 3, 
            specialty: 'Dentista' 
        },
        { 
            id: 4, 
            specialty: 'Oftalmología' 
        },
        ])
    }, [])

    const handleFormSubmit = (formData) => {
        setAppointments([...appointments, formData])
        console.log('Nueva cita:', formData)
    }

    const selectedDoctor = doctors[0]

    return (
        <div className='container text-center'>
            <div className='m-5 p-3'>
                <h1>HospitalJS</h1>
            </div>
            <div className='row'>
                <div className='col'>
                    <h3>{nameDoctor}</h3>
                    {
                        selectedDoctor ? (<DoctorCard name={selectedDoctor.name} specialty={selectedDoctor.specialty} years={selectedDoctor.years} />) 
                                        : (<p>Cargando información del doctor...</p>)
                    }
                </div>
                <div className='col'>
                    <ServiceList services={services} />
                </div>
                <AppointmentForm doctors={doctors} onFormSubmit={handleFormSubmit} />
            </div>
        </div>
    )
}

export default App
