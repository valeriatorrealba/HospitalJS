import { useState } from 'react';

const GetLocation = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    // Obtener Ubicación Actual
    const getLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                },
                (error) => {
                    setError("Error obteniendo la ubicación: " + error.message);
                    console.log("Error obteniendo la ubicación:", error);
                }
            );
        } else {
            setError("Geolocalización no soportada en este navegador");
            console.log("Geolocalización no soportada en este navegador");
        }
    };

    return (
        <div>
            <button onClick={getLocation}>Obtener Ubicación</button>
            {location && (
                <div>
                    <p><strong>Latitud:</strong> {location.lat}</p>
                    <p><strong>Longitud:</strong> {location.lon}</p>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default GetLocation;
