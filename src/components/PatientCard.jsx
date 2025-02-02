import PropTypes from 'prop-types'

const PatientCard = ({ name, email }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Correo: {email}</p>
            </div>
        </div>
    )
}

PatientCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default PatientCard
