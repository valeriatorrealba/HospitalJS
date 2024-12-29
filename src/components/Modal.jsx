import ReactDOM from 'react-dom'

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null

    return ReactDOM.createPortal(
        <div style={modalStyle}>
            <div style={modalContentStyle}>
                <button onClick={onClose} style={closeButtonStyle}>Cerrar</button>
                {children}
            </div>
        </div>,
        document.getElementById('portal-root')
    )
}

const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const modalContentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
}

const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
}

export default Modal
