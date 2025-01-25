import React from 'react'
import useForm from '../hooks/useForm'

const validateDoctorForm = (values) => {
    const errors = {}

    if (!values.name) {
        errors.name = 'El nombre es obligatorio'
    }

    if (!values.specialty) {
        errors.specialty = 'La especialidad es obligatoria'
    }

    if (!values.years || values.years <= 0) {
        errors.years = 'Debe ingresar años de experiencia válidos'
    }

    if (!values.email) {
        errors.email = 'El correo es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Debe ingresar un correo válido'
    }

    return errors
}

const DoctorRegistrationForm = () => {
    const initialValues = {
        name: '',
        specialty: '',
        years: '',
        email: '', 
    }

    const { values, errors, handleChange, handleSubmit } = useForm(
        initialValues,
        validateDoctorForm
    )

    const onSubmit = () => {
        console.log('Formulario enviado:', values)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" value={values.name} onChange={handleChange} />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="specialty">Especialidad:</label>
                <input type="text" id="specialty" name="specialty" value={values.specialty} onChange={handleChange} />
                {errors.specialty && <p className="error">{errors.specialty}</p>}
            </div>

            <div>
                <label htmlFor="years">Años de experiencia:</label>
                <input type="number" id="years" name="years" value={values.years} onChange={handleChange} />
                {errors.years && <p className="error">{errors.years}</p>}
            </div>

            <div>
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" value={values.email} onChange={handleChange} />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <button type="submit" className="btn btn-primary">Registrar Doctor </button>
        </form>
    )
}

export default DoctorRegistrationForm
