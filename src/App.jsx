import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import MedicalTeam from './pages/MedicalTeam'
import Appointments from './pages/Appointments'
import { HospitalContextProvider } from './context/HospitalContext'
import "./App.css"
import { AuthProvider, useAuth } from './context/AuthContext'
import AdminPanel from './pages/AdminPanel'
import Login from './pages/Login'
import FormularioPaciente from './components/FormularioPaciente'
import DoctorRegistrationForm from './pages/DoctorRegistrationForm'
import ErrorBoundary from './components/ErrorBoundary'
import PatientManager from './components/PatientManager'
import PropTypes from 'prop-types'
import PatientForm from './components/PatientForm'

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { isAuthenticated, role } = useAuth()
        
    if (!isAuthenticated) {
        return <Login />
    }

    if (!allowedRoles.includes(role)) {
        return <h2>Acceso denegado. No tienes permiso para acceder a esta sección.</h2>
    }
    
    return children
}

function App() {

    const handlePatientSaved = (patientData) => {
        console.log('Patient saved:', patientData);
    }
    return (
        <AuthProvider>
            <HospitalContextProvider>
                <Router>
                    <ErrorBoundary>
                        <header className="text-center m-5">
                            <h1>HospitalJS</h1>
                            <nav>
                                <NavLink to="/" className="mx-2"></NavLink>
                                <NavLink to="/inicio" className="mx-2">Inicio</NavLink>
                                <NavLink to="/team" className="mx-2">Equipo Médico</NavLink>
                                <NavLink to="/appointments" className="mx-2">Citas</NavLink>
                                <NavLink to="/patient-Manager" className="mx-2">Gestión de Pacientes</NavLink>
                                <NavLink to="/register-doctor" className="mx-2">Registrar Doctor</NavLink>
                                <NavLink to="/login" className="mx-2">login</NavLink>
                            </nav>
                        </header>
                        <main>
                            <Routes>
                                <Route path="/inicio" element={<Home />} />
                                <Route path="/team" element={<MedicalTeam />} />
                                <Route path="/appointments" element={<Appointments />} />
                                <Route path="/patient-Manager" element={<PatientManager />} />
                                <Route path="/patient-form" element={<PatientForm onPatientSaved={handlePatientSaved}/>} />   
                                <Route path="/formulario-paciente" element={<FormularioPaciente />} />                                
                                <Route path="/login" element={<ProtectedRoute allowedRoles={["admin", "doctor"]}><Login /></ProtectedRoute>} />
                                <Route path="/admin-panel" element={<AdminPanel />} />
                                <Route path="/register-doctor" element={<DoctorRegistrationForm />} />
                            </Routes>
                        </main>
                    </ErrorBoundary>
                </Router>
            </HospitalContextProvider>
        </AuthProvider>
    )
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default App
