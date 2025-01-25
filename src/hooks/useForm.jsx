import { useState } from 'react'

const useForm = (initialValues, validate) => {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })

        if (validate) {
            const validationErrors = validate({ [name]: value })
            setErrors((prevErrors) => ({
                ...prevErrors,
                ...validationErrors,
            }))
        }
    }

    const handleSubmit = (e, onSubmit) => {
        e.preventDefault()

        if (validate) {
            const validationErrors = validate(values)
            setErrors(validationErrors)

            if (Object.keys(validationErrors).length === 0) {
                onSubmit()
            }
        } else {
            onSubmit()
        }
    }

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
    }
}

export default useForm
