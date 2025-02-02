import PropTypes from 'prop-types';

function withLoading(Component) {
    function WrapperComponent({ isLoading, ...props }) {
        if (isLoading) {
            return <p style={{ color: 'blue' }}>Cargando...</p>
        }
        return <Component {...props} />
    }

    WrapperComponent.propTypes = {
        isLoading: PropTypes.bool.isRequired,
    };

    return WrapperComponent;
}

export default withLoading
