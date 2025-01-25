import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error capturado:", error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '1em', background: '#ffe0e0', color: '#b00000', borderRadius: '4px' }}>
                    <h2>Ha ocurrido un error en la aplicación</h2>
                    <p>{this.state.error?.message || "Error desconocido"}</p>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
