import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import MedicalTeam from './pages/MedicalTeam'
import Appointments from './pages/Appointments'
import { HospitalContextProvider } from './context/HospitalContext'
import "./App.css"

function App() {
    return (
        <HospitalContextProvider>
            <Router>
                <header className="text-center m-5">
                    <h1>HospitalJS</h1>
                    <nav>
                        <NavLink to="/" className="mx-2">Inicio</NavLink>
                        <NavLink to="/team" className="mx-2">Equipo Médico</NavLink>
                        <NavLink to="/appointments" className="mx-2">Citas</NavLink>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/team" element={<MedicalTeam />} />
                        <Route path="/appointments" element={<Appointments />} />
                    </Routes>
                </main>
            </Router>
        </HospitalContextProvider>
    )
}

export default App
