import { useContext } from 'react'
import { HospitalContext } from '../context/HospitalContext'
import AppointmentForm from '../components/AppointmentForm'

function Appointments() {
    const { doctors, addAppointment } = useContext(HospitalContext)

    return (
        <div>
            <h2>Agendar Cita</h2>
            <AppointmentForm doctors={doctors} onFormSubmit={addAppointment} />
        </div>
    )
}

export default Appointments
