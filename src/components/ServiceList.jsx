import PropTypes from 'prop-types'

function ServiceList({ services }) {    
    return (
        <div>
            <h3>Servicios Médicos</h3>
            <ul>
                {services.map((service) => (
                    <li className='list-unstyled' key={service.id}>{service.specialty}</li>
                    ))}
            </ul>
        </div>
    )
}

ServiceList.propTypes = {
    services: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
            })
    ).isRequired,
}

export default ServiceList
