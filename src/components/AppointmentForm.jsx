import React from 'react';
import { useState } from 'react'
import PropTypes from 'prop-types'
import { useRef } from 'react'

function AppointmentForm({ doctors, onFormSubmit }) {
    const [formData, setFormData] = useState({
        patientName: '',
        doctorId: '',
        appointmentDate: '',
    })

    const reference = useRef(null)
    const handleFocus = () => {
        reference.current.focus()
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="text-bg-primary">
            <h3 className='p-2'>Agendar Cita</h3>
            <div className='row'>
                <div className='col'>
                    <label className='mx-2'>Nombre del Paciente:</label>
                    <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} ref={reference} required />
                </div>
                <div className='col'>
                    <label className='mx-2'>Seleccione un Doctor:</label>
                    <select name="doctorId" value={formData.doctorId} onChange={handleChange} required >
                        <option value="">Seleccione un doctor</option>
                        {doctors.map((doctor) => (
                            <option key={doctor.id} value={doctor.id}> {doctor.name} </option>
                        ))}
                    </select>
                </div>
                <div className='col'>
                    <label className='mx-2'>Fecha</label>
                    <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required />
                </div>
            </div>
            <button type="submit" className='m-3' onClick={handleFocus}>Enviar</button>
        </form>
    )
}

AppointmentForm.propTypes = {
    doctors: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    onFormSubmit: PropTypes.func.isRequired,
}

export default AppointmentForm
