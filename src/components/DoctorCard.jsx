import PropTypes from 'prop-types'
import withLoading from '../hooks/withLoading'

function DoctorCard({ name, specialty, years }) {
    return (
        <div>
            <h5>Nombre: {name}</h5>
            <p>Especialidad: {specialty}</p>
            <p>Años de experiencia: {years}</p>
        </div>
    )
}

DoctorCard.propTypes = {
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    years: PropTypes.number.isRequired,
}

export default withLoading(DoctorCard)
