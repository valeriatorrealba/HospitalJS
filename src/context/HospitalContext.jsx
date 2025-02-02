import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { initialDoctors, initialServices } from '../services/data'

export const HospitalContext = createContext()

export const HospitalContextProvider = ({ children }) => {
    const [doctors, setDoctors] = useState([])
    const [services, setServices] = useState([])
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        setDoctors(initialDoctors)
        setServices(initialServices)
    }, [])

    const addAppointment = (appointment) => {
        setAppointments([...appointments, appointment])
    }
    
    return (
        <HospitalContext.Provider value={{ doctors, services, appointments, addAppointment }}>
            {children}
        </HospitalContext.Provider>
    )
}

HospitalContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
