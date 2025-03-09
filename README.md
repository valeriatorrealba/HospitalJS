# HospitalJs

Este proyecto es una aplicación de gestión de un hospital desarrollada en ReactJS. Permite mostrar información de doctores, listar servicios médicos disponibles y agendar citas con los doctores.

## Instrucciones para Visualizar el Proyecto
1. Clonar el repositorio:
```bash
git clone git@github.com:valeriatorrealba/HospitalJS.git
```

2. Instala las dependencias:
```bash
npm install
```
3. En el terminal Inicia el servidor de desarrollo

``` bash
npm run dev
``` 
4. Accede al local host desde tu navegador

``` bash
http://localhost:5173/
``` 
## Características
### 1. **Componentes Reutilizables**
- **DoctorCard**: Muestra la información de un doctor (nombre, especialidad, años de experiencia).
- **ServiceList**: Lista los servicios médicos disponibles en el hospital.
- **AppointmentForm**: Un formulario para agendar una cita con un doctor.

### 2. **Renderización de Datos con JSX**
- Utiliza JSX para estructurar visualmente los componentes.
- Muestra dinámicamente datos de doctores, servicios y citas.

### 3. **Flujo de Datos con Props**
- Pasa datos entre componentes:
  - Doctores desde el componente principal (`App`) al componente `DoctorCard`.
  - Servicios desde el componente principal al componente `ServiceList`.
  - Datos del formulario de citas desde `AppointmentForm` al componente principal.

### 4. **Listas y Keys**
- Renderiza dinámicamente listas de doctores y servicios utilizando keys únicas para optimizar el rendimiento.

### 5. **Formulario con Manejo de Estado**
- Permite a los usuarios agendar citas mediante el formulario `AppointmentForm`.
- Utiliza `useState` para manejar los datos del formulario (nombre del paciente, especialidad del doctor, fecha de la cita).

### 6. **Hooks y Ciclo de Vida**
- Usa `useEffect` para cargar datos de doctores y servicios al montar el componente principal.
- Usa `useState` para manejar el estado de doctores, servicios y citas.

### 7. Manejo del DOM Virtual en ReactJS
React utiliza el DOM virtual para comparar una representación con su estado anterior y aplicar únicamente los cambios necesarios al DOM real, mejorando el rendimiento.

### 8. Por qué se utilizó Fetch API
Se eligió Fetch API porque:
1. Es nativa del navegador y no requiere instalación de dependencias adicionales.
2. Es compatible con Promesas, lo que facilita el manejo asíncrono.
3. Para este caso de uso básico, Fetch proporciona toda la funcionalidad necesaria.

Si fuera necesario manejar interceptores o configurar un cliente HTTP personalizado, se consideraría Axios como una opción alternativa.

### 9. Datos de Ingreso Login

role: Admin
email: "test@example.com"
password: "contraseña123" 

### 10. PWA (Progressive Web App)

Una PWA es una aplicación web que combina lo mejor de las aplicaciones móviles y las páginas web. Se puede instalar en dispositivos como una app nativa, funciona sin conexión y ofrece un rendimiento optimizado.

## Estructura de carpetas y archivos
``` bash

HospitalJS/
│
├── pdf/
│   ├── Discusión y Análisis de Casos.pdf
│   ├── Informe sobre Preguntas Teóricas de TypeScript 1.pdf
│   ├── Informe sobre Preguntas Teóricas de TypeScript.pdf
│   └── Informe PWA.pdf
│   
├── public/
│   └──  logo.png
│  
├── src/
│   ├── components/
│   │   ├── AppointmentForm.jsx    
│   │   ├── DoctorCard.jsx  
│   │   ├── DoctorList.jsx  
│   │   ├── ErrorBoundary.jsx 
│   │   ├── FormularioPaciente.jsx
│   │   ├── Modal.jsx  
│   │   ├── PatientCard.jsx  
│   │   ├── PatientForm.jsx  
│   │   ├── PatientList.jsx  
│   │   ├── PatientManager.jsx  
│   │   └── ServiceList.jsx
│   ├── context/
│   │   ├── AuthContext.jsx  
│   │   └── HospitalContext.jsx  
│   ├── hooks/
│   │   ├── useDoctors.jsx 
│   │   ├── useForm.jsx
│   │   ├── useHospitalData.jsx
│   │   ├── usePatients.jsx
│   │   └── withLoading.jsx  
│   ├── pages/
│   │   ├── AdminPanel.jsx
│   │   ├── Appointments.jsx  
│   │   ├── DoctorRegistrationForm.jsx
│   │   ├── Home.jsx  
│   │   ├── Login.jsx  
│   │   └── MedicalTeam.jsx  
│   ├── sevices/
│   │   ├── api.js  
│   │   ├── axiosClient.js  
│   │   ├── config.js  
│   │   ├── data.js  
│   │   └── hospitalApi.js  
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│   
├── .gitignore                
├── eslint.config.js
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md 
└── vite.config.js
```
## Tecnologías Usadas
- **HTML5**
- **REACT**
- **BOOTSTRAP**

## PDF 

Discusión y Análisis de Casos: [Aplicación de ReactJS en el Proyecto del Hospital](https://github.com/valeriatorrealba/HospitalJS/blob/b36da5fb52c7c1b7134e01be482f7c6ce80575c8/Pdf/Discusi%C3%B3n%20y%20An%C3%A1lisis%20de%20Casos.pdf)

Preguntas Teóricas de TypeScript: [Sesión Interactiva de Preguntas y Respuestas: Introducción a TypeScript en ReactJS](https://github.com/valeriatorrealba/HospitalJS/blob/main/Pdf/Informe%20sobre%20Preguntas%20Te%C3%B3ricas%20de%20TypeScript%201.pdf)

Informe sobre Preguntas Teóricas de TypeScript: [Sesión Interactiva de Preguntas y Respuestas: Introducción a TypeScript en ReactJS](https://github.com/valeriatorrealba/HospitalJS/blob/main/Pdf/Informe%20sobre%20Preguntas%20Te%C3%B3ricas%20de%20TypeScript.pdf)

Informe PWA: [Informe PWA](https://github.com/valeriatorrealba/HospitalJS/blob/main/Pdf/InformePWA.pdf) 

Informe PWA2: [Informe PWA](https://github.com/valeriatorrealba/HospitalJS/blob/main/Pdf/InformePWA2.pdf) 

Informe PWA3: [Informe PWA](https://github.com/valeriatorrealba/HospitalJS/blob/main/Pdf/InformePWA3.pdf) 

## Autor
Desarrollado por Valeria Torrealba.
