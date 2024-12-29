import { useEffect, useState } from 'react'
import DoctorCard from './components/DoctorCard'
import ServiceList from './components/ServiceList'
import AppointmentForm from './components/AppointmentForm'
import { HospitalContext } from './context/HospitalContext'
import { initialDoctors, initialServices } from './data/data'
import Modal from './components/Modal'
import {Profiler} from 'react'
import './App.css'

function App() {
    const [doctors, setDoctors] = useState([])
    const [services, setServices] = useState([])
    const [appointments, setAppointments] = useState([])

    const nameDoctor = 'Información del Doctor'

    useEffect(() => {
        setDoctors(initialDoctors)
        setServices(initialServices)
    }, [])

    const handleFormSubmit = (formData) => {
        setAppointments([...appointments, formData])
        console.log('Nueva cita:', formData)
    }

    const selectedDoctor = doctors[0]

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null)

    const handleOpenModal = (content) => {
        setModalContent(content)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <HospitalContext.Provider value={{ doctors, services, appointments }}>
            <div className='container text-center'>
                <div className='m-5 p-3'>
                    <h1>HospitalJS</h1>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h3>{nameDoctor}</h3>
                        <Profiler id="DoctorCard" onRender={(id, phase, actualDuration) => {
                                console.log(`Profiler [${id}] - Fase: ${phase} - Duración: ${actualDuration}ms`)
                            }}>    
                        {
                            selectedDoctor ? (<DoctorCard name={selectedDoctor.name} specialty={selectedDoctor.specialty} years={selectedDoctor.years} />) 
                            : (<p>Cargando información del doctor...</p>)
                        }
                        </Profiler>
                    </div>
                    <div className='col'>
                        <ServiceList services={services} />
                    </div>
                    <AppointmentForm doctors={doctors} onFormSubmit={handleFormSubmit} />
                </div>
                <div className="m-3">
                    <button onClick={() => handleOpenModal(
                        <DoctorCard name="Dr. Federico Garcia" specialty="Dentista" years={8} />)} className="btn btn-primary">
                            Ver información del doctor
                    </button>
                </div>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    {modalContent}
                </Modal>
            </div>
        </HospitalContext.Provider>
    )
}

export default App
