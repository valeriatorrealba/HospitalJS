import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import MedicalTeam from './pages/MedicalTeam'
import Appointments from './pages/Appointments'
import { HospitalContextProvider } from './context/HospitalContext'
import "./App.css"
import { AuthProvider, useAuth } from './context/AuthContext'
import AdminPanel from './pages/AdminPanel'
import Login from './pages/Login'

const ProtectedRoute = ({ children, allowedRoles  }) => {
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
    return (
        <AuthProvider>
            <HospitalContextProvider>
                <Router>
                    <header className="text-center m-5">
                        <h1>HospitalJS</h1>
                        <nav>
                            <NavLink to="/" className="mx-2">Inicio</NavLink>
                            <NavLink to="/team" className="mx-2">Equipo Médico</NavLink>
                            <NavLink to="/appointments" className="mx-2">Citas</NavLink>
                            <NavLink to="/login" className="mx-2">login</NavLink>
                        </nav>
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/team" element={
                                <MedicalTeam /> 
                            } 
                            />
                            <Route path="/appointments" element={<Appointments />} />
                            
                            <Route path="/login" element={
                                <ProtectedRoute allowedRoles={["admin", "doctor"]}>  
                                <Login /> 
                                </ProtectedRoute>
                            } 
                            />
                            <Route path="/admin-panel" element={<AdminPanel />} />
                        </Routes>
                    </main>
                </Router>
            </HospitalContextProvider>
        </AuthProvider>
    )
}

export default App
