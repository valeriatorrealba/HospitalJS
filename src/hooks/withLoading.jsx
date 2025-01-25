function withLoading(Component) {
    return function WrapperComponent({ isLoading, ...props }) {
        if (isLoading) {
            return <p style={{ color: 'blue' }}>Cargando...</p>
        }
        return <Component {...props} />
    }
}

export default withLoading
