import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('/sw.js')
//     .then(()=> console.log('Service Worker Registered'))
//     .catch((error)=>
//       console.log("Service Worker Registration Failed: ", error)
//     )
// }

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log("SW registrado con éxito", registration);
  })
    .catch((error) => {
      console.error("Error al registrar el SW", error);
  });

  navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (confirm("Nueva versión disponible. ¿Actualizar?")) {
          window.location.reload();
      }
  });
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
