import React from 'react'
import PropTypes from 'prop-types'

function ServiceList({ services }) {
    return (
        <div>
            <h3>Servicios Médicos</h3>
            <ul>
                {services.map((service, index) => (
                    <li key={index} className="list-unstyled">{service.title || service.name}</li>
                ))}
            </ul>
        </div>
    )
}

ServiceList.propTypes = {
    services: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
            name: PropTypes.string 
        })
    ).isRequired
}

export default ServiceList
