self.addEventListener("install", (event) =>{
    event.waitUntil(
        caches.open("hospital-v1").then((cache) => {
            return cache.addAll([
                "/",
                "/index.html",
                "/App.css",
                "/App.jsx",
                "/index.css",
                "/main.jsx",
                "/logo.png",
                "/manifest.json",
                "/icons/icon-72x72.png",
                "/icons/icon-96x96.png", 
                "/icons/icon-128x128.png",
                "/icons/icon-144x144.png",
                "/icons/icon-152x152.png",
                "/icons/icon-192x192.png",
                "/icons/icon-384x384.png",
                "/icons/icon-512x512.png",
                "/components/AppointmentForm.jsx",
                "/components/DoctorCard.jsx",
                "/components/Doctor.jsx",
                "/components/ErrorBoundary.jsx",
                "/components/FormularioPaciente.jsx",
                "/components/Modal.jsx",
                "/components/PatientCard.jsx",
                "/components/PatientForm.jsx",
                "/components/PatientList.jsx",
                "/components/PatientManager.jsx",
                "/components/ServiceList.jsx",
                "/context/AuthContext.jsx",
                "/context/HospitalContext.jsx",
                "/hooks/useDoctors.jsx",
                "/hooks/useForm.jsx",
                "/hooks/useHospitalData.jsx",
                "/hooks/usePatients.jsx",
                "/hooks/withLoading.jsx",
                "/pages/AdminPanel.jsx",
                "/pages/Appointments.jsx",
                "/pages/DoctorRegistrationForm.jsx",
                "/pages/Home.jsx",
                "/pages/Login.jsx",
                "/pages/MedicalTeam.jsx",
                "/services/api.js",
                "/services/axiosClient.js",      
                "/services/config.js",      
                "/services/data.js",      
                "/services/hospitalApi.js",      
            ]);
        })
    );
});  

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.open("hospital-v1").then((cache) => {
            return cache.match(event.request).then((response) => {
                const fetchPromise = fetch(event.request).then((networkResponse) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
                return response || fetchPromise;
            });
        })
    );
});