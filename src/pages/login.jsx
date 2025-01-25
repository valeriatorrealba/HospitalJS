import React, {useState} from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import CryptoJS from 'crypto-js'

const Login = () => {
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        if (role === "") {
            alert("Selecciona un rol")
            return
        }

        if (!email || !password) {
            alert("Por favor, ingrese todos los campos")
            return
        }

        const encryptedPassword = CryptoJS.AES.encrypt(password, 'your-secret-key').toString()

        const user = { email, password: encryptedPassword, role }
        localStorage.setItem("user", JSON.stringify(user))

        const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.m8W2FgeikvS1F6BOAT5U8u3K8Gq5ybaJQeqE8OcbVhM"
        const userData = {
            email: "test@example.com",
            role: role,
            password: "contraseña123" 
        } 
        
        localStorage.setItem("jwtToken", jwtToken)
        localStorage.setItem("user", JSON.stringify(userData))

        console.log("Datos guardados en localStorage:", localStorage.getItem("user"))
        console.log("Token guardado en localStorage:", localStorage.getItem("jwtToken"))

        login(role)
        
        if (role === "admin") {
            navigate("/admin-panel")
        } else {
            navigate("/team")
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <label>
                Selecciona un rol:
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">--Seleccionar--</option>
                <option value="admin">Administrador</option>
                <option value="doctor">Doctor</option>
                </select>
            </label>
            <br />
            <label>Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <br />
            <label> Contraseña: 
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>


            <br />
            <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
    )
}

export default Login
