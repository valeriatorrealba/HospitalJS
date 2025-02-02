import { useState } from 'react'
import { addPatient, updatePatient } from '../services/hospitalApi'
import PropTypes from 'prop-types'

const PatientForm = ({ existingPatient, onPatientSaved }) => {
    const [formData, setFormData] = useState(
        existingPatient || { nombre: '', edad: '', enfermedad: '' }
    )
    const [error, setError] = useState(null)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let savedPatient
            if (existingPatient) {
                savedPatient = await updatePatient(existingPatient.id, formData)
            } else {
                savedPatient = await addPatient(formData)
                setFormData({ nombre: '', edad: '', enfermedad: '' })
            }
            onPatientSaved(savedPatient)
        } catch (err) {
            setError(`Error al guardar el paciente: ${err.message}`)
        }
    }

    return (
        <div>
            <h2>{existingPatient ? 'Editar Paciente' : 'Registrar Paciente'}</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
                <input type="number" name="edad" value={formData.edad} onChange={handleChange} placeholder="Edad" required />
                <input type="text" name="enfermedad" value={formData.enfermedad} onChange={handleChange} placeholder="Enfermedad" />
                <button type="submit"> {existingPatient ? 'Actualizar' : 'Registrar'} </button>
            </form>
        </div>
    )
}

PatientForm.propTypes = {
    existingPatient: PropTypes.shape({
        id: PropTypes.string, 
        nombre: PropTypes.string.isRequired,
        edad: PropTypes.number.isRequired,
        enfermedad: PropTypes.string
    }),
    onPatientSaved: PropTypes.func.isRequired
}

export default PatientForm
