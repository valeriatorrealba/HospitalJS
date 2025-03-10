import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      "name": "HospitalJS",
      "short_name": "HospitalJS",
      "start_url": "/index.html",
      "display": "standalone",
      "background_color": "#dbdcdc",
      "theme_color": "#3f51b5",
      "description": "HospitalJS, Este proyecto es una aplicación de gestión de un hospital desarrollada en ReactJS. Permite mostrar información de doctores, listar servicios médicos disponibles y agendar citas con los doctores.",
      "form_factor": "seawide",
      "orientation": "portrait",
      "icons": [
          {
              "src": "/icons/icon-72x72.png",
              "sizes": "72x72",
              "type": "image/png"
          },
          {
              "src": "/icons/icon-96x96.png",
              "sizes": "96x96",
              "type": "image/png"
          },
          {
              "src": "/icons/icon-128x128.png",
              "sizes": "128x128",
              "type": "image/png"
          },
          {
              "src": "/icons/icon-144x144.png",
              "sizes": "144x144",
              "type": "image/png"
          },
          {
              "src": "/icons/icon-152x152.png",
              "sizes": "152x152",
              "type": "image/png"
          },
          {
              "src": "/icons/icon-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
          },
          {
              "src": "/icons/icon-384x384.png",
              "sizes": "384x384",
              "type": "image/png"
          },
          {
              "src": "/icons/icon-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
          }
      ],
      "screenshots":[
          {
              "src": "/screenshots/screenshot1.png",
              "sizes": "1080x1920",
              "type": "image/png"
          },
          {
              "src": "/screenshots/screenshot2.png",
              "sizes": "1920x1080",
              "type": "image/png"
          }
      ],
      "protocol_handlers": [
          {
              "protocol": "web+hospitaljs",
              "url": "/index.html?data=%s"
          }
      ],
    },
  })],
})
